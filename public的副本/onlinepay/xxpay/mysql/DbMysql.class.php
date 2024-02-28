<?php
/*
 +-------------------------------------------------
 |  DbMysql.class.php  mysql数据库类
 +-------------------------------------------------
 |	
 +-------------------------------------------------
*/

class DbMysql{
	//数据库连接link
	private $link = NULL;
	//连接配置参数
	private $config = array();
	//是否开启debug模式输出错误信息
	private $debug;
	//extension类型
	private $type ='mysqli';
	//记录集
	private $result;
	//上次操作执行的SQL语句
	private $lastSql;
	
	public function __construct($config=array()){
        if(!extension_loaded('mysqli') ) {
            $this->type = 'mysql';
        }
		$this->config   =   $config;	
		
	}
	//连接数据库
	public function connect($debug=true){
		$this->debug = $debug;
		
        if(!is_array($this->config) || empty($this->config)) {
			$this->throwError('缺少Mysql连接配置参数');	
		}else{
			$this->config=$this->parseConfig($this->config);
		}		
		
		$config = $this->config;
		$config['hostport'] = $config['hostport']?intval($config['hostport']):3306;
		
		if($this->type=='mysqli'){
        	$this->link = @new mysqli($config['hostname'],$config['username'],$config['password'],$config['database'],$config['hostport']);
			if(mysqli_connect_errno()){
				$this->throwError('连接数据库失败','',mysqli_connect_errno(),mysqli_connect_error());	
			}
		}else{
			$this->link = @mysql_connect($config['hostname'].':'.$config['hostport'],$config['username'],$config['password']);	
			if(!$this->link){
				$this->throwError('连接数据库失败','',mysql_errno(),mysql_error());	
			}
			@mysql_select_db($config['database'], $this->link) or $this->throwError("打开数据库 <font color='#cc0000'>{$config['database']}</font> 失败");	
		}
		//设置连接查询字符集
		$this->set_charset();
			
	}
	//执行一个查询语句 返回结果：mysql记录集
	public function query($sql){
		$this->lastSql = $sql;
		if($this->type=='mysqli'){
			$this->result = $this->link->query($sql);
		}else{
			$this->result = mysql_query($sql,$this->link);
		}
		if(!$this->result){
			$this->throwError('SQL语句错误',$sql);
		}
		return $this->result;
	}
	//查询所有记录 返回结果：二维数组
	public function getAll($sql){
		$this->result = $this->query($sql);
		$rows = array();
		if($this->type=='mysqli'){
			while($row=$this->result->fetch_assoc()){
				$rows[] = $row;	
			}
		}else{
			while($row=mysql_fetch_assoc($this->result)){
				$rows[] = $row;	
			}
		}
		return $rows;	
	}
	//查询一条记录 返回结果: 一维数组 
	public function getOne($sql){
		$this->result = $this->query($sql);
		$row = array();
		if($this->type=='mysqli'){
			$row=$this->result->fetch_assoc();
		}else{
			$row=mysql_fetch_assoc($this->result);
		}
		return $row;				
		
	}
	//获取单条记录单字段值  返回结果：字符串
	public function getField($sql,$field){
		$row = $this->getOne($sql);
		return $row[$field];
	}
	//SQL执行语句查询 insert update delete 返回结果: 影响记录条数
	public function execute($sql){
		$this->result = $this->query($sql);
		if($this->result){
			return $this->affectedRows();	
		}else{
			return false;	
		}
		
	}
	//返回上一次 MySQL 操作所影响的记录行数
	public function affectedRows() {
		if($this->type=='mysqli'){
			return $this->link->affected_rows;
		}else{
			return mysql_affected_rows($this->link);	
		}
	}
	
	//返回上一次查询中字段名称集
	public function getQueryFields(){
		$rows = array();
		if($this->type=='mysqli'){
			while($row=$this->result->fetch_field()){
				$rows[] = $row->name;	
			}
		}else{
			$i = 0;
			$resultCount = mysql_num_fields($this->result);
			mysql_field_seek($this->result,0);
			while ($i < $resultCount) {
				$meta = mysql_fetch_field($this->result);
				$rows[] = $meta->name;
				$i++;
			}
		}
		return $rows;		
	}
	
	//获取当前数据库连接配置信息
	public function getDbConfig(){
		return $this->config;	
	}
	
	//返回当前数据库所有表
	public function showTables() {
		$database = $this->config['database'];
		$sql = "SHOW TABLES FROM `{$database}`";
		$tableList = array();
		$varKey = "Tables_in_{$database}";
		$rows = $this->getAll($sql);
		foreach($rows as $val){
			$tableList[] = $val[$varKey];	
		}
		return $tableList;
	}
	//返回当前数据库指定表的全部字段信息 $resultType 返回数据结构类型
	public function showFields($tabelName,$resultType=1){
		$sql = "DESC `{$tabelName}`";
		$list = $this->getAll($sql);
		$FieldInfo = array();
		if($resultType==1){
			foreach($list as $key=>$val){
				$FieldInfo['Field'][$key] 	= $val['Field'];
				$FieldInfo['Type'][$key] 	= $val['Type'];
				$FieldInfo['Null'][$key] 	= $val['Null'];
				$FieldInfo['Key'][$key] 	= $val['Key'];
				$FieldInfo['Default'][$key] = $val['Default'];
				$FieldInfo['Extra'][$key] 	= $val['Extra'];
			}	
		}else{
			$FieldInfo = $list;	
		}
		return $FieldInfo;
	}
	
	
	//取得上次插入id
	public function insertId(){
		if($this->type=='mysqli'){
			return $this->link->insert_id; 
		}else{
			return mysql_insert_id($this->link);
		}		
			
	}
	
	public function getLastSql(){
		return  $this->lastSql;	
	}
	
	//关闭数据库连接
	public function close(){
		if(!$this->link) return false;
		if($this->type=='mysqli'){
			@$this->link->close();
		}else{
			return @mysql_close($this->link);	
		}
	}
	//析构方法 关闭数据库连接
	public function __destruct(){
		$this->close();	
	}
	
	
	/** 内部私有使用方法 **/
	
	//设置Mysql连接查询字符集
	private function set_charset(){
		if(!$this->config['charset']) $this->config['charset']='utf8' ;
		$this->config['charset'] = str_replace('-', '',$this->config['charset']);
		if($this->type=='mysqli'){
			$this->link->set_charset($this->config['charset']);
		}else{
			$mysqlVersion = mysql_get_server_info($this->link);
			if($mysqlVersion > '4.1') {
				$serverset = $this->config['charset'] ? 'character_set_connection='.$this->config['charset'].', character_set_results='.$this->config['charset'].', character_set_client=binary' : '';
				$serverset .= $mysqlVersion > '5.0.1' ? ((empty($serverset) ? '' : ',').'sql_mode=\'\'') : '';
				$serverset && @mysql_query("SET $serverset", $this->link);
			}			
		}			
	}
	//解析配置数组大小写问题
	private function parseConfig($config){
		$configTolower = array();
		foreach($config as $key=>$val){
			$configTolower[strtolower($key)] = $val;
		}
		return $configTolower;
	}

	//返回mysql错误
	private function get_mysql_error(){
		if(!$this->link) return false;
		$mysql_error = array();
		if($this->type=='mysqli'){
			$mysql_error['errno'] = $this->link->errno;
			$mysql_error['error'] = $this->link->error;
		}else{
			$mysql_error['errno'] = mysql_errno($this->link);
			$mysql_error['error'] = mysql_error($this->link);			
		}
		if($mysql_error['errno']==0) return false;
		return $mysql_error;
		
	}	
	
	//抛出错误
	private function throwError($msg='',$sql='',$errno=NULL,$error=NULL){
		if(!$this->debug) trigger_error('Mysql error',E_USER_ERROR) ;
		echo '<fieldset style="font-size:12px; font-family:Verdana;color:#555">';
		echo '<legend style="color:#c00;"><strong>【Mysql 错误】</strong></legend>';
		if($msg){
			echo '<p style="margin:4px;">提示信息：'.$msg.'</p>';
		}
		if($sql){
			echo '<p style="margin:4px;">SQL语句：<font color="#3978D7">'.htmlspecialchars($sql).'</font></p>';
		}				
		if($errno && $error){
			$mysql_error['errno']= $errno;
			$mysql_error['error']= $error;
		}else{
			$mysql_error = @$this->get_mysql_error();
		}
		
		if($mysql_error){
			echo '<p style="margin:4px;">错误代码：'.$mysql_error['errno'].'</p>';
			echo '<p style="margin:4px;">错误信息：'.$mysql_error['error'].'</p>';
		}
		echo '</fieldset>';
		exit;
	}
		
}


?>
export php=/usr/bin/php

#!/bin/bash
step=1 #间隔的秒数
basepath=$(cd `dirname $0`; pwd)

for (( i = 0; i < 60; i=(i+step) ))
do
    sudo -u www php ${basepath}/artisan shijin:pingcang
    sudo -u www php ${basepath}/artisan shijin:ShipanSettle
    sleep $step
done

exit 0

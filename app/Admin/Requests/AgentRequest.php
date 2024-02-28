<?php

namespace App\Admin\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AgentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'phone'  => 'required|unique:users,phone',
            'name'  => 'required',
            'level'  => 'required',
            'password' => 'required|min:6'
        ];
    }
    public function messages()
    {
        return [
            'phone.required' => '手机号码不能为空',
            'name.required' => '姓名不能为空',
            'level.required' => '请选择代理级别',
            'phone.unique' => '手机号码已存在',
            'password.required' => '密码不能为空',
            'password.min' => '密码最少为6位',
        ];
    }
}

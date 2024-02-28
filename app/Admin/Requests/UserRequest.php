<?php

namespace App\Admin\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            'password' => 'required|min:6',
            'code' => 'required',
        ];
    }
    public function messages()
    {
        return [
            'phone.required' => '手机号码不能为空',
            'code.required' => '机构码不能为空',
            'phone.unique' => '手机号码已存在',
            'password.required' => '密码不能为空',
            'password.min' => '密码最少为6位',
        ];
    }
}

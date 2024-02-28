<?php

namespace App\Http\Requests\Api;


class AuthorizationRequest extends FormRequest
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
            'phone' => 'required|string',
            'password' => 'required|string|min:6',
        ];
    }
    public function messages()
    {
        return [
            'phone.required' => '手机号不能为空。',
            'password.required' => '密码不能为空。',
        ];
    }

}

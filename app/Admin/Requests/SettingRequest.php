<?php

namespace App\Admin\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SettingRequest extends FormRequest
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
            'desc'  => 'required',
            'value' => 'required',
            'code' => 'required',
        ];
    }
    public function messages()
    {
        return [
            'code.required' => 'code不能为空',
            'value.required' => '值不能为空',
            'desc.required' => '描述不能为空',
        ];
    }
}

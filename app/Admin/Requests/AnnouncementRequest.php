<?php

namespace App\Admin\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AnnouncementRequest extends FormRequest
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
            'title'  => 'required',
            'type' => 'required',
            'announcement' => 'required',
        ];
    }
    public function messages()
    {
        return [
            'title.required' => '标题不能为空',
            'type.required' => '请选择类型',
            'announcement.required' => '内容不能为空'
        ];
    }
}

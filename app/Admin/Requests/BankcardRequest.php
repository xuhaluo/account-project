<?php

namespace App\Admin\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BankcardRequest extends FormRequest
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
            'user_id'  => 'required',
//            'name'  => 'required',
//            'id_card'  => 'required',
            'card_name' => 'required',
            'card_address' => 'required',
            'card_number' => 'required',
        ];
    }
    public function messages()
    {
        return [
            'user_id.required' => '请选择策略人',
//            'name.required' => '请填写真实姓名',
//            'id_card.required' => '请填写身份证号',
            'card_name.required' => '请填写银行名称',
            'card_address.required' => '请填写开户支行',
            'card_number.required' => '请填写银行卡号'
        ];
    }
}

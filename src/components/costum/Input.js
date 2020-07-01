export default (_self, h) => {
  return [
    h("el-input", {
      props: {
        value: _self.obj.value || '',
        type: _self.obj.mold || 'text',
      },
      attrs: {
        maxlength: parseInt(_self.obj.maxlength) || 20,
        placeholder: _self.obj.placeholder || "这是一个输入框",
      },
      on: {
        'input'(value) {
          _self.obj = Object.assign(_self.obj, {
            value
          });
          _self.$emit('handleChangeVal', value)
        }
      }
    })
  ];
};


export let inputConf = {
  // 对应数据库内类型
  type: 'input',
  // 是否可配置
  config: true,
  // 控件左侧label内容
  label: '输入框',
  prop: 'input',
  placeholder: '',
  // 最大长度
  maxlength: 20,
  value: '',
  mold: 'text'
}
export let inputData = {
  // 对应数据库内类型
  type: 'input',
  // 是否可配置
  config: true,
  // 控件左侧label内容
  label: '输入框',
  prop: 'inpk',
  placeholder: '',
  // 最大长度
  maxlength: 20,
  value: '123',
  mold: 'textarea'
}
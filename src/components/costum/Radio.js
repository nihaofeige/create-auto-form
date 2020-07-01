export default (_self, h) => {
  return [
    h("el-radio-group", {
      props: {
        value: _self.obj.value || ""
      },
      on: {
        'input' (value) {
          _self.obj = Object.assign(_self.obj, {
            value
          });
          _self.$emit('handleChangeVal', value)
        }
      }
    }, _self.obj.items.map(v => {
      return h("el-radio", {
        props: {
          label: v.value
        },
      }, v.label)
    }))
  ];
};

export let radioConf = {
  // 对应数据库内类型
  type: 'radio',
  // 是否可配置
  config: true,
  // 控件左侧label内容
  label: '单选框',
  // 绑定的值
  value: '',
  // 选项内数据
  items: [{ "value": "1", "label": "单选框1" }, { "value": "2", "label": "单选框2" }],
  // 表单name
  name: 'radio'
}

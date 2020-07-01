export default (_self, h) => {
    return [
      h("el-select", {
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
        return h("el-option", {
          props: {
            label: v.label,
            key: v.value,
            value: v.value
          },
        })
      }))
    ];
  };
  
  export let selectConf = {
    // 对应数据库内类型
    type: 'select',
    // 是否可配置
    config: true,
    // 控件左侧label内容
    label: '选择框',
    // 绑定的值
    value: '1',
    // 选项内数据
    items: [{ "value": "1", "label": "黄金糕" }, { "value": "2", "label": "双皮奶" }],
    // 表单name
    prop: 'select'
  }
  
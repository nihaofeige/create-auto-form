export default (_self, h) => {
    return [
      h("el-switch", {
        props: {
          value: _self.obj.value || false
        },
        attrs: {
          activeColor: "#13CE66",
          inactiveColor: "#FF4949"
        },       
        on: {
          'input' (value) {
            _self.obj = Object.assign(_self.obj, {
              value
            });
            _self.$emit('handleChangeVal', value)
          }
        }
      })
    ];
  };
  
  export let aswitch = {
    // 对应数据库内类型
    type: 'switch',
    // 是否可配置
    config: true,
    // 控件左侧label内容
    label: '开关',
    // 绑定的值
    value: 0,
    // 选项内数据
    // 表单name
    prop: 'switch'
  }
  
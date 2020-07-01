export default (_self, h) => {
    return [
      h("el-date-picker", {
        props: {
          value: _self.obj.value || "",
          type: 'date',
          format: "yyyy-MM-dd",
          valueFormat: "yyyy-MM-dd"
        },
        attrs: {
          placeholder: _self.obj.placeholder || "选择日期",  
        },
        on: {
          input: function(event) {
            _self.obj.value = event //event.target.value;
            _self.$emit('handleChangeVal', event)
          }
        }
      })
    ];
  };

  export const dateConf = {
     // 对应数据库内类型
     type: 'date',
     // 是否可配置
     config: true,
     // 控件左侧label内容
     label: '日期选择',
     // 绑定的值
     value: '',
     // 表单name
     prop: 'date',
  }
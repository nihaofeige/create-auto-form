export default (_self, h) => {
    return [
      h("el-color-picker", {
        props: {
          value: _self.obj.value || '#409EFF',
          ..._self.obj.props
        },
        on: {
          change (value) {
            _self.obj = Object.assign(_self.obj, {
              value
            });
            _self.$emit('handleChangeVal', value)
          }
        }
      })
    ];
  };
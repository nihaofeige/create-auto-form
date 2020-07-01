export default (_self, h) => {
    return [
      h("el-slider", {
        props: {
          value: _self.obj.value || 0,
          ..._self.obj.props
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
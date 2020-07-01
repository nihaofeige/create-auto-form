export default (_self, h) => {
  console.log("......")
    return [
      h("el-rate", {
        style: { height: '40px', lineHeight: '40px'},
        props: {
          value: _self.obj.value || 0,
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
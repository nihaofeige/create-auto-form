export default (_self, h) => {
    return [
      h("el-upload", {
        class: ['avatar-uploader'],
        props: {
          value: _self.obj.value || "",
          action: 'aaa',
          showFileList: false,
          beforeUpload: (file) => {
            console.log(file)
          },
          onSuccess: (res, file)=>{
            console.log(res,file)
          }
        },
      },[
        h('img',{
          class: ['avatar'],
          style: { display: _self.obj.value !== '' ? "block" : "none"},
          attrs: {
            src: _self.obj.value
          },
        }),
        h('i',{
          class: ['el-icon-plus', 'avatar-uploader-icon'],
          style: { display: ( _self.obj.value == '')? "block" : "none" }
        })
      ])
    ];
  };

  export const uploadImg = {
    // 对应数据库内类型
    type: 'uploadImg',
    // 是否可配置
    config: true,
    // 控件左侧label内容
    label: '图片',
    // 绑定的值
    value: '',
    // 选项内数据
    // 表单name
    prop: 'uploadimg'
  }
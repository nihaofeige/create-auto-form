import input from './Input';
import radio from './Radio';
import checkBox from './CheckBox';
import aswitch from './Switch'
import select from './Select'
import date from './Date'
import uploadImg from './UploadImg'
import slider from './Slider'
import colorPicker from './ColorPicker'
import rate from './Rate'

const form_item = {
  input,
  radio,
  checkBox,
  switch: aswitch,
  select,
  date,
  uploadImg,
  slider,
  colorPicker,
  rate
};
export default {
  name: 'renders',
  render(h) {
    let _self = this
    if(form_item[this.ele]){
      return h('div',{
        class: ['posBorder', 'flex'],
        },[
            h('el-form-item',{
            style: {
              marginBottom: '0px'
            },
            props: {
              label: this.obj.label + "：",
              labelWidth: '100px',
              prop: _self.obj.prop,
              ..._self.obj.props
            },
            attrs: {
              // labelWidth: '100px'
            }
          }, form_item[_self.ele](_self, h) 
          ),
          h('span',{
          class: ['posClose'],
          },[
            h('i',{
            class:['el-icon-document-copy'],
            style: {
              fontSize: '20px',
              color: '#409Aff'       
            },
            on: {
              click:()=>{ _self.$emit('copyFormItem',_self.obj) } 
            }
          }, ''),
          h('i',{
            class:['el-icon-delete-solid'],
            style: {
              fontSize: '20px',
              color: '#F56C6C',
              marginLeft: '10px'       
            },
            on: {
              click:()=>{ _self.$emit('delFormItem',_self.obj) } 
            }
          }, '')
        ])
        ]
        );
    }
  },
  props: {
    ele: {
      type: String,
      default: ""
    },
    obj: {
      type: Object,
      default: {}
    }
  }
}

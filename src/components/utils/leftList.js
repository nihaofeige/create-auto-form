export const formData = [
    {
      type: 'input',
      icon: "el-icon-edit", 
      label: '单行文本',
      value: '',
      prop: 'text',
      props:{},
      mold: 'text',
    },
    {
      type: 'input',
      icon: "el-icon-edit-outline",
      label: '多行文本',
      value: '',
      prop: 'name',
      props:{},
      mold: 'textarea',
    },
    {
      type: 'date',
      icon: "el-icon-date",
      label: '日期选择器',
      value: '',
      prop: 'date',
      props:{},
   },
   {
    type: 'radio',
    icon: "el-icon-s-help", 
    label: '单选框',
    value: '',
    items: [{ "value": "1", "label": "单选框1" }, { "value": "2", "label": "单选框2" }],
    name: 'radio',
    prop: 'radio',
    props:{},
  },
  {
    type: 'checkBox',
    icon: "el-icon-folder-checked", 
    label: '多选框',
    value: [],
    items: [{ "value": "1", "label": "单选框1" }, { "value": "2", "label": "单选框2" }],
    prop: 'checkbox',
    props:{},
  },
  {
    type: 'select',
    icon: "el-icon-search", 
    label: '选择框',
    value: '',
    items: [{ "value": "1", "label": "黄金糕" }, { "value": "2", "label": "双皮奶" }],
    prop: 'select',
    props:{},
  },
  {
    type: 'switch',
    icon: "el-icon-turn-off",
    label: '开关',
    value: 0,
    prop: 'switch',
    props:{},
  },
  {
    type: 'uploadImg',
    icon: "el-icon-picture", 
    label: '图片',
    value: '',
    prop: 'uploadimg',
    props:{},
  },
  {
    type: 'slider',
    icon: "el-icon-s-operation", 
    label: '滑块',
    value: 0,
    prop: 'slider',
    props:{
      min: 0,
      max: 100,
      step: 1,
      showInput: true,
    }
  },
  {
    type: 'colorPicker',
    icon: "el-icon-orange", 
    label: '颜色',
    value: '#409EFF',
    prop: 'color',
    props:{
      disabled: false,
      size: 'small',
    }
  },
  {
    type: 'rate',
    icon: "el-icon-sunny", 
    label: '评分',
    value: 0,
    prop: 'rate',
    props:{
      showText: false,
      disabled: false,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  },
  ]
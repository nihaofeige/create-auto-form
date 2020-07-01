<template>
  <div class="right-form">
    <el-row>
      <el-col :span="24">
        <el-form ref="formValue" :model="formData" class="b-a" label-width="80px">
          <draggable :clone="cloneData" :list="changeFormData" :options="dragOptions">
            <transition-group
              class="form-list-group"
              type="transition"
              :name="'flip-list'"
              tag="div"
            >
              <renders
                v-for="(items, index) in changeFormData"
                :key="index + 1"
                :ele="items.type"
                :obj="items"
                @delFormItem="delFormItem"
                @copyFormItem="copyFormItem"
                @handleChangeVal="val => handleChangeVal(val,items, index)"
              ></renders>
            </transition-group>
          </draggable>
          <el-form-item label-width="0px" style="text-align: center">
            <el-button type="primary" @click="handleSubmit('formValue')">保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import renders from "../costum/render";

export default {
  name: "formCenter",
  components: {
    draggable,
    renders
  },
  data() {
    return {
      formList: this.formAboutList,
      formData: {},
    };
  },
  props: {
    formAboutList: {
      type: Array,
      default: []
    }
  },
  watch: {
    formList: {
      handler(val) {
        this.formList.forEach((element, index) => {
          //   this.handleChangeVal(element.value, element, index);
        });
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    console.log("formAboutList", this.formAboutList);
  },
  methods: {
    handleSubmit(name) {
      //保存
      this.$refs[name].validate(valid => {
        if (valid) {
          let data = this.repairData();
          console.log(this.formData, data)
        } else {
          console.log("验证不通过");
        }
      });
    },
    //提交
    repairData() {
      let self = this;
      let data = self.formList;
      let obj = {};
      data.map((item, index) => {
        obj[item.prop] = item;
      });
      return obj;
    },
    // 克隆,深拷贝对象
    cloneData(original) {
      // 深拷贝对象，防止默认空对象被更改
      return JSON.parse(JSON.stringify(original));
    },
    // 控件回填数据
    handleChangeVal(val, element, index) {
      this.$set(this.formData, element.prop, val);
    //   this.formList.splice(index, 1, element);
    },
    //复制
    copyFormItem(item) {
      let obj = {};
      obj = {
        ...item,
        prop: 'new' + item.prop
      };
      let index = this.formList.indexOf(item);
      this.formList.splice(index + 1, 0, obj);
    },
    delFormItem(item) {
      let index = this.formList.indexOf(item);
      this.formList.splice(index, 1);
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: {
          name: "menu",
          pull: "clone",
          revertClone: false
        },
        sort: true
      };
    },
    changeFormData() {
      return this.formAboutList.length == 0 ? this.formAboutList : this.formList;
    }
  }
};
</script>

<style>
.right-form {
  width: 50%;
}
.form-list-group {
  min-height: 200px;
  padding: 20px !important;
}

.b-a {
  border: 1px solid #ccc;
  padding: 10px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
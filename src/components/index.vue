<template>
  <div class="create-form">
    <left-list @addItem="addItem" :formAboutList="addForm"></left-list>
    <right-form :formAboutList="addForm"></right-form>
  </div>
</template>

<script>
export default {
  name: "",
  components: {
    LeftList: () => import("./CreateForm/leftLIst"),
    RightForm: () => import("./CreateForm/rightForm")
  },
  data() {
    return {
      addForm: [
        {
          type: "input",
          icon: "el-icon-edit",
          label: "单行文本",
          value: '',
          prop: "text",
          props: {}
        }
      ]
    };
  },
  created() {},

  methods: {
    //添加form表单
    addItem(item) {
      let about = this.addForm.findIndex(
        element => item.prop === element.prop
      );
      if (about == -1) {
        this.addForm.push(item);
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.create-form {
  display: flex;
  justify-content: flex-start;
}
</style>
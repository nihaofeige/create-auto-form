<template>
  <div class="form-left">
    <draggable
      class="list-group left-data"
      :list="jsonData"
      :clone="clone"
      :move="checkMove"
      :group="{ name: 'menu', pull: 'clone', put: false }"
      :sort="false"
    >
      <div v-for="(item,index) in jsonData" :key="index+1" class="border" @click="appitem(item)">
        <i v-bind:class="item.icon"></i>
        <div>{{item.label}}</div>
      </div>
    </draggable>
  </div>
</template>

<script>
import { formData } from "../utils/leftList";
import draggable from "vuedraggable";
export default {
  name: "",
  components: { draggable },
  data() {
    return {
      jsonData: formData
    };
  },
  props: {
    formAboutList: {
      type: Array,
      default: []
    }
  },
  methods: {
    appitem(item) {
      this.$emit("addItem", item);
    },
    clone: function(el) {
      return JSON.parse(JSON.stringify(el));
    },
    //移动拖拽判断是否有重复
    checkMove(el) {
      let about = this.formAboutList.findIndex(
        item => item.prop === el.draggedContext.element.prop
      );
      if (about !== -1) return false;
      return null;
    }
  }
};
</script>

<style>
.left-data {
  width: 320px;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
}
.border {
  display: flex;
  border: 1px solid paleturquoise;
  flex: auto;
  width: 150px;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: slategrey;
  color: #fff;
  cursor: pointer;
  flex: 0 0 auto;
}
</style>
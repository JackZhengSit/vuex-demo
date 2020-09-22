<template>
  <div class="courese">
    <h1>这是课程</h1>
    <h2>id:{{ id }}</h2>
    <h2>title:{{ title }}</h2>
    <button class="share-btn" @click="share">分享</button>
  </div>
</template>

<script>
import store from "../store";
export default {
  props: {
    id: String,
    title: String
  },
  methods: {
    share() {
      let c = confirm("课程分享");
      if (c) {
        store.dispatch("getFreeVip").then(res => {
          alert(res);
        });
      } else {
        console.log("share cancel");
      }
    }
  }
};
</script>

<style></style>

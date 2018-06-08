<template>
  <div class="home">
    <Logged v-if="logged"/>
    <Unlogged v-if="!logged"/>
  </div>
</template>

<script>
import Logged from "@/components/Logged.vue";
import Unlogged from "@/components/Unlogged.vue";

export default {
  name: "home",
  components: {
    Logged,
    Unlogged
  },
  computed: {
    logged: () => {
      return false;
    }
  },
  mounted: () => {
    //debugger;
    //this.$route.path
  }
};
</script>

<style lang="less">
/*
.home {
  border: 1px solid black;
}
*/
</style>

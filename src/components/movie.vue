
<template>
  <div>
    <h1>登录</h1>
    <h5>{{demo}}</h5>
    <h3>{{lk}}</h3>
    <p>love</p>

  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: [],
  components: {},
  data() {
    return {
        name:"lk"
    };
  },
  computed: {
    ...mapGetters({
        demo:"list"
    }),
  },
  methods: {
    ...mapActions({
        req:"reqListAction"
    }),
  },
  mounted() {
      this.req()
  },
};
</script>
<style scoped>
</style>
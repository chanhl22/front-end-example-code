new Vue({
  el: '#app',
  data: {
    count: 3,
    watchedCount: 9,
  },
  computed: {
    calculated: function () {
      return this.count * 3;
    }
  },
  watch: {
    count: function (newVal) {
      this.watchedCount = newVal * 3;
    },
  }
})
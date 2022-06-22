new Vue({
  el: "#app",
  data: {
    count: 3,
  },
  computed: {
    calculated: function () {
      if (this.count === 2) {
        alert('값이 2가 되었습니다.')
      }
    }
  },
  watch: {
    count: function (newVal) {
      if (newVal === 0) {
        alert('값이 0이 되었습니다.')
        this.count = 3
      }
    }
  }
})
new Vue({
  el: '#app',
  data: {
    count: 3,
    text: '변경 전 입니다.',
  },
  watch: {
    count: function (newVal, oldVal) {
      this.text = oldVal + '에서 ' + newVal + "로 변경되었습니다."
    },
  }
})
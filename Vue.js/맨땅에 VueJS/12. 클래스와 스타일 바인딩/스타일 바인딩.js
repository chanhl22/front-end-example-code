new Vue({
  el: '#app',
  data: {
    attachRed: false,
    color: 'green'
  },
  computed: {
    divClasses: function () {
      return {
        red: this.attachRed,
        green: !this.attachRed
      }
    },
    myHeight: function () {
      return this.attachRed ? '50px' : '200px'
    }
  }
})
Vue.component('hello', {
    template: '<h1>{{ title }}</h1>',
    data: function () {
        return {
            title: '안녕하세요!!'
        }
    },

    beforeCreate() {
        console.log(this.title);
    },

    created() {
        console.log(this.title);
    }
})

new Vue({
    el: "#app"
})
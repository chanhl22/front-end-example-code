Vue.component('hello', {
    template: '<h1>{{ title }}<h1></h1></h1>',
    data: function () {
        return {
            title: '안녕하세요!!'
        }
    },

    beforeCreate() {
        console.log(this.title);
        console.log(this.$el);
    },

    created() {
        console.log(this.title);
        console.log(this.$el);
    },

    mounted() {
        console.log(this.$el);
    }
})

new Vue({
    el: "#app",
    data: {
        message: "아오열받아"
    },
    mounted: function() {
        console.log(this.$el);
    }
})
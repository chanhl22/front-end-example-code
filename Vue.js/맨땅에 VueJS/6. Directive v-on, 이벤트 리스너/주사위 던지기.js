var app = new Vue({
    el: '#app',
    data: {
        number: 0
    },
    methods: {
        rollDice: function() {
            let n = Math.floor(Math.random() * 6) + 1;
            this.number = n;
        }
    }
})
new Vue({
    el: '#app',
    methods: {
        fetchData: function () {
            console.log("hello");
            axios.get('https://jsonplaceholder.typicode.com/users/')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})

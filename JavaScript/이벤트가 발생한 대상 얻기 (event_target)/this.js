new Vue({
    el: "#app",
    data: {
        dog: false
    },
    methods: {
        clickButton: function (event) {
            console.log(event.currentTarget.id);
            console.log(event.currentTarget.class);
            console.log("=================");
            console.log(event.currentTarget);
            console.log(event.target);
            console.log(typeof(event.target));
            console.log("=================");
            console.log($(event.target));
            console.log($(event.target).attr('data-input'));
            console.log(typeof($(event.target).attr('data-input')));
            console.log($(event.target).attr('class'));
            console.log("=================");
            console.log($(this));
            console.log(this);
            console.log(event);
            $(this).text('저만 클릭 하셨군요 ^ㅡ^');
            console.log($(this).attr('class'));
            console.log($(this).attr('id'));
        },

        addFile: function(event) {
            console.log($(event.target).attr('data-input'));
            console.log(Number($(event.target).attr('data-input')));
            console.log(typeof(Number($(event.target).attr('data-input'))));
        }
    }
})
var app1 = new Vue({
    el: '#app1',
    data: {
        msg: '안녕하세요 Vue!'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        msg: '안녕하세요 Vue!'
    }
})

app1.msg = 'hello';
app2.msg = 'hello';
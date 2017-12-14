new Vue({
    el: '#demo',
    data: {
        show: true
    }
})

var slide_fade_vm = new Vue({
    el: '#example-1',
    data: {
        show: true
    }
})

var bounce_vm = new Vue({
    el: "#example-2",
    data: {
        show: true
    },
    methods:{
        beforeEnter: function(el){
            console.log(el)
        }
    }
})

var custome_vm = new Vue({
    el: "#example-3",
    data: {
        show: true
    }
})
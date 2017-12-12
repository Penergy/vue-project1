var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})
var example2 = new Vue({
    el: '#example-2',
    data: {
        cache:{
            status: true
        },
        parentMessage: 'Parent',
        items: [
            { id:1, message: 'Foo' },
            { id:2, message: 'Bar' }
        ]
    }
})
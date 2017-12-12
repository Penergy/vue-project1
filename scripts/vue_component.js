/**
 * vm -> viewModel
 */
// var vm = new Vue({
//     el: "#app",
//     data: { a: 1 }
// });
// #watch 是一个实例方法

var vm1 = new Vue({
    el: '#example',
    data: {
        message: Date.now()
    },
    computed: {
        // 计算属性的 getter
        reversedMessage: function () {
            // `this` 指向 vm 实例
            // return this.message.split('').reverse().join('')
            return Date.now();
        }
    },
    methods: {
        reversedMessage1: function () {
            // return this.message.split('').reverse().join('')
            return Date.now();
        }
    }
})
// #watch 是一个实例方法
vm.$watch('a', function(oldValue, newValue){
    console.log('old value is ' + oldValue);
    console.log('new value is ' + newValue);
})

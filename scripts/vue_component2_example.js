// var data = { counter: 0 }
Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
    // 但是我们却给每个组件实例返回了同一个对象的引用
    data: function () {
        return { counter: 0 }
    }
})

new Vue({
    el: '#example2'
})

Vue.component('child', {
    // 声明 props
    props: ['myMessage'],
    // 就像 data 一样，prop 也可以在模板中使用
    // 同样也可以在 vm 实例中通过 this.message 来使用
    template: '<span>{{ myMessage }}</span>'
})
var prop_vm = new Vue({
    el: "#prop-div"
})

Vue.component('child2', {
    // 声明 props
    props: ['myMessage2'],
    // 就像 data 一样，prop 也可以在模板中使用
    // 同样也可以在 vm 实例中通过 this.message 来使用
    template: '<span>{{ myMessage2 }}</span>'
})
var prop2_vm = new Vue({
    el: "#dynamic-prop-div",
    data: {
        parentMsg: "testworld!"
    }
})

Vue.component('todo-item',{
    prop:['text','isComplete'],
    template: '<span>{{ isComplete }}</span>'
})

var prop3_vm = new Vue({
    el:"#object-prop-div",
    data: {
        todo:{
            text: 'Learn Vue',
            isComplete: false
        }
    }
})
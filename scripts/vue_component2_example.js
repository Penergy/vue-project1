// register a component
var child = {
    template: '<div> A local custom component!</div>',
    data: {

    }
}
Vue.component('my-component', {
    template: '<div> A custom component!</div>'
})

var example_vm = new Vue({
    el: "#example",

})
var example2_vm = new Vue({
    el: "#example2",
    components: {
        'my-component-2': child
    }
})

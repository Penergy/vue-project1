var vm = new Vue({
    el: '#model',
    data: {
        message: ""
    }
})

var lines_vm = new Vue({
    el: "#multi-line",
    data: {
        message: ""
    }
})

var checkbox_vm = new Vue({
    el: "#checkbox",
    data: {
        checked: false
    }
})

var multi_checkbox_vm = new Vue({
    el: "#multi-checkbox",
    data: {
        checkedNames: []
    }
})

var radio_vm = new Vue({
    el: "#radio",
    data: {
        picked: ''
    }
})

var list_vm = new Vue({
    el: "#list-div",
    data: {
        selected: ''
    }
})

var multiple_select_vm = new Vue({
    el: "#multiple-select",
    data: {
        selected: []
    }
})

var for_select_vm = new Vue({
    el: "#for-selected",
    data: {
        selected: '',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
    }
})

var value_bind_vm = new Vue({
    el: "#value-binding",
    data: {
        selected: '',
    },
    methods: {
        a: function () {
            return 'a';
        },
        b: function () {
            return 'b';
        }
    }
})

var lazy_vm = new Vue({
    el: "#lazy-div",
    data: {
        msg: "test"
    }
})

var number_vm = new Vue({
    el: "#number-div",
    data: {
        age: 0
    }
})

var trim_vm = new Vue({
    el: "#trim-div",
    data: {
        msg: ''
    }
})
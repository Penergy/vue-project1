var grid_number_width = 73;
var gird_number_height = 32;

new Vue({
    el: '#sudoku-demo',
    data: {
        cells: Array.apply(null, { length: grid_number_width * gird_number_height })
            .map(function (_, index) {
                return {
                    id: index,
                    number: index % grid_number_width + 1,
                    colorHex: randomColor()
                }
            })
    },
    methods: {
        shuffle: function () {
            this.cells = _.shuffle(this.cells)
        }
    }
})

function randomColor() {
    var colorStr = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase();
    return "#" + "000000".substring(0, 6 - colorStr) + colorStr;
} 
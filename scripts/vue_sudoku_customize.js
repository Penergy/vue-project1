var grid_number_width = 137;
var gird_number_height = 64;

var vm = new Vue({
    el: '#sudoku-demo',
    data: {
        cells: Array.apply(null, { length: grid_number_width * gird_number_height })
            .map(function (_, index) {
                return {
                    id: index,
                    number: index % grid_number_width + 1,
                    colorHex: "#fff"
                }
            }),
        test: []
    },
    created: function () {
        var vm = this
        axios.get('http://127.0.0.1:8080/images/2')
            .then(function (response) {
                // vm.answer = _.capitalize(response.data.answer)
                var hexValues = eval('(' + response.data + ')');
                for (hex in hexValues) {
                    vm.cells[hex].colorHex = hexValues[hex]
                }
            })
            .catch(function (error) {
                // vm.answer = 'Error! Could not reach the API. ' + error
                console.log(error)
            })
    },
    methods: {
        shuffle: function () {
            this.cells = _.shuffle(this.cells)
            for (cell in this.cells) {
                this.test.push(this.cells[cell].colorHex)
            }
            var test1 = JSON.stringify(this.test)
            console.log(test1);
            writeFile('test.txt',test1)

        }
    }
})

function randomColor() {
    var colorStr = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase();
    return "#" + "000000".substring(0, 6 - colorStr) + colorStr;
}

function writeFile(filename, filecontent) {
    var fso, f, s;
    fso = new ActiveXObject("Scripting.FileSystemObject");
    f = fso.OpenTextFile(filename, 8, true);
    f.WriteLine(filecontent);
    f.Close();
    alert('write ok');
} 
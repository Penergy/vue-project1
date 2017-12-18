var grid_number = 9;

new Vue({
    el: '#sudoku-demo',
    data: {
      cells: Array.apply(null, { length: grid_number*grid_number })
          .map(function (_, index) { 
            return {
              id: index,
              number: index % grid_number + 1
          }
        })
    },
    methods: {
        shuffle: function () {
          this.cells = _.shuffle(this.cells)
      }
    }
  })
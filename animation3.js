'use strict';

const store = new Vuex.Store({
  state: {
    cells: Array.apply(null, { length: 81} )
      .map(function (_, index) {
        return {
          id: index,
          number: index % 9 + 1
        }
      }),
  },
  mutations: {
    shuffleSudoku: state => state.cells = _.shuffle(state.cells),
  },
});


const component1 = {
  template: `
  <div>
    <button @click="shuffle">Shuffle!</button>
    <transition-group name="cell" tag="div" class="container">
      <div v-for="cell in cells" :key="cell.id" class="cell">
        {{ cell.number }}
      </div>
    </transition-group>
  </div>`,
  methods: Vuex.mapMutations({
    shuffle: 'shuffleSudoku'
  }),
  computed: Vuex.mapState({
    cells: state => state.cells
  })
};


const anim1 = new Vue({
  el: '#anim-pr1',
  store,
  components: {
    lazySudoku: component1,
  },
  template: `
  <div>
    <lazy-sudoku></lazy-sudoku>
  </div>`
});

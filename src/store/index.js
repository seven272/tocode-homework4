import { createStore } from 'vuex'

export const store = createStore({
  state: {
    notes: [
      {
        title: 'Learn Vue 3',
        tags: ['work']
      },
      {
        title: 'finish course',
        tags: ['work', 'home']
      },
      {
        title: 'learn vuex',
        tags: ['travel']
      },
      {
        title: 'hello',
        tags: []
      }
    ],
    tags: ['home', 'work', 'travel'],
    chooseTags: [],
    value: ''
  },
  mutations: {
    setNote (state) {
      const newNoteWithTag = {
        title: state.value,
        tags: state.chooseTags
      }
      state.notes.push(newNoteWithTag)

      state.value = ''
      state.chooseTags = []
      const btnTags = document.querySelectorAll('.tag-item')
      btnTags.forEach((elem) => {
        if (elem.classList.contains('isActive')) {
          elem.classList.remove('isActive')
        }
      })
    },
    destroyNote (state, index) {
      state.notes.splice(index, 1)
    },
    checkArrayTags (state, tag) {
      // проверка на наличие в массиве добавленных тегов, если тега нет в массиве - добавляем, если уже есть, то удаляем. Так как повторное нажатие на кнопку подразумевает удлаение раннее выбранного тега
      const findNote = state.chooseTags.find((elem) => {
        return elem === tag
      })
      if (!findNote) {
        state.chooseTags.push(tag)
      } else {
        const index = state.chooseTags.findIndex((elem) => {
          return elem === tag
        })
        state.chooseTags.splice(index, 1)
      }
      console.log('from handleTagClick  ' + state.chooseTags)
    },
    updateValue (state, newValue) {
      state.value = newValue
    },
    getNotes (state) {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        state.notes = JSON.parse(localNotes)
      }
    }
  },
  actions: {
    setNote ({ commit }) {
      setTimeout(() => {
        commit('setNote')
      }, 1000)
    },
    destroyNote ({ commit }, ind) {
      commit('destroyNote', ind)
    },
    checkArrayTags ({ commit }, tag) {
      commit('checkArrayTags', tag)
    },
    getNotes ({ commit }) {
      commit('getNotes')
    }
  },
  getters: {
  }
})

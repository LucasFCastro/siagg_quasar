import axios from 'axios'

export default {
  state: {
    list: [],
    onde: {}
  },
  mutations: {
    update (state, config) {
      state[config.state] = config.data
    }
  },
  actions: {
    oficiosList (context) {
      return axios.get('http://localhost:8000/api/oficio')
        .then((res) => {
          context.commit('update', {
            state: 'list',
            data: res.data
          })
        })
    }
  }
}

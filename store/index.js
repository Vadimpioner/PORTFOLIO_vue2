import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default () => new Vuex.Store({
    state: {
        nightMode: true
    },
    mutations: {
        CHANGE_NIGHTMODE_STATE: (state) => {
            state.nightMode = !state.nightMode
        }
    },

    actions: {
        TOGGLE_NIGHTMODE_STATE({commit}) {
            commit('CHANGE_NIGHTMODE_STATE')
        }
    },
    getters: {
        NIGHTMODE_STATE(state) {
            return state.nightMode;
        }
    }
})

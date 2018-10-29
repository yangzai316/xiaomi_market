// actions
export default {
    checkout ({ commit }, products) {
        commit('setCheckoutStatus', products)
    }
}
// mutations
export default {
    setLogined (state, status) {
        state.logined = status
    },
    showLoad (state, status) {
        state.showLoading = status
    },
    setPrevUrl (state, url) {
        state.prevUrl = url
    }
}
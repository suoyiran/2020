
const state = {
    /* nm : window.localStorage.getItem('nowNm') || '北京',
    id : window.localStorage.getItem('nowId') || 1 */
    all:{
        commodity:'22'
    }
};

const actions = {

};

const mutations = {
    setPrint(state, all) { //设置参数
        state.all = all;
    }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}
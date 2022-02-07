const alcools = {
    name: "alcools",
    namespaced: true,
    state: {
        alcools: [],
        TotalAlcool: [],
        alcool: {},
        pages: [],
        request: '',
        searchWord: '',
        type: '',
        price: Number,
    },

    mutations: {
        setAlcools(state, list) {
            state.alcools = list;
        },
        setAlcool(state, list) {
            state.alcool = list;
        },
        setTotalAlcool(state, list) {
            state.TotalAlcool = list;
        },
        setPages(state, list) {
            state.pages = list;
        },
        setRequest(state, list) {
            state.request = list;
        },
        setSearchWord(state, list) {
            state.searchWord = list
        },
        setType(state, list) {
            state.type = list
        },
        setPrice(state, list) {
            state.price = list
        },
    },
    actions: {
        //Get all alcohols

        async fetchAlcools(context, i) {
            const res = await fetch("/api/alcools/all/" + i + "/24")
            const data = await res.json();
            const alcools = data.alcools
            const pages = data.pages
            const catalog = [];
            for (let i = 0; i < parseInt(pages) + 1; i++) {
                catalog.push(i);
            }
            context.commit('setRequest', null);
            context.commit("setAlcools", alcools);
            context.commit('setPages', catalog);
            context.commit('setSearchWord', null)
            console.log(alcools)
    }
},
}

export default alcools;
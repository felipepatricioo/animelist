
const Api = {
    apiUrl: "https://api.jikan.moe/v3",

    getById: (query) => fetch(`https://api.jikan.moe/v3/search/anime?q=${query}`)

}

export default Api
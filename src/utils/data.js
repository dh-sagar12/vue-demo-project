const pagesKey = 'pages';


let pageJson = localStorage.getItem(pagesKey)

let pagesStore = JSON.parse(pageJson)


export default {
    getAllpages() {
        return pagesStore
    },

    addPage(page) {
        console.log(page);
        pagesStore.push(page)
        localStorage.setItem(pagesKey, JSON.stringify(pagesStore))
    },
    deletePage(index) {
        pagesStore.splice(index)
        console.log(pagesStore);
        localStorage.setItem(pagesKey, JSON.stringify(pagesStore))
    },
    getSinglepage(index) {
        return pagesStore[index]
    },
    editPage(index, page) {
        pagesStore[index] = page
        localStorage.setItem(pagesKey, JSON.stringify(pagesStore))

    }
}
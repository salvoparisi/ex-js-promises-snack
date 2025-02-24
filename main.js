/* SNACK 1 */
function getPostTitle(id) {
    const promise = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(obj => resolve(obj.title))
            .catch(reject)
    })
    return promise
}

console.log(getPostTitle(1));



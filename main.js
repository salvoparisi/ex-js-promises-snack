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

/* SNACK 2 */
function lanciaDado() {
    const promise = new Promise((resolve, reject) => {
        console.log("lanciando il dado...");
        const numeroCasuale = Math.floor(Math.random() * 5) + 1
        setTimeout(() => {
            if (numeroCasuale === 1) {
                reject("Il dado si è incastrato")
            } else {
                const numeroDado = Math.floor(Math.random() * 6) + 1
                resolve(numeroDado)
                console.log(numeroDado);
            }
        }, 3000)
    })
    return promise
}

lanciaDado()


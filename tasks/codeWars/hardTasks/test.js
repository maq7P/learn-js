function a(){
    const promise = new Promise((res,rej) => {
        setTimeout(() => res(console.log(2)), 1000)
    })
    promise.catch(console.log(1))
}
a()
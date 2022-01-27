/*
* function which called after fail try a few times
*/
function fetchWithRetry(constructor, tries){
    return constructor().catch((err) => {
        if(tries <= 0){
            return Promise.reject(err)
        }

        return fetchWithRetry(constructor, --tries)
    })
}

// use:
// fetchWithRetry(() => fetch(adress), 3).then(onResolve, onReject)
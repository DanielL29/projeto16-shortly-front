function handleObjectState(e, object, setObject) {
    return setObject({ ...object, [e.target.name]: e.target.value })
}

function logout(setUser, navigate) {
    localStorage.clear()
    setUser({})
    navigate('/')
}

function callToast(message, toast, type) {
    let messageToast = ""

    if(Array.isArray(message) && message.length > 0) {
        message.forEach(error => messageToast += `${error} \n`)
    } else {
        messageToast = message
    }

    return toast[type](messageToast, {
        theme: 'colored',
        autoClose: 2000
    })
}

function treatErrors(err, toast) {
    if(err.response.data && err.response.data.details) {
        const details = err.response.data.details.map(detail => detail.message)
        
        callToast(details, toast, 'error')
    } else if(err.response.data) {
        callToast(err.response.data, toast, 'error')
    } else {
        callToast(err.response.message, toast, 'error')
    }
}

export { handleObjectState, logout, treatErrors, callToast }
function handleObjectState(e, object, setObject) {
    return setObject({ ...object, [e.target.name]: e.target.value })
}

function logout(setUser, navigate) {
    localStorage.clear()
    setUser({})
    navigate('/')
}

export { handleObjectState, logout }
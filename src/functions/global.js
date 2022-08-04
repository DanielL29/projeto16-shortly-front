function handleObjectState(e, object, setObject) {
    return setObject({ ...object, [e.target.name]: e.target.value })
}

export { handleObjectState }
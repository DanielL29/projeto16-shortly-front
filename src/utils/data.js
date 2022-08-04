const BASE_URL = process.env.API_URL

const config = (token) => {
    return {
         headers: {
            "Authorization": `Bearer ${token}`
        }
    }
}

export { BASE_URL, config }
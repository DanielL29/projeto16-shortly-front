import axios from "axios"
import { BASE_URL, config } from "../utils/data"

async function getShortenUrls(token, setShortenUrls, setLoading) {
    try {
        setLoading(true)

        const { data: shortenUrls } = await axios.get(`${BASE_URL}/users/me`, config(token))

        setShortenUrls(shortenUrls.shortenedUrls)
        setLoading(false)
    } catch (err) {
        console.log(err.response) 

        if(err.response.data) {
            alert(err.response.data)
        } else {
            alert(err.response)
        }
    }
}

async function generateShortUrl(url, token, setLoading, setShortenUrls, setUrl) {
    if(url === "") return 

    try {
        setLoading(true)

        await axios.post(`${BASE_URL}/urls/shorten`, { url }, config(token))

        setLoading(false)
        setUrl('')
        await getShortenUrls(token, setShortenUrls, setLoading)
    } catch (err) {
        setLoading(false)
        console.log(err.response) 

        if(err.response.data && err.response.data.details) {
            const details = err.response.data.details.map(detail => detail.message)
            alert(details)
        } else if(err.response.data) {
            alert(err.response.data)
        } else {
            alert(err.response)
        }
    }
}

async function accessShortenUrl(index, shortUrl, shortenUrls, setShortenUrls) {
    try {
        const { data: url } = await axios.get(`${BASE_URL}/urls/open/${shortUrl}`)

        shortenUrls[index].visitCount++

        setShortenUrls([...shortenUrls])

        window.open(url.split('to ')[1], "_blank")
    } catch (err) {
        console.log(err.response) 

        if(err.response.data) {
            alert(err.response.data)
        } else {
            alert(err.response)
        }
    }
}

async function deleteShortenUrl(index, id, token, shortenUrls, setShortenUrls) {
    try {
        if(window.confirm('Quer mesmo deletar esse link?')) {
            await axios.delete(`${BASE_URL}/urls/${id}`, config(token))

            delete shortenUrls[index]

            setShortenUrls([...shortenUrls])
        }
    } catch (err) {
        console.log(err.response) 

        if(err.response.data) {
            alert(err.response.data)
        } else {
            alert(err.response)
        }
    }
}

export { getShortenUrls, generateShortUrl, accessShortenUrl, deleteShortenUrl }
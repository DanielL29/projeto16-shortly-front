import axios from "axios"
import { BASE_URL, config } from "../utils/data"
import { callToast, treatErrors } from "./global"

async function getShortenUrls(token, setShortenUrls, setLoading, toast) {
    try {
        setLoading(true)

        const { data: shortenUrls } = await axios.get(`${BASE_URL}/users/me`, config(token))

        setShortenUrls(shortenUrls.shortenedUrls)
        setLoading(false)
    } catch (err) {
        setLoading(false)

        treatErrors(err, toast)
    }
}

async function generateShortUrl(url, token, setLoading, setShortenUrls, setUrl, toast) {
    if(url === "") return 

    try {
        setLoading(true)

        await axios.post(`${BASE_URL}/urls/shorten`, { url }, config(token))

        setLoading(false)
        setUrl('')
        callToast('URL encurtada!', toast, 'success')

        await getShortenUrls(token, setShortenUrls, setLoading)
    } catch (err) {
        setLoading(false)

        treatErrors(err, toast)
    }
}

async function accessShortenUrl(index, shortUrl, shortenUrls, setShortenUrls, toast) {
    try {
        const { data: url } = await axios.get(`${BASE_URL}/urls/open/${shortUrl}`)

        shortenUrls[index].visitCount++

        setShortenUrls([...shortenUrls])

        window.open(url.split('to ')[1], "_blank")
    } catch (err) {
        treatErrors(err, toast)
    }
}

async function deleteShortenUrl(index, id, token, shortenUrls, setShortenUrls, toast) {
    try {
        if(window.confirm('Quer mesmo deletar esse link?')) {
            await axios.delete(`${BASE_URL}/urls/${id}`, config(token))

            delete shortenUrls[index]

            setShortenUrls([...shortenUrls])
            callToast('URL deletada!', toast, 'success')
        }
    } catch (err) {
        treatErrors(err, toast)
    }
}

export { getShortenUrls, generateShortUrl, accessShortenUrl, deleteShortenUrl }
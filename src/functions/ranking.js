import axios from "axios"
import { BASE_URL } from "../utils/data"

async function getRanking(setLoading, setRanking) {
    try {
        setLoading(true)

        const { data: ranking } = await axios.get(`${BASE_URL}/ranking`)

        setRanking(ranking)
        setLoading(false)
    } catch (err) {
        console.log(err.response) 
        setLoading(false)

        if(err.response.data) {
            alert(err.response.data)
        } else {
            alert(err.response)
        }
    }
}

export { getRanking }
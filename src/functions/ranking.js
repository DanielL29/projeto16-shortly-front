import axios from "axios"
import { BASE_URL } from "../utils/data"
import { treatErrors } from "./global"

async function getRanking(setLoading, setRanking, toast) {
    try {
        setLoading(true)

        const { data: ranking } = await axios.get(`${BASE_URL}/ranking`)

        setRanking(ranking)
        setLoading(false)
    } catch (err) {
        setLoading(false)

        treatErrors(err, toast)
    }
}

export { getRanking }
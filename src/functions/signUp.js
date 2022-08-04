import axios from "axios"
import { BASE_URL } from '../utils/data'

async function signUp(e, register, setLoading, navigate) {
    e.preventDefault()

    try {
        setLoading(true)

        await axios.post(`${BASE_URL}/signup`, register)

        setLoading(false)
        navigate('/sign-in')
    } catch (err) {
        setLoading(false)
        console.log(err.response) 

        if(err.response.data?.details) {
            const details = err.response.data.details?.map(detail => detail.message)
            alert(details)
        } else if(err.response.data) {
            alert(err.response.data)
        } else {
            alert(err.response)
        }
    }
} 

export { signUp }
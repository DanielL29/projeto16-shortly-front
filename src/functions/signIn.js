import axios from "axios"
import { BASE_URL } from '../utils/data'

async function signIn(e, login, setLoading, navigate, setUser) {
    e.preventDefault()

    try {
        setLoading(true)

        const { data: userData } = await axios.post(`${BASE_URL}/signin`, login)

        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))

        setLoading(false)
        navigate('/home')
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

export { signIn }
import axios from "axios"
import { BASE_URL } from '../utils/data'
import { treatErrors } from "./global"

async function signIn(e, login, setLoading, navigate, setUser, toast) {
    e.preventDefault()

    try {
        setLoading(true)

        const { data: userData } = await axios.post(`${BASE_URL}/signin`, login)

        setUser(userData)
        setLoading(false)
        localStorage.setItem('user', JSON.stringify(userData))

        navigate('/home')
    } catch (err) {
        setLoading(false)

        treatErrors(err, toast)
    }
} 

export { signIn }
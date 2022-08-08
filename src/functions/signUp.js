import axios from "axios"
import { BASE_URL } from '../utils/data'
import { callToast, treatErrors } from "./global"

async function signUp(e, register, setLoading, navigate, toast) {
    e.preventDefault()

    try {
        setLoading(true)

        await axios.post(`${BASE_URL}/signup`, register)

        callToast('Usuário cadastrado!', toast, 'success')
        setLoading(false)

        setTimeout(() => navigate('/sign-in'), 3000)
    } catch (err) {
        setLoading(false)

        treatErrors(err, toast)
    }
} 

export { signUp }
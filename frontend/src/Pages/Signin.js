import {Label, TextInput, Button, Alert, Spinner} from "flowbite-react"
import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import axios from 'axios'
import { signInStart, signInFailure, signInSuccess } from "../redux/user/userSlice"
import {useDispatch, useSelector} from 'react-redux'
export default function SignIn() {

    const [info, setInfo] = useState({"username":"", "password":""})
    const {loading, error:err} = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    function handleChange(e) {
        setInfo((prev) => ({...prev,[e.target.id]:e.target.value.trim()}))
        console.log(info)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        if (!info.username || !info.password) {
            return dispatch(signInFailure("Please fill all the required fields"))
        }
        try {
            dispatch(signInStart)
            const response = await axios.post('http://localhost:3001/api/auth/signin', info)
            console.log(response.data)
            if (response.data) {
                dispatch(signInSuccess(response.data));
                navigate('/')
            }
            else {
                return dispatch(signInFailure("Please enter valid credentials"))
            }
        }
        catch(error) {
            console.log("Sign in not successful")
            dispatch(signInFailure(error.message))
        }
    }

    return (
        <div className = "mt-20 max-w-full">
            <div className = "flex p-3 mx-auto flex-col lg:w-1/3">
                <form className="flex flex-col gap-4 max-w-full" onSubmit={handleSubmit}>
                    <div>
                        <Label value = "Your username"></Label> 
                        <TextInput type = "text" placeholder = "username" id = "username" onChange={handleChange}/>
                    </div>
                    <div>
                        <Label value = "Your password"></Label> 
                        <TextInput type = "password" placeholder = "password" id = "password" onChange={handleChange}/>
                    </div>
                    <Button gradientDuoTone = "purpleToPink" type = "submit" disabled = {loading}>
                        {
                            loading ? (
                            <>
                                <Spinner size = "sm"></Spinner>
                                <span className = "pl-3">Loading...</span>
                            </>
                            ) : 'Sign In'
                        }
                    </Button>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Don't have an account? </span>
                        <Link to = "/sign-up" className = "text-blue-500">Sign Up</Link>
                    </div>
                    {
                       err && (
                        <Alert className="mt-5" color = "failure">
                            {err}
                        </Alert>
                    )}
                </form>
            </div>
        </div>
    )
}
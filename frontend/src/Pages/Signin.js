import {Label, TextInput, Button, Alert, Spinner} from "flowbite-react"
import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import axios from 'axios'
export default function SignIn() {

    const [info, setInfo] = useState({"username":"", "password":""})
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    function handleChange(e) {
        setInfo((prev) => ({...prev,[e.target.id]:e.target.value.trim()}))
        console.log(info)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        if (!info.username || !info.password) {
            return setErr("Please fillout all fields")
        }
        try {
            setLoading(true);
            setErr(null);
            const response = await axios.post('http://localhost:3001/api/auth/signin', info)
            console.log(response.data)
            setLoading(false)
            if (response.data) {
                navigate('/')
            }
            else {
                return setErr("Please Enter Valid Credentials")
            }
        }
        catch(error) {
            console.log("Sign in not successful")
            console.log(error)
            setLoading(false);
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
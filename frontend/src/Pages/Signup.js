import {Label, TextInput, Button} from "flowbite-react"
import {Link} from "react-router-dom"
export default function Signup() {
    return (
        <div className = "mt-20">
            <div className = "flex p-3 mx-auto flex-col lg:items-center lg:w-10">
                <div>
                    <form className="flex flex-col gap-4">
                        <div>
                           <Label value = "Your username"></Label> 
                           <TextInput type = "text" placeholder = "username" id = "username" />
                        </div>
                        <div>
                           <Label value = "Your email"></Label> 
                           <TextInput type = "text" placeholder = "email" id = "email" />
                        </div>
                        <div>
                           <Label value = "Your password"></Label> 
                           <TextInput type = "text" placeholder = "password" id = "password" />
                        </div>
                        <Button gradientDuoTone = "purpleToPink" type = "submit">
                            Sign Up
                        </Button>
                        <div className="flex gap-2 text-sm mt-5">
                            <span>Have an account? </span>
                            <Link to = "/sign-in" className = "text-blue-500">Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
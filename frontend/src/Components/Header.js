import { Navbar, NavbarToggle } from "flowbite-react"
import { Link, useLocation } from "react-router-dom"
import { TextInput } from "flowbite-react"
import {AiOutlineSearch} from "react-icons/ai"
import { Button } from "flowbite-react"
import {FaMoon} from "react-icons/fa"
export default function Header() {
    const path = useLocation().pathname
    return (
        <Navbar className = "border-b-2">
            <Link to = "/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
                <span className = "px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">Kidus's</span>
                Blog
            </Link>
            <form>
                <TextInput type = "text" placeholder="search" rightIcon={AiOutlineSearch} className = "hidden lg:inline"></TextInput>
            </form>
            <Button className = "w-12 h-10 lg:hidden rounded-sm" color = "gray">
                <AiOutlineSearch />
            </Button>
            <div className="flex gap-2 md:order-2">
                <Button className = "w-12 h-10 hidden sm:inline" color="gray">
                    <FaMoon />
                </Button>
                <Link to = "/sign-in">
                    <Button gradientDuoTone= "purpleToBlue" outline>
                        Sign In
                    </Button>
                </Link>
                <NavbarToggle/>
            </div>
            <Navbar.Collapse>
                <Navbar.Link active = {path === "/"}>
                    <Link to = "/">
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active = {path === "/about"}>
                    <Link to = "/about">
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active = {path === "/projects"}>
                    <Link to = "/projects">
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
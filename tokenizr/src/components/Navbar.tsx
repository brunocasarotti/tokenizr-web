import { Button, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import Icon from "../utilities/Icon"
import Logo from "../utilities/Logo"

export default function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm rounded-2" >
            <Nav className="me-auto">
                <Nav.Link to='/tokenizr-main-page' as={NavLink}>
                    <Logo></Logo>
                </Nav.Link>
                <Nav.Link to='/tokenizr-main-page' as={NavLink} className="p-4 m-2">
                    Home
                </Nav.Link>
                <Nav.Link to='/about' as={NavLink} className="p-4 m-2">
                    About
                </Nav.Link>
            </Nav>
            <Link to='/'>
                <Button className="bg-gray-400">Deslogar</Button>
            </Link>
                <Button style={{ width: "3rem", height: "3rem" }} variant="outline-primary" className="rounded-circle bg-white m-3"><Icon></Icon></Button>
        </NavbarBs>
    )
}
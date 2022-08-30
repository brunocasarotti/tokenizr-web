import { Nav, Container, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"


export default function Navbar() {
    return (
        <Container>

            <NavbarBs sticky="top" className="bg-white shadow-lg m-3 rounded-4" >
                <Nav className="me-auto">
                    <Nav.Link to='/tokenizr-main-page' as={NavLink}>
                        Login
                    </Nav.Link>
                </Nav>

            </NavbarBs>
        </Container>
    )
}
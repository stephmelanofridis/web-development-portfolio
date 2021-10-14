import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { Button, Form, FormControl, Nav, Navbar, NavDropDown } from 'react-bootstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Header = (props) => {
    const pathName = props?.location?.pathname
    return (
        <Navbar expand='lg' sticky='top' className='header'>
            {/* Home link */}
            <Nav.Link as={NavLink} to='/'>
                <Navbar.Brand className='header-home'>
                    <HomeIcon />
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    {/* About link */}
                    <Nav.Link as={NavLink} to='/' className={pathName == '/' ? 'header-link-active' : 'header-link'}>About</Nav.Link>
                    {/* Portfolio link */}
                    <Nav.Link as={NavLink} to='/portfolio' className={pathName == '/portfolio' ? 'header-link-active' : 'header-link'}>Portfolio</Nav.Link>
                    {/* Resume link */}
                    <Nav.Link as={NavLink} to='/resume' className={pathName == '/resume' ? 'header-link-active' : 'header-link'}>Resume</Nav.Link>
                </Nav>
                <div className='header-right'>

                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
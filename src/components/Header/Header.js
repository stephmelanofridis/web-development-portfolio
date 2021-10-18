import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { Button, Form, FormControl, Nav, Navbar, NavDropDown } from 'react-bootstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';
import portfolioData from '../../utils/portfolioData';
import './Header.css';

const Header = (props) => {
    const pathName = props?.location?.pathname
    return (
        <Navbar expand='lg' sticky='top' className='header'>
            {/* Home link */}
            <Nav.Link as={NavLink} to='/' className='header-navlink'>
                <Navbar.Brand className='header-home'>
                    <HomeIcon />
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='header-left'>
                    {/* About link */}
                    <Nav.Link as={NavLink} to='/' className={pathName == '/' ? 'header-link-active' : 'header-link'}>About</Nav.Link>
                    {/* Portfolio link */}
                    <Nav.Link as={NavLink} to='/portfolio' className={pathName == '/portfolio' ? 'header-link-active' : 'header-link'}>Portfolio</Nav.Link>
                    {/* Resume link */}
                    <Nav.Link as={NavLink} to='/resume' className={pathName == '/resume' ? 'header-link-active' : 'header-link'}>Resume</Nav.Link>
                    {/* Contact link */}
                    <Nav.Link as={NavLink} to='/contact' className={pathName == '/contact' ? 'header-link-active' : 'header-link'}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
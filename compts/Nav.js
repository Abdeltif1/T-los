import { Navbar, Nav } from 'rsuite';
import {RiLoginCircleFill} from 'react-icons/ri';
import {BsHouseDoorFill} from 'react-icons/bs';
import Router from 'next/router';






//navigation component
const xNav = (props) => {
    return (
      //border color in purple
        <Navbar appearance="subtle">
        <Navbar.Brand href="#">τέλος</Navbar.Brand>
        <Nav>
          <Nav.Item icon = {<BsHouseDoorFill />} style = {{textDecoration: "bold"}}>Home</Nav.Item>
          <Nav.Item > 
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<RiLoginCircleFill />} onClick = {() => Router.push('/login') } >
             Log in
          </Nav.Item>
        </Nav>
      </Navbar>
    );
}

export default xNav;
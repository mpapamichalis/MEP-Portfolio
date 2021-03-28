import React from "react";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import cactus from "../../images/cactus.jpg";


const Header= () => {
    return ( 
     <Menu secondary pointing>
         <Image circular src={cactus} width={60}/>
        <Menu.Item as= {Link} to="/" style={{fontSize: 22 }}>Mary Papamichalis</Menu.Item>
        <Menu.Item position="right">
            <Button as={Link} to="/home/portfolio" color="teal" basic icon>
                <Icon name="list alternate outline"></Icon>
                Portfolio
            </Button>
        </Menu.Item>
        <Menu.Item>
            <Button as={Link} to="/home/contact" color="olive" basic icon>
                <Icon name="address card outline"></Icon>
                Contact
            </Button>
        </Menu.Item>
     </Menu>
    );
};
export default Header;
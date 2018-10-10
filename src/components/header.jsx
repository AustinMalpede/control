import React, { Component } from "react";
import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch
} from "@blueprintjs/core";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <NavbarGroup>
            <NavbarHeading>Control</NavbarHeading>
            <Button className={Classes.MINIMAL} icon="home" text="Home" />
            <Button className={Classes.MINIMAL} icon="document" text="Files" />
          </NavbarGroup>
        </Navbar>
      </div>
    );
  }
}

export default Header;

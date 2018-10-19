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
            <Button className={Classes.MINIMAL} icon="download" />
            <Button className={Classes.MINIMAL} icon="upload" />
          </NavbarGroup>
        </Navbar>
      </div>
    );
  }
}

export default Header;

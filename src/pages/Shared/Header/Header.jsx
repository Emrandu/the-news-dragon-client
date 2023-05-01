import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import { AuthContext } from "../../../providers/AuthProvider";


const Header = () => {
 

  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small className="text-secondary">
            Journalism Without Fear or Favour
          </small>
        </p>
        <p>{moment().format("dddd, MMMM D YYYY, h:mm:ss a")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

     

    </Container>
  );
};

export default Header;

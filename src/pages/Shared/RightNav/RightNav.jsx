import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login with</h4>
      <Button className="mb-4" variant="primary">
        {" "}
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="secondary">
        {" "}
        <FaGithub></FaGithub> Login with Github
      </Button>
      <div>
        <h4 className="mt-4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item disabled><FaFacebookF></FaFacebookF> facebook</ListGroup.Item>

          <ListGroup.Item><FaTwitter></FaTwitter> twitter</ListGroup.Item>
        
          <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg}alt="" />
        <h2>Create an Amazing Newspaper</h2>
      </div>
    </div>
  );
};

export default RightNav;

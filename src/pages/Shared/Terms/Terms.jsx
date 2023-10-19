import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugiat recusandae unde quis at saepe magnam, voluptate omnis voluptatibus! Quisquam.</p>
            <p>Go back to  <Link to ='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, officia ut? Inventore, consectetur fugiat voluptate deserunt quod sint tempore. Eveniet ullam sed, voluptatum quaerat dolore eius eaque amet architecto quidem.</p>
            <p>Go back to <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Terms;
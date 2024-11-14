import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='space-y-5 max-w-3xl mx-auto text-center'>
            <h2 className='text-4xl font-semibold'>Login</h2>
            
            <label className="input input-bordered flex items-center gap-2">
                <input type="email" name='email' className="grow" placeholder="Email Adress" />
            </label>
           
            <label className="input input-bordered flex items-center gap-2">
                <input type="password" name='password' className="grow" placeholder="Password" />
            </label>
            <div className='text-center'>
                <button className='btn btn-secondary btn-wide'>Submit</button>
            </div>

            <p>New Here ? <Link to={'/register'}>Register Here</Link></p>

        </div>
    );
};

export default Login;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const info = useContext(AuthContext)
    console.log(info)
    return (
        <div className='space-y-5 max-w-3xl mx-auto text-center'>
            <h2 className='text-4xl font-semibold'>Register</h2>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Your Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Email Adress" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <input type="url" className="grow" placeholder="Photo Url" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <input type="password" className="grow" placeholder="Password" />
            </label>
            <div className='text-center'>
                <button className='btn btn-secondary btn-wide'>Submit</button>
            </div>

            <p>Already have account ? <Link to={'/login'}>Login</Link></p>

        </div>
    );
};

export default Register;
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email,password)
        .then(result=>{
            console.log(result.user);
            e.target.reset();
            navigate('/')
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <form onSubmit={handleLogin} className='space-y-5 max-w-3xl mx-auto text-center'>
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

        </form>
    );
};

export default Login;
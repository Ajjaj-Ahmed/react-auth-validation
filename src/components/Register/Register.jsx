import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate()
    
    const handleRegister =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email,password)
        .then(result=>{
            console.log(result);
            e.target.reset();
            navigate('/')
        })
        .catch(error=>console.log(error.message))
    }
    
    return (
        <form onSubmit={handleRegister} className='space-y-5 max-w-3xl mx-auto text-center'>
            <h2 className='text-4xl font-semibold'>Register</h2>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Your Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <input type="email" name='email' className="grow" placeholder="Email Adress" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <input type="url" className="grow" placeholder="Photo Url" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <input type="password" name='password' className="grow" placeholder="Password" />
            </label>
            <div className='text-center'>
                <button className='btn btn-secondary btn-wide'>Submit</button>
            </div>

            <p>Already have account ? <Link to={'/login'}>Login</Link></p>

        </form>
    );
};

export default Register;
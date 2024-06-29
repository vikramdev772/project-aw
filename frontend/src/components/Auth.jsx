
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup, signin } from './Api';

const Auth = ({ type }) => {
    const [postInputs, setPostInputs] = useState({
        name: "",
        username: "",
        password: ""
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const data = type === 'signup' 
            ? { username: postInputs.username, email: postInputs.username, password: postInputs.password }
            : { email: postInputs.username, password: postInputs.password };

        try {
            const response = type === 'signup' ? await signup(data) : await signin(data);
            const token = response.data.token;
            localStorage.setItem('token', token); 
            navigate('/home'); 
        } catch (err) {
            setError(err.response?.data?.msg || 'An error occurred');
        }
    };

    return (
        <div className='h-screen flex flex-col justify-center '>
            <div className='flex justify-center'>
                <div className='bg-blue-500 bg-opacity-30 rounded-lg px-6 py-10'>
                    <div className='px-10'>
                        <div className='font-extrabold text-3xl'>
                            {type === 'signup' ? 'Create an account' : 'Sign in'}
                        </div>
                        <div className='flex justify-center text-slate-400'>
                            {type === 'signin' ? "Don't have an account? " : "Already have an account? "}
                            <Link className='pl-2 underline' to={type === 'signin' ? '/signup' : '/signin'}>
                                {type === 'signin' ? 'Sign up' : 'Sign in'}
                            </Link>
                        </div>
                    </div>
                    <form className='pt-8' onSubmit={handleSubmit}>
                        {type === 'signup' && (
                            <LabelledInput label="Name" placeholder="Name" onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    name: e.target.value
                                })
                            }} />
                        )}
                        <LabelledInput label='Email' placeholder='example@gmail.com' onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                username: e.target.value
                            })
                        }} />
                        <LabelledInput label="Password" placeholder="1234567890" type="password" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            })
                        }} />
                        {error && <div className='text-red-500 mt-4'>{error}</div>}
                        <button className=' text-md mt-8 w-full text-white  bg-gradient-to-r  from-blue-500 to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-lg px-5 py-2 hover:shadow-bg-blue-600 hover:shadow-lg '>
                            {type === 'signup' ? "Sign up" : "Sign in"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth;

function LabelledInput({ label, placeholder, onChange, type }) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
            <input onChange={onChange} type={type || "text"} className="bg-[#222630] border border-solid focus:border-[#596A95] border-[#2B3040] text-white text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-600 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
    )
}

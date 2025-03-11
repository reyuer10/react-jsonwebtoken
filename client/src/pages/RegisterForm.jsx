import React from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterForm() {
    const navigate = useNavigate();

    return (
        <div className='min-h-screen justify-center items-center flex flex-col font-mono'>
            <form
                className='shadow-md p-4 w-[400px] border border-gray-300 rounded-xl space-y-4'
            >
                <div>
                    <p className='text-2xl font-black'>Register</p>
                </div>
                <div className='flex flex-col space-y-4'>
                    <div className='flex flex-col'>
                        <span className='text-md font-bold text-gray-600'>Username</span>
                        <input
                            type="text"
                            className='w-full border rounded-md p-2'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-md font-bold text-gray-600'>Password</span>
                        <input
                            type="text"
                            className='w-full border rounded-md p-2'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-md font-bold text-gray-600'>Confirm password</span>
                        <input
                            type="text"
                            className='w-full border rounded-md p-2'
                        />
                    </div>
                </div>
                <div>
                    <button
                        type='submit'
                        className='font-bold bg-green-400 text-white px-4 py-2 rounded-lg w-full'
                    >
                        Register
                    </button>
                </div>

                <div className='space-x-2'>
                    <span>back to</span>
                    <button
                        onClick={() => navigate("/")}
                        className=' underline text-blue-500'>
                        login form
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
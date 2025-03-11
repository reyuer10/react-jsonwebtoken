import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    const navigate = useNavigate()
    return (
        <div className='min-h-screen justify-center items-center flex flex-col font-mono'>
            <form
                className='shadow-md p-4 w-[400px] border border-gray-300 rounded-xl space-y-4'
            >
                <div>
                    <p className='text-2xl font-black'>Login</p>
                </div>
                <div className='flex flex-col space-y-4'>
                    <div className='flex flex-col'>
                        <span className='text-md font-bold'>Username</span>
                        <input
                            type="text"
                            className='w-full border rounded-md p-2'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-md font-bold'>Password</span>
                        <input
                            type="text"
                            className='w-full border rounded-md p-2'
                        />
                    </div>
                </div>

                <div>
                    <button
                        type='submit'
                        className='font-bold bg-blue-400 text-white px-4 py-2 rounded-lg w-full'
                    >
                        Login
                    </button>
                </div>
                <div className='text-center'>
                    <button
                        onClick={() => navigate("/register")}
                    >
                        Click here to <span className='text-blue-500 underline'>register</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
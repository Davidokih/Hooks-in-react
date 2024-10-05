import { useState } from 'react';
import axios from 'axios';
import useForm from '../handler/useForm';
import InputField from '../components/InputField';

const Login = () => {

    const [isLoading,setIsLoading] = useState(false)
    const {handleChange,values,errors} = useForm()

    console.log(errors)
    console.log(values)

    const handleSubmit = async(event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const res = await axios.post('https://auth-user-1dcu.onrender.com/api/user/signin', values)
            
            console.log(res)
            setIsLoading(false)   
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
        
    }
    console.log(isLoading)
  return (
      <div className='flex items-center justify-center h-[calc(100vh-75px)]'>
          <div className="mx-auto p-6 border border-gray-200 rounded-md shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <InputField name='email' handleChange={handleChange} label="Email address" type="email" placeholder="Enter your email address"/>
                    <InputField error={errors?.password} name='password' handleChange={handleChange} label="Password" placeholder="Password"  type='password'/>

                    <button
                      type="submit"
                      disabled={isLoading}
                    className="w-full border-2 border-secondary text-secondary py-2 mt-4 rounded-md hover:bg-secondary hover:text-white transition duration-200"
                    >
                    {isLoading?'Loading...':'Sign Up'}
                    </button>
                </form>
            </div>
    </div>
  )
}

export default Login
import { useForm } from 'react-hook-form'
import axios from 'axios';
import React from 'react'
import { signup } from '../api/product';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<{ name: string, email: string, password: string, confirmPassword: string }>()
    const onSubmit = async (data: { name: string, email: string, password: string, confirmPassword: string }) => {
        try {
          const response = await axios.post(" http://localhost:8080/api/signup", data)
        console.log(response)  
        navigate("/signin")
        } catch (error) {
            console.log(error);
            
        }
        
    }
    return <>
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside
                    className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
                >
                    <img
                        alt="Pattern"
                        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>

                <main
                    aria-label="Main"
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <a className="block text-blue-600" href="/">
                            <span className="sr-only">Home</span>
                            <img src="/logo.png" alt="" />
                        </a>

                        <h1
                            className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                        >
                            Welcome to Squid 🦑
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                            dolorum aliquam, quibusdam aperiam voluptatum.
                        </p>

                        <form action="#" onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="LastName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>

                                <input {...register('name')} className='h-[30px] w-[300px] border-[1px] border-slate-500 rounded-lg' type="text" />
                                <p className=" text-red-600 text-[10px]">
                                    {errors.name && errors.name.message}
                                </p>
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>

                                <input {...register('email')} className='h-[30px] w-[300px] border-[1px] border-slate-500 rounded-lg' type="email" />
                                <p className=" text-red-600 text-[10px]">
                                    {errors.email && errors.email.message}
                                </p>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <input  {...register('password')} className='h-[30px] w-[300px] border-[1px] border-slate-500 rounded-lg' type="password" />
                                <p className=" text-red-600 text-[10px]">
                                    {errors.password && errors.password.message}
                                </p>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="PasswordConfirmation"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password Confirmation
                                </label>

                                <input {...register('confirmPassword')} className='h-[30px] w-[300px] border-[1px] border-slate-500 rounded-lg' type="password" />
                                <p className=" text-red-600 text-[10px]">
                                    {errors.confirmPassword && errors.confirmPassword.message}
                                </p>
                            </div>
                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    Create an account
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <a href="http://localhost:5173/signin" className="text-gray-700 underline">Log in</a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    </>

    // <div className='mx-auto  w-[600px] h-[600px] bg-slate-200 text-center'>
    //     <div className="flex">
    //         <div className="form w-[400px] bg-slate-200">
    //             <form className='py-[50px]' onSubmit={handleSubmit(onSubmit)} >
    //                 <div className="m-[20px]">
    //                     <div className=" text-start pl-[38px] mb-[10px]">
    //                         <label htmlFor="">Name:</label>
    //                     </div>
    //                     <input {...register('name')} className='h-[30px] w-[300px] border-[1px] border-slate-500 rounded-lg' type="text" />
    //                     <p className=" text-red-600 text-[10px]">
    //                         {errors.name && errors.name.message}
    //                     </p>
    //                 </div>
    //                 <div className="m-[20px]">
    //                     <div className=" text-start pl-[38px] mb-[10px]">
    //                         <label htmlFor="">Email:</label>
    //                     </div>

    //                     <input {...register('email')} className='h-[30px] w-[300px] border-[1px] border-slate-500 rounded-lg' type="email" />
    //                     <p className=" text-red-600 text-[10px]">
    //                         {errors.email && errors.email.message}
    //                     </p>
    //                 </div>
    //                 <div className="mb-[30px]">
    //                     <div className=" text-start pl-[60px] mb-[10px]">
    //                         <label htmlFor="">Password:</label>
    //                     </div>
    //                     <input  {...register('password')} className='h-[30px] w-[300px] border-[1px] border-slate-500 rounded-lg' type="password" />
    //                     <p className=" text-red-600 text-[10px]">
    //                         {errors.password && errors.password.message}
    //                     </p>
    //                 </div>
    //                 <div className="mb-[30px]">
    //                     <div className=" text-start pl-[60px] mb-[10px]">
    //                         <label htmlFor="">confirmPassword:</label>
    //                     </div>
    //                     <input {...register('confirmPassword')} className='h-[30px] w-[300px] border-[1px] border-slate-500 rounded-lg' type="password" />
    //                     <p className=" text-red-600 text-[10px]">
    //                         {errors.confirmPassword && errors.confirmPassword.message}
    //                     </p>
    //                 </div>


    //                 <button className='h-[35px] w-[300px] bg-red-500 border-[1px] rounded-lg'>submit</button>
    //             </form>
    //         </div>
    //         <div className="logo h-[400px]">
    //             <img className='w-[100px] h-[100px] mt-[180px]' src="../../public/logo.png" alt="" />
    //         </div>

    //     </div>
    //     <div className=" text-start pl-[130px]">
    //         <h3>hoặc đăng nhập bằng</h3>
    //         <div className=" flex gap-14">
    //             <img className='w-[50px] h-[50px] rounded-full' src="../../public/facebook.png" alt="" />
    //             <img className='w-[50px] h-[50px] rounded-full' src="../../public/gogle.png" alt="" />
    //         </div>

    //     </div>

    // </div >

}

export default Signup

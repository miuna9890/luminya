'use client'

import { registerUser, loginUser} from "@/services/authService";
import Image from "next/image";

export default function LoginPage() {
    return (

        <div className = "flex min-h-screen">  {/* Main container */}
            <div className="w-1/2 relative bg-white flex items-center justify-center">
                {/* Left side - can add images or branding here */}
                <Image src="/logo.png" alt="Logo
                " width={700} height={700}
                       className="object-cover"
                />
            </div>

            <div className="w-1/2 flex items-center justify-center">
                <form className="flex flex-col justify-center max-w-md w-full h-full">
                    {/* form contents */}
                    <p className="text-3xl font-serif mb-6 text-center">LUMINYA</p>
                    {/* Email */}
                    <div className="flex flex-col mb-4">
                    <input id="email" name="email" type="email" placeholder="email" required
                           className="w-full p-2 border border-[#D0B4CB] rounded focus:outline-none focus:ring-2
                           focus:ring-[#D0B4CB] placeholder-[#E8CEE2]"

                    />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col mb-6">
                        <input id="password" name="password" type="password" placeholder="password" required
                           className="w-full p-2 border border-[#D0B4CB] rounded focus:outline-none focus:ring-2
                           focus:ring-[#D0B4CB] placeholder-[#E8CEE2]"
                    />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col items-center">
                    <button formAction={loginUser}
                    className="mb-4 bg-[#541649] text-white p-2 rounded-3xl hover:bg-[#D0B4CB] transition w-1/2">
                        Log in</button>

                        <div className="mb-2 flex items-center">
                        <p className="text-sm">
                            Don&#39;t have an account?{' '}
                        </p>
                            <button formAction={registerUser}
                            className="text-blue-400 hover:underline ml-2"
                            >Sign up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
'use client'

import { registerUser, loginUser} from "@/services/authService";

export default function LoginPage() {
    return (

        <div className = "flex min-h-screen">  {/* Main container */}
            <div className="w-1/2 bg-fuchsia-200">
                {/* Left side - can add images or branding here */}
            </div>

            <div className="w-1/2 flex items-center justify-center">
                <form className="bg-amber-300 p-8 rounded-lg shadow-md max-w-md w-full">
                    {/* form contents */}
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="email" required />
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" required />
                    <button formAction={loginUser}>Log in</button>
                    <button formAction={registerUser}>Sign up</button>
                </form>
            </div>
        </div>
    );
}
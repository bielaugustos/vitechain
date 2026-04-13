import { useState } from "react"
import { LoginForm } from "@/components/login-form"
import SignUp from "./SignUp"

export default function SignUpPage() {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div className="relative min-h-screen">
      <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${showLogin ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
        <LoginForm onSignUpClick={() => setShowLogin(false)} />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${!showLogin ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
        <SignUp onLoginClick={() => setShowLogin(true)} />
      </div>
    </div>
  )
}

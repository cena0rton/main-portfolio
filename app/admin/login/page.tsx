import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8">
          <h1 className="text-2xl font-light text-zinc-800 mb-6 text-center">Admin Login</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

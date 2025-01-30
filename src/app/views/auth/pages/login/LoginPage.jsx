import InputField from "../../../../shared/components/InputField";
import SocialLogin from "../../../../shared/components/SocialLogin";

function LoginPage() {
  return (
    <div className="box-border m-0 p-0">
  <div className="flex items-center justify-center min-h-screen bg-indigo-800">
    <div className="m-auto max-w-md p-8 rounded-lg bg-white shadow-lg">
      <h2 className="text-center text-xl font-semibold mb-7">Log in with</h2>
      
    <SocialLogin />

      <p className="relative my-6 text-center bg-white">
        <span className="z-10 font-medium text-indigo-600 bg-white px-3">or</span>
        <span className="absolute left-0 top-1/2 h-px w-full bg-indigo-200"></span>
      </p>

      <form action="" className="login-form">
        
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock"/>
        
        <a href="#" className="block text-indigo-600">Forgot Password?</a>

        <button className="w-full h-14 text-white text-lg font-medium cursor-pointer mt-6 rounded-md bg-indigo-800 transition duration-300 ease-in-out hover:bg-indigo-700">Log In</button>
      </form>

      <p className="text-center text-base font-medium mt-7 mb-1">Don&apos;t have an account? <a href="#" className="text-indigo-800 font-medium">Sign up now</a></p>
    </div>
  </div>
</div>
  );
}

export default LoginPage;

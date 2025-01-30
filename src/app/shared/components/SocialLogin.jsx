const SocialLogin = () => {

    return (
        <div className="flex gap-5">
        <button className="flex gap-2 w-full text-base font-medium cursor-pointer py-3 rounded-md bg-indigo-100 border border-indigo-300 transition duration-300 ease-in-out hover:border-indigo-800 hover:bg-indigo-200">
          <img
            src="src/assets/icons/google.svg"
            alt="Google"
            className="w-6"
          />
          Google
        </button>
        <button className="flex gap-2 w-full text-base font-medium cursor-pointer py-3 rounded-md bg-indigo-100 border border-indigo-300 transition duration-300 ease-in-out hover:border-indigo-800 hover:bg-indigo-200">
          <img
            src="src/assets/icons/github.svg"
            alt="GitHub"
            className="w-6"
          />
          GitHub
        </button>
      </div>
    )
}

export default SocialLogin;
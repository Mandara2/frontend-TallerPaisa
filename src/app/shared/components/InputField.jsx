const InputField = ({type, placeholder, icon}) => {
  return (
    <div className="relative mb-6">
          <input
            type={type}
            placeholder={placeholder}
            className="w-full h-14 outline-none text-base border border-indigo-200 rounded-md pl-12 pr-3 transition duration-200 ease-in-out focus:border-indigo-800"
            required
          />
          <i className="material-icons-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400">{icon}</i>
          {/* {type === 'password' && (
            <i className="material-icons-outlined eye-icon">visibility_off</i>
          )} */}
        </div>
  );
}

export default InputField;
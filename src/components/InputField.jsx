
const InputField = ({type,placeholder,handleChange,name,label,error}) => {
    return (
        <>
            <label className="block text-sm font-medium text-[#969696] mb-2">{label}</label>
            <input
          type={type}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder={ placeholder }
            onChange={ handleChange }
            name={name}
            // disabled
            />
            { error && <div className="text-red-500">{error }</div>}
        </>
    )
}

export default InputField
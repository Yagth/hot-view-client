interface IProps {
  inputId: string;
  inputName: string;
  inputType: string;
  inputClass?: string;
}

function Input({ inputName, inputType, inputClass, inputId }: IProps) {
  return (
    //
    // />

    <div className="relative">
      <input
        type={inputType}
        id={inputId}
        className={`block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-orange-700 bg-white border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-700 peer ${inputClass}`}
        placeholder=" "
        name={inputName}
      />
      <label
        htmlFor={inputId}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-orange-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {inputName}
      </label>
    </div>
  );
}

export default Input;

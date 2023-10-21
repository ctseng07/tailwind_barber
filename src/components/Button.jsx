const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
        <button className={`flex justify-center items-center 
        gap-2 px-10 py-3.5 border text-transform: uppercase font-oswald text-sm leading-none hover:bg-black font-semibold
                ${backgroundColor 
                ? `${backgroundColor} ${textColor} ${borderColor}`
                : 'bg-gold text-white border-gold'
                } rounded ${fullWidth && 'w-full'}"}`}
                >
            {label}

            {iconURL && <img src={iconURL}
                alt="arrow right icon"
                className="ml-2 rounded-full w-5 h-5"
            />}
        </button>
    )
}

export default Button
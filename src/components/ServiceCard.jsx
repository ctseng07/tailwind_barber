const ServiceCard = ({ imgURL, label, subtext, price }) => {
    return (
        <div className=" flex justify-between sm:w-[550px] sm:min-w[550px] w-full rounded-[20px] shadow-3xl px-10 py-16 bg-gold max-sm:gap-5 max-sm:flex-col cursor-pointer hover:bg-black border-2 border-gold">
            <div className="flex justify-center items-center bg-gold rounded-full">
                <img src={imgURL} alt={label}
                    className="rounded-full"
                    width={90} height={90} />
            </div>

            <div className="flex justify-around flex-col max-sm:items-center">
                <h3 className="font-oswald text-xl 
        leading-normal text-black font-bold max-sm:items-center">{label}</h3>
                <p className="mt-3 font-rubik
        text-base leading-normal text-gray max-sm:items-center">{subtext}</p>
            </div>
            <p className="flex items-center text-black text-3xl leading-normal max-sm:justify-center">{price}</p>
        </div>
    )
}

export default ServiceCard
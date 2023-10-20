const ServiceCard = ({ imgURL, label, subtext, price }) => {
    return (
        <div className=" flex justify-between sm:w-[550px] sm:min-w[550px] w-full rounded-[20px] shadow-3xl px-10 py-16 bg-amber-100">
            <div className="flex justify-center 
      items-center bg-amber-100">
                <img src={imgURL} alt={label}
                    className="bg-amber-100 rounded-full"
                    width={90} height={90} />
            </div>

            <div className="flex justify-around flex-col">
                <h3 className="font-oswald text-xl 
        leading-normal text-black font-bold">{label}</h3>
                <p className="mt-3 font-rubik
        text-base leading-normal text-gray">{subtext}</p>
            </div>
            <p className="flex items-center text-gold text-3xl leading-normal">{price}</p>
        </div>
    )
}

export default ServiceCard
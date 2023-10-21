const ServiceTab = ({ imgURL, label }) => {
    return (
        <div className="flex flex-col justify-center 
      items-center w-44 cursor-pointer border border-black bg-gold first:bg-white py-12 gap-4 max-sm:p-6 max-sm:w-20">
            <div className="max-lg:hidden">
            <img src={imgURL} 
            width={55} 
            alt={label} />
            </div>
            <p className="font-oswald text-sm 
        leading-normal text-black max-sm:items-center font-semibold transform: uppercase text-center">{label}</p>
        </div>
    )
}

export default ServiceTab
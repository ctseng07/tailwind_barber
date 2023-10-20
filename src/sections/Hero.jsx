import Button from "../components/Button";
import { rightArrow } from '../assets/icons';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative padding-x flex-1 flex justify-start items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-hero bg-center">
      <div className="relative xl:w-2/5 flex 
            flex-col w-full max-xl:padding-x pt-28">
        <h1 className="mt-10 font-oswald text-8xl max-sm:text-[72px] max-sm:leading-[85px] font-semibold">
          <span className="text-transform: uppercase text-white relative z-10 pr-10">Barbers & hair cutting</span>
        </h1>
        <p className="font-rubix text-white text-lg leading-8 mt-6 mb-14">
          Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua suspendisse ultrices gravida</p>
        <Button label='Explore our services' iconURL={rightArrow} />
      </div>
    </section>
  )
}

export default Hero

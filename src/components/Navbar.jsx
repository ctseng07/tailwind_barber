import { navLinks } from "../constants";
import { hamburger, rightArrow } from '../assets/icons';
import Button from "../components/Button";

const Navbar = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="#"
                    className="font-oswald text-3xl text-gold text-transform: uppercase font-semibold">
                    barber
                    <span className="font-rubik text-white text-sm flex text-transform: capitalize font-light tracking-wider">
                        Hair Salon
                    </span>
                </a>
                <ul className="flex justify-center items-center max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-oswald leading-normal text-base text-white p-8 hover:text-gold text-transform: uppercase"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="max-lg:hidden">
                    <Button label="Appointment" iconURL={rightArrow} />
                </div>

                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt="Hamburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Navbar

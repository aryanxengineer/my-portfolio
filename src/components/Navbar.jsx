import { useGSAP } from "@gsap/react";
import Button from "./Button";
import gsap from "gsap";
import { useRef, useState } from "react";
import RedWord from "./RedWord";
import { MdAccountCircle, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const nameRef = useRef(null);
  const menuRef = useRef(null);
  const skillRef = useRef(null);
  const navTime = gsap.timeline();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useGSAP(() => {
    navTime.from(nameRef.current, {
      x: 20,
      opacity: 0,
      duration: 0.4,
      delay: 2.5,
    });
    navTime.from(skillRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.5,
    });
    navTime.from(menuRef.current, {
      opacity: 0,
      duration: 0.4,
    });
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full text-white z-50 shadow-md">
      <div className="flex justify-between items-center px-5 py-4 lg:px-10">
        {/* Logo Section */}
        <div className="text-xl font-semibold flex items-center gap-3">
          <div className="overflow-hidden">
            <span ref={nameRef} className="inline-block">
              ARYAN
            </span>
          </div>
          <span className="inline-block w-1 h-6 bg-white mx-2"></span>
          <div className="overflow-hidden">
            <span ref={skillRef} className="inline-block">
              <RedWord text="MERN" /> Developer
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div
          ref={menuRef}
          className="hidden lg:flex gap-8 items-center font-semibold"
        >
          <Button text="About" />
          <Button text="Projects" />
          <Button text="Skills" />
          <Button text="Services" />
          <Button text="Testimonials" />
          <span className="text-red-600 text-sm font-bold flex items-center gap-2 cursor-pointer">
            <Button text="Account" />
            <MdAccountCircle className="text-lg" />
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden pt-2">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <MdClose size={26} />
            ) : (
              <MdMenu size={26} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen
            ? "max-h-[500px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-5"
        }`}
      >
        <div className="flex flex-col items-start gap-4 px-5 pb-6 pt-2 bg-zinc-900 text-white text-sm transition-opacity duration-300 ease-in-out">
          <Button text="About" />
          <Button text="Projects" />
          <Button text="Skills" />
          <Button text="Services" />
          <Button text="Testimonials" />
          <span className="text-red-600 font-semibold flex items-center gap-2 cursor-pointer">
            <Button text="Account" />
            <MdAccountCircle />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

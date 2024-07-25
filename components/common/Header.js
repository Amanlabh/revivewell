import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              <img src='/path/to/your/logo.png' alt='Logo' className='logomin' /> {/* Use your logo image here */}
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink === "/" ? "activeLink" : "none"}>
              Home
            </Link>
            <Link href='/agency' className={activeLink === "/agency" ? "activeLink" : "none"}>
              About
            </Link>
          
            <Link href='/contact' className={activeLink === "/contact" ? "activeLink" : "none"}>
              Contact
            </Link>
            <Link href='vercel.app' className={activeLink === "vercel" ? "activeLink" : "none"}>
              Login/Sign Up
            </Link>
            <button className='button-primary'>book a consultation</button>
          </nav>
          <button onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;


import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return ( 
        <nav>
             <div className="logo">
                 <Image src='/logo.png' width={100} height={60}  />
             </div>
             <Link href='/'><a>Home</a></Link>
             <Link href='/about'><a>About</a></Link>
             <Link href='/ninja'><a>list ninja</a></Link>
        </nav>
       
     );
}
 
export default Navbar;
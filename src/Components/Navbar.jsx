import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className= "text-6xl"><em><b>S</b></em></h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/sathwick-gowda-59621925b/" target="new1"><FaLinkedin/></a>
            <a href="https://github.com/MissileStorms" target="new2"><FaGithub/></a>
            <a href="https://www.instagram.com/_.sathwick._.gowda_/" target="new4"><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default Navbar;

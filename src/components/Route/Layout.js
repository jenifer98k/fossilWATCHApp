import { Outlet, Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <Navbar/>

      <Outlet />
    </>
  )
};

export default Layout;
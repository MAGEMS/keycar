import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  homeItems,
  blogItems,
  pageItems,
  categorieMobileItems,
} from "../../data/mainMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const { pathname } = useLocation();

  const [isActiveParent, setIsActiveParent] = useState(false);
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] = useState(false);
  const [isActiveNestedParent, setisActiveNestedParent] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link to="/">
          <img src="/img/general/keycarrental-logov1.svg" alt="brand" style={{ height: "50px", width: "auto" }} />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          
          <MenuItem
            onClick={() => navigate("/")}
            className={pathname === "/" ? "menu-active-link" : ""}
          >
            Home
          </MenuItem>
          {/* End  Desitinations Menu */}

          <MenuItem
            onClick={() => navigate("/destinations")}
            className={pathname === "/destinations" ? "menu-active-link" : ""}
          >
            Desitinations
          </MenuItem>
          {/* End  Desitinations Menu */}

          <MenuItem
            onClick={() => navigate("/about")}
            className={pathname === "/about" ? "menu-active-link" : ""}
          >
            About Us
          </MenuItem>
          {/* End  About us Menu */}

          <MenuItem
            onClick={() => navigate("/blog-list-v1")}
            className={pathname === "/blog-list-v1" ? "menu-active-link" : ""}
          >
            Blog
          </MenuItem>
          {/* End  blog Menu */}

          <MenuItem
            onClick={() => navigate("/help-center")}
            className={pathname === "/help-center" ? "menu-active-link" : ""}
          >
            Help Center
          </MenuItem>
          {/* End  Help Center Menu */}

          <MenuItem
            onClick={() => navigate("/contact")}
            className={pathname === "/contact" ? "menu-active-link" : ""}
          >
            Contact
          </MenuItem>
          {/* End  Contact Menu */}
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
        <div className="mt-20">
          <Link
            className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
            to="/login"
          >
            Become An Expert
          </Link>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;

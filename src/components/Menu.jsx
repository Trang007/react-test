import React from "react";
import Logo from "../assets/logo.webp";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Menu = () => {
  return (
    <div className="Menu">
      <div className="Logo">
        <img src={Logo} />
      </div>
      <div className="menu">
        <a href="">
          Sản phẩm <ExpandMoreIcon />
        </a>
        <a href="">
          Giải pháp <ExpandMoreIcon />
        </a>
        <a href="">
          Thư viện <ExpandMoreIcon />
        </a>
        <a href="">
          Hỗ trợ <ExpandMoreIcon />
        </a>
        <a href="">Phân phối và bảo hành</a>
      </div>
      <div className="collapse">
        <button>
          <SearchIcon />
        </button>
        <a href="" className="a">
          Liên hệ
          <EmailIcon />{" "}
        </a>
      </div>
    </div>
  );
};

export default Menu;

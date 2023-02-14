import React from "react";
import Logo from "../assets/logo.webp";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Menu = () => {
    const menu =[
        {
            link:"/",
            title:"Sản phẩm",
            notIcon: true,
        },
        {
            link:"/",
            title:"Giải pháp",
            notIcon: true,
        },
        {
            link:"/",
            title:"Thư viện",
            notIcon: true,
        },
        {
            link:"/",
            title:"Hỗ trợ",
            notIcon: true,
        },

        {
            link:"/",
            title:"Phân phối và bảo hành",
            notIcon: false,
        },
    ];
  return (
    <div className="Menu">
      <div className="Logo">
        <img src={Logo} />
      </div>
      <div className="menu">
        {menu.map((item,index) => (
           <a href={item.link}>
           {item.title}
           {item.notIcon &&  <ExpandMoreIcon />}
         </a> 
        ))}
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

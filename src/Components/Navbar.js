// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
// // import Logo from "../Assets/Logo.svg";
// import Logo from "../Assets/logo.png";
// import { BsCart2 } from "react-icons/bs";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//     },
//     {
//       text: "About",
//       icon: <InfoIcon />,
//     },
//     {
//       text: "Testimonials",
//       icon: <CommentRoundedIcon />,
//     },
//     {
//       text: "Contact",
//       icon: <PhoneRoundedIcon />,
//     },
//     {
//       text: "Cart",
//       icon: <ShoppingCartRoundedIcon />,
//     },
//   ];
//   return (
//     <nav>
//       <div className="nav-logo-container">
//         <img src={Logo} alt="" />
//       </div>
//       <div className="navbar-links-container">
//         <a href="/home">Home</a>
//         <a href="">About</a>
//         <a href="">How It Works</a>
//         {/* <a href="">Testimonials</a> */}
//         <a href="">Contact</a>
//         {/* <a href="">
//           <BsCart2 className="navbar-cart-icon" />
//         </a> */}
//         {/* <button className="primary-button">Join the Waitlist</button> */}
//       </div>
//       <div className="navbar-menu-container">
//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../Assets/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  
  // Menu options
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      to: "home-section"
    },
    {
      text: "About",
      icon: <InfoIcon />,
      to: "about-section"
    },
    // {
    //   text: "Testimonials",
    //   icon: <CommentRoundedIcon />,
    //   to: "testimonials-section"
    // },
    {
      text: "How It Works",
      icon: <CommentRoundedIcon />,
      to: "work-section"
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      to: "contact-section"
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          item.to.startsWith("/") ? (
            <RouterLink key={item.text} to={item.to}>
              <span>{item.text}</span>
            </RouterLink>
          ) : (
            <ScrollLink
              key={item.text}
              to={item.to}
              smooth={true}
              duration={500}
            >
              {console.log(item.text)}
              {console.log(item.to)}
              {item.text}
            </ScrollLink>
          )
        ))}
        {/* Uncomment if you want to add cart and button */}
        {/* <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a> */}
        {/* <button className="primary-button">Join the Waitlist</button> */}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={item.to.startsWith("/") ? RouterLink : ScrollLink}
                  to={item.to}
                  smooth={item.to.startsWith("#")}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;

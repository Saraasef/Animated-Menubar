import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { useState } from 'react';
//import sidebar Hamburger
import { useSpring, animated } from "react-spring";
//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

function Sidebar (){

  // Menu function
  // let List=document.querySelector('List');
  // for (let i=0; i<List.length; i++){
  //   List [i].onClick= function(){
  //     let j=0;
  //     while (j<List.length){
  //       List[j++].className="List";
  //     }
  //     List[i].className='listactive'
  //   }
  // }
  //create initial menuCollapse state using useState hook
  const [Collapse, setCollapse] = useState(true);

// Hamburger Menu open/close
    const [isOpen, setIsopen] = useState(false);
  
    const first = useSpring({
      transform: isOpen
        ? "translate(5px, 32px) rotate(-45deg)"
        : "translate(2px, 7px) rotate(0deg)"
    });
    const second = useSpring({
      transform: isOpen
        ? "translate(10px, 4px) rotate(45deg)"
        : "translate(2px, 19px) rotate(0deg)"
    });
    const third = useSpring({
      transform: isOpen
        ? "translate(5px, 32px) rotate(-45deg)"
        : "translate(2px, 31px) rotate(0deg)"
    });

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={Collapse}>
          <SidebarHeader>
            <div className="logotext">
              <button onClick={() => setCollapse(!Collapse)} id="menu"  aria-label="Main Menu"><svg
        onClick={() => setIsopen(!isOpen)}
        width="40"
        height="32"
        viewBox="0 0 44 44"
        fill="#fafafa"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.rect width="40" height="4" rx="2" style={first} />
        <animated.rect width="40" height="4" rx="2" style={second} />
        <animated.rect width="40" height="4" rx="2" style={third} />
      </svg></button>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu className="listactive" iconShape="square">
              <MenuItem className="List" active={true} id="slidebar" icon={<FiHome />}>Home</MenuItem>
              <MenuItem className="List" id="slidebar" icon={<FaList />}>Category</MenuItem>
              <MenuItem className="List" id="slidebar" icon={<FaRegHeart />}>Favourite</MenuItem>
              <MenuItem className="List" id="slidebar" icon={<RiPencilLine />}>Author</MenuItem>
              <MenuItem className="List" id="slidebar" icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;

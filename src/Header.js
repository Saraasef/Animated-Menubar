import React from 'react';
import './Header.css';
import Sticky from "wil-react-sticky";
 
class Header extends React.Component {
    render() {
      return (
        <Sticky>
      <div className="Header_root">
          <ul className="Header_links">
          <li className="Header_link">Home</li>
          <li className="Header_link">Category</li>
          <li className="Header_link">Favorit</li>
          <li className="Header_link">Author</li>
          <li className="Header_link">Sitting</li>
        </ul>
      </div>
      </Sticky>
    );
  }
}
export default Header;
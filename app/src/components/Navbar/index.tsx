import { useState } from "react";
import NavbarIcon from "../NavbarIcon";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((o) => !o);
  }

  return (
    <>
      <div className="navbar">
        <NavbarIcon isOpen={isOpen} onClick={handleOpen} />
        <img className="logo" src="https://picsum.photos/200/300" alt="logo" />
      </div>

      <div className={`sidemenu ${isOpen ? "sidemenu--open" : ""}`}>
        <p>TEST 1</p>
        <p>TEST 2</p>
        <p>TEST 3</p>
        <p>TEST 4</p>
      </div>
    </>
  );
}

export default Navbar;

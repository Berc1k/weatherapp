import { useState } from "react";
import NavbarIcon from "../NavbarIcon";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((o) => !o);
  }

  return (
    <>
      <div className="navbar">
        <NavbarIcon isOpen={isOpen} onClick={toggleOpen} />
        <img className="navbar__logo" src="/logo.png" alt="logo" />
      </div>

      <div
        className={`navbar__sidemenu ${isOpen ? "navbar__sidemenu--open" : ""}`}
      >
        <p>TEST 1</p>
        <p>TEST 2</p>
        <p>TEST 3</p>
        <p>TEST 4</p>
      </div>
    </>
  );
}

export default Navbar;

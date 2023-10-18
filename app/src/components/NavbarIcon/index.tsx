import { useState } from "react";

export default function NavbarIcon() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div
        className={`icon nav-icon-8 ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
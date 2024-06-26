// components/MenuToggle.js
"use client";

import React, { useState, useEffect } from "react";

const MenuToggle = ({ menuId, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const menu = document.getElementById(menuId);
    if (menu) {
      menu.setAttribute("aria-expanded", isVisible ? "true" : "false");
      menu.classList.toggle("menuVisible", isVisible);
    }
  }, [isVisible, menuId]);

  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <button
      aria-controls={menuId}
      aria-expanded={isVisible}
      onClick={toggleMenu}
    >
      {children}
    </button>
  );
};

export default MenuToggle;

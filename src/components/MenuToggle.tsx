// components/MenuToggle.js
"use client";

import React, { useState, useEffect } from "react";

const MenuToggle = ({ menuId }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const menu = document.getElementById(menuId);
    if (menu) {
      menu.setAttribute("aria-expanded", isVisible);
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
      Menu
    </button>
  );
};

export default MenuToggle;

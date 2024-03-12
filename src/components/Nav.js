import React from "react";

export const navItems = [
    {
        title: "Home",
        href: ""
    },
    {
        title: "About",
        href: ""
    },
    {
        title: "Menu",
        href: ""
    },
    {
        title: "Reservations",
        href: ""
    },
    {
        title: "Order Online",
        href: ""
    },
    {
        title: "Login",
        href: ""
    },
]

export function ListNav({ items }) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    );
  }

const Nav = () => {
    return (
        <div className="nav-wrapper">
            <ListNav  items={navItems} />
        </div>
    )
}

export default Nav;
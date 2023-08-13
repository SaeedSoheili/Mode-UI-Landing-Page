import React from "react";
import "./FooterNavBar.css";

const FooterNavbar = () => {
  const items = [
    {
      name: "Company",
      menus: ["About us", "Pricing", "Contact us", "Features"],
    },
    {
      name: "Product",
      menus: ["Figma design system", "los kit", "Android kit", "Wireframe"],
    },
    {
      name: "Resources",
      menus: ["Templates", "Landing pages", "Documentation", "Comp library"],
    },
    {
      name: "Legal",
      menus: [
        "Privacy policy",
        "Terms & Conditions",
        "Disclaimer",
        "Affiliate program",
      ],
    },
    {
      name: "Support",
      menus: ["Help center", "Raise ticket", "Report", "Refund"],
    },
  ];

  return (
    <footer className="navbar-footer2">
      {items.map((item) => (
        <div className="category-footer2">
          <h3 className="h3-footer2">{item.name}</h3>
          <ul className="ul-footer2">
            {item.menus.map((menu) => (
              <a className="link-footer2" href="#">
                <li className="li-footer2">{menu}</li>
              </a>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default FooterNavbar;

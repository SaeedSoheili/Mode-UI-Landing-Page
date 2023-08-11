import React from "react";
import "./NavBarMenus.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function NavBarMenus(props) {
  return (
    <>
      {props.icon ? (
        <>
          <span>{props.title}</span>
          <ExpandMoreIcon className="iconElement" />
        </>
      ) : (
        <span>{props.title}</span>
      )}
    </>
  );
}

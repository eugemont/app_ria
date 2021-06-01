import React, { useState } from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { default as Item } from "./menuitem";

const Menu = ({ open, items, setSelection, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  let itemList = items.map((item, index) => {
    return (
      <Item
        key={"item" + index}
        id={index}
        name={item.name}
        itemImage={item.image}
        page={item.page}
        setSelection={setSelection}
      ></Item>
    );
  });
  console.log("Se recarga");

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {itemList}
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;

import React from "react";
import {
  useDevice,
  useExcalidrawAppState,
  useExcalidrawSetAppState,
} from "../App";
import DropdownMenu from "../dropdownMenu/DropdownMenu";

import * as DefaultItems from "./DefaultItems";

import { HamburgerMenuIcon } from "../icons";

const MainMenu = ({ children }: { children?: React.ReactNode }) => {
  const device = useDevice();
  const appState = useExcalidrawAppState();
  const setAppState = useExcalidrawSetAppState();
  const onClickOutside = device.isMobile
    ? undefined
    : () => setAppState({ openMenu: null });
  return (
    <DropdownMenu open={appState.openMenu === "canvas"}>
      <DropdownMenu.Trigger
        onToggle={() => {
          setAppState({
            openMenu: appState.openMenu === "canvas" ? null : "canvas",
          });
        }}
      >
        {HamburgerMenuIcon}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content onClickOutside={onClickOutside}>
        {children}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};

MainMenu.Trigger = DropdownMenu.Trigger;
MainMenu.Item = DropdownMenu.Item;
MainMenu.ItemLink = DropdownMenu.ItemLink;
MainMenu.ItemCustom = DropdownMenu.ItemCustom;
MainMenu.Group = DropdownMenu.Group;
MainMenu.Separator = DropdownMenu.Separator;
MainMenu.DefaultItems = DefaultItems;

export default MainMenu;

MainMenu.displayName = "Menu";

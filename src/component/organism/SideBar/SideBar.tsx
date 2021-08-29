import React from "react";
import { SingleLevelMenu, MultiLevelMenu } from "../../molecule";
import { CardMenu, Footer, Header, LogoImage } from "./style";
import Profile from "./Profile";
import menus, { MenuBar } from "../../../route/menu";
import { Logo } from "../../../public/icon";
import { useAuthSelector } from "../../../state/selector";

function SideBar() {
  const { user } = useAuthSelector();

  return (
    <CardMenu>
      <Header>
        <LogoImage src={Logo}></LogoImage>
      </Header>
      <div>
        {menus.map((menu: MenuBar) => {
          if (menu.sub.length === 0) {
            return (
              <SingleLevelMenu
                permission={menu.permission}
                title={menu.title}
                path={menu.path}
                icon={menu.icon}
                checkPermission={user.permission}
              ></SingleLevelMenu>
            );
          } else {
            return (
              <MultiLevelMenu
                permission={menu.permission}
                title={menu.title}
                icon={menu.icon}
                items={menu.sub}
                checkPermission={user.permission}
              ></MultiLevelMenu>
            );
          }
        })}
      </div>
      <Footer>
        <Profile
          firstName={user.firstName}
          lastName={user.lastName}
          img={user.img}
        ></Profile>
      </Footer>
    </CardMenu>
  );
}

export default SideBar;

import { menuOptionsType } from "../../interfaces/menuOptions";
import { Header } from "../header/Header";
import { MenuGen } from "../menu/MenuGen";
import "./layout.css";

export const Layout = ({
  menuOptions,
  children,
}: {
  menuOptions: menuOptionsType;
  children: JSX.Element;
}) => {
  return (
    <>
      <Header />
      <MenuGen menuOptions={menuOptions} />
      <main className="main__container">{children}</main>
    </>
  );
};

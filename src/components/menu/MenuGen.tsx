import { Link } from "react-router-dom";
import "./menuGen.css";
export const MenuGen = ({ menuOptions }: { menuOptions: Array<any> }) => {
  return (
    <>
      <nav className="nav__gen">
        <ul className="nav__gen-list">
          {menuOptions.map((item) => {
            return (
              <li key={item.label} className="nav__gen-button">
                <Link to={item.path}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

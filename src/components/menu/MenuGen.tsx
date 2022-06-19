import { Link } from "react-router-dom";

export const MenuGen = ({ menuOptions }: { menuOptions: Array<any> }) => {
  return (
    <>
      <nav>
        <ul>
          {menuOptions.map((item) => {
            return (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

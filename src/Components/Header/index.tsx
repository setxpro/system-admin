import { useContext } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../Hooks/useTheme";
import * as C from "./styles";
import { AuthContext } from "../../Contexts/Auth/AuthContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const auth = useContext(AuthContext);
  return (
    <C.Container>
      <C.ContentLeft>
        <Link to="#">
          <C.Chatcon />
        </Link>
        <Link to="#">
          <C.CalendarIcon />
        </Link>
        <Link to="#">
          <C.TodoIcon />
        </Link>
      </C.ContentLeft>
      <C.ContentRight>
        <C.AreaToggleTheme onClick={toggleTheme}>
          {theme.title === "light" && <C.DarkIcon />}
          {theme.title === "dark" && <C.LightIcon />}
        </C.AreaToggleTheme>
        <C.AvatarAndName>
          <C.NameArea>
            <h3>{auth.user?.name}</h3>
            <h4>{auth.user?.assignment}</h4>
          </C.NameArea>
          <C.AvatarArea>
            <div className="image">
              <img src={auth.user?.avatar} alt="avatar" />
            </div>
          </C.AvatarArea>
        </C.AvatarAndName>
      </C.ContentRight>
    </C.Container>
  );
};

export default Header;

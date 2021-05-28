import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

function useAuth(props) {
  const { user, setUser } = useContext(AuthContext);

  const authenticate = (token) => {
    const user = {
      user_id: "1",
      username: "user",
      email: "user@userbase.com",
      mobile: "9876543210",
      iat: 1516239022,
    }; // TODO:. decode and extract user object from $token
    authStorage.storeToken(token);
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, authenticate, logout };
}

export default useAuth;

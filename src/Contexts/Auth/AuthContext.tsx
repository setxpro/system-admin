import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useApi } from "../../Hooks/useApi";
import { User } from "../../Types/User";
type AuthContextType = {
  user: User | null;
  signin: (username: string, password: string) => Promise<boolean>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState("");
  const api = useApi();

  const signin = async (username: string, password: string) => {
    const data = await api.signin(username, password);
    if (data.user) {
      setUser(data.user);
      return true;
    }
    console.log(data.msg);

    return false;
  };

  return (
    <AuthContext.Provider value={{ user, signin, message, setMessage }}>
      {children}
    </AuthContext.Provider>
  );
};

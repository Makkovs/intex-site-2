import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./store/index";
import { setUser, User } from "./store/userSlice";

import AppRouter from "./compontents/Router/Router";
import Header from "./compontents/Header/Header";

const App = () => {

  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const newUser: User = {
      isAuth: true,
      email: "testmail@gmail.com",
      phoneNumber: null
    };
    dispatch(setUser(newUser));
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
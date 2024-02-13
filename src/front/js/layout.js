import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login";
import { Message } from "./pages/Messages";
import { ResetPassword } from "./pages/Passreset";
import { Single } from "./pages/single";
import { Signup } from "./pages/signup";
import { Private} from "./pages/private"
import { Profile } from "./pages/Profile"
import { PlayerFav } from "./pages/PlayerFav"
import { Logout } from "./pages/logout"
import { Cod } from "./pages/CallofDutybtn"
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


const Layout = () => {

    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Cod />} path="/callofduty" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<ResetPassword />} path="/PassReset" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Private />} path="/private" />
                        <Route element={<Message />} path="/messages" />
                        <Route element={<PlayerFav />} path="/playerfav" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<Logout />} path="/logout" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

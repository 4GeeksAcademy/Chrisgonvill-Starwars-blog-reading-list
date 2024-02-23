import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Navbar from "./component/navbar";
import { Footer } from "./component/footer";
import { Home } from "./views/home";
import { Single } from "./views/single";
import { People } from "./views/people.js";
import { Planets } from "./views/planets.js";
import { Vehicles } from "./views/vehicles.js";
import injectContext from "./store/appContext";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/single/:theid" element={<Single />} />
                        <Route path="/people/:id" element={<People />} />
                        <Route path="/planets/:id" element={<Planets />} />
                        <Route path="/vehicles/:id" element={<Vehicles />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

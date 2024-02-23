import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
    const { store, actions } = useContext(Context);

    const handleDeleteFavorite = (name) => {
        actions.deleteFavorite(name);
    };


    return (
        <nav className="navbar navbar-light bg-secondary mb-3">
            <Link to="/">
                <img src="https://icon-library.com/images/star-wars-logo-icon/star-wars-logo-icon-13.jpg" style={{ width: "90px" }} mb-0 />
            </Link>
            <div className="d-flex align-items-center justify-content-center flex-grow-1">
                <div className="dropdown">
                    <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites ({store.favorites ? store.favorites.length : 0})
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {store.favorites && store.favorites.map((favorite, index) => (
                            <li key={index}>
                                <Link className="dropdown-item" to="#">
                                    {favorite.name}
                                </Link>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteFavorite(favorite.name)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;

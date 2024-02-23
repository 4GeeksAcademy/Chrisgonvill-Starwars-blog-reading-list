import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="bg-secondary">
            <div className="overflow-scroll bg-secondary">
                <h1>People</h1>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5">
                    {store.personajes.map((item, index) => (
                        <div key={index} className="col mb-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.properties.name}</h5>
                                    <p className="card-text">Eye Color: {item.properties.eye_color}</p>
                                    <p className="card-text">Gender: {item.properties.gender}</p>
                                    <Link to={`/people/${item.uid}`} className="btn btn-primary">Learn More!</Link>
                                    <button className="btn btn-warning" onClick={() => actions.addToFavorites(item.uid, item.name)}>
                                        <i className="far fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="overflow-scroll bg-secondary">
                <h1>Planets</h1>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5">
                    {store.planetas.map((item, index) => (
                        <div key={index} className="col mb-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.properties.name}</h5>
                                    <p className="card-text">Population: {item.properties.population}</p>
                                    <p className="card-text">Terrain: {item.properties.terrain}</p>
                                    <Link to={`/planets/${item.uid}`} className="btn btn-primary">Learn More!</Link>
                                    <button className="btn btn-warning" onClick={() => actions.addToFavorites(item.uid, item.name)}>
                                        <i className="far fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="overflow-scroll bg-secondary">
                <h1>Vehicles</h1>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5">
                    {store.vehiculos.map((item, index) => (
                        <div key={index} className="col mb-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.properties.name}</h5>
                                    <p className="card-text">Model: {item.properties.model}</p>
                                    <p className="card-text">Manufacturer: {item.properties.manufacturer}</p>
                                    <Link to={`/vehicles/${item.uid}`} className="btn btn-primary">Learn More!</Link>
                                    <button className="btn btn-warning" onClick={() => actions.addToFavorites(item.uid, item.name)}>
                                        <i className="far fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

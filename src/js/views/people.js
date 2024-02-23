import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        actions.obtienePersonaje(params.id)
    }, [])
    console.log(store.personaje.properties)
    return (
        <div className="jumbotron">
            <div class="card mb-3 bg-secondary">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div class="card-body bg-secondary">
                    <h5 class="card-title">Name: {store.personaje.properties?.name}</h5>
                    <h5 class="card-title">Eye Color: {store.personaje.properties?.eye_color}</h5>
                    <h5 class="card-title">Gender: {store.personaje.properties?.gender}</h5>
                    <h5 class="card-title">Hair Color: {store.personaje.properties?.hair_color}</h5>
                    <h5 class="card-title">Height: {store.personaje.properties?.height}</h5>
                </div>
            </div>
        </div>
    );
};

People.propTypes = {
    match: PropTypes.object
};

import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        actions.obtienePlaneta(params.id)
    }, [])
    console.log(store.planeta.properties)
    return (
        <div className="jumbotron">
            <div class="card mb-3 bg-secondary">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div class="card-body bg-secondary">
                    <h3 class="card-title">Name: {store.planeta.properties?.name}</h3>
                    <h5 class="card-title">Diameter: {store.planeta.properties?.diameter}</h5>
                    <h5 class="card-title">Gravity: {store.planeta.properties?.gravity}</h5>
                    <h5 class="card-title">Population: {store.planeta.properties?.population}</h5>
                    <h5 class="card-title">Climate: {store.planeta.properties?.climate}</h5>
                </div>
            </div>
        </div>
    );
};

Planets.propTypes = {
    match: PropTypes.object
};
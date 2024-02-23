import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        actions.obtieneVehiculo(params.id)
    }, [])
    console.log(store.vehiculo.properties)
    return (
        <div className="jumbotron">
            <div class="card mb-3 bg-secondary">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div class="card-body bg-secondary">
                    <h3 class="card-title">Vehicle Class: {store.vehiculo.properties?.vehicle_class}</h3>
                    <h5 class="card-title">Name: {store.vehiculo.properties?.name}</h5>
                    <h5 class="card-title">Manufacturer: {store.vehiculo.properties?.manufacturer}</h5>
                    <h5 class="card-title">Model: {store.vehiculo.properties?.model}</h5>
                    <h5 class="card-title">Passengers: {store.vehiculo.properties?.passengers}</h5>
                    <h5 class="card-title">Max Atmosphering Speed: {store.vehiculo.properties?.max_atmosphering_speed}</h5>
                </div>
            </div>
        </div>
    );
};

Vehicles.propTypes = {
    match: PropTypes.object
};
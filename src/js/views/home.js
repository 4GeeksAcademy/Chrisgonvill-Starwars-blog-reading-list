import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);


	return (
		<div className="bg-secondary" >
			<div className="row mt-5">
                <h1>People</h1>
                {store.personajes.map((item, index) => (
                    <div key={index} className="card col" style={{ width: "10px" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <Link to="#" className="btn btn-primary">Learn More!</Link>
                            <button className="btn btn-warning" onClick={() => actions.addToFavorites(item.uid, item.name)}>
                                <i className="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
			<div className="row mt-5">
				<h1>Planets</h1>
				{store.planetas.map((item, index) => (
					<div key={index} className="card col" style={{ width: "10px" }}>
						<img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<Link to="#" className="btn btn-primary">Learn More!</Link>
							<button className="btn btn-warning" onClick={() => actions.addToFavorites(item.uid, item.name)}>
                                <i className="far fa-heart"></i>
                            </button>
						</div>
					</div>
				))}
			</div>
			<div className="row mt-5">
				<h1>Vehicles</h1>
				{store.vehiculos.map((item, index) => (
					<div key={index} className="card col" style={{ width: "10px" }}>
						<img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<Link to="#" className="btn btn-primary">Learn More!</Link>
							<button className="btn btn-warning" onClick={() => actions.addToFavorites(item.uid, item.name)}>
                                <i className="far fa-heart"></i>
                            </button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

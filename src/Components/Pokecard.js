import React, { Component } from "react";
import "./Pokecard.css";

const POKE_API =
	"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
	render() {
		const { name, id, type, exp } = this.props;
		const imgSrc = `${POKE_API}${id}.png`;
		return (
			<div className="Pokecard">
				<h1>{name}</h1>
				<img src={imgSrc} alt={`Pokemon-${name}`} />
				<div>Type: {type}</div>
				<div>Experience: {exp}</div>
			</div>
		);
	}
}

export default Pokecard;

import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "../Card";
import { array } from "prop-types";
import Jumbotron from "../Jumbotron";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/index.css";

let cardBody = [{
	titulo: "Stardew Valley", imagen: "https://assets-prd.ignimgs.com/2021/12/20/stardewvalley-1640044262769.jpg", descripcion: "Stardew Valley is open-ended, allowing players to grow crops, raise livestock, fish, cook, mine, forage, and socialize with the townspeople.", link: "https://store.steampowered.com/app/413150/Stardew_Valley/"
}, { titulo: "SpiritFarer", imagen: "https://image.api.playstation.com/vulcan/img/rnd/202112/1100/oofNmdeDcfWwSU4XUOFSazSc.png", descripcion: "Build a boat to explore the world, then befriend and care for spirits before finally releasing them into the afterlife.", link: "https://store.steampowered.com/app/972660/Spiritfarer_Edicin_Farewell/" },
{ titulo: "Animal Crossing", imagen: "https://storage.gra.cloud.ovh.net/v1/AUTH_296c7803aa594af69d39b970927c8fb9/media/game_avatars/sU/sUMABCIEcaZKEsAb.png", descripcion: "Live in a village inhabited by various anthropomorphic animals, do  activities like fishing, insect catching, and fossil hunting.", link: "https://www.nintendo.com/store/products/animal-crossing-new-horizons-happy-home-paradise-70050000030669-switch/" },
{ titulo: "Gris", imagen: "https://b.thumbs.redditmedia.com/MqDE1n-NrlE2qGNZMgkWWDGf2vsd3i8GxmeBwapmLpg.png", descripcion: "The game follows a girl named Gris, who wakes up in the palm of a crumbling statue of a woman.Her journey is manifested in her dress.", link: "https://store.steampowered.com/app/683320/GRIS/" }]

const Home = () => {
	return (

		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col">
						<Jumbotron />

					</div>
				</div>
				<div className="row">
					{
						cardBody.map((value, index, array) => {
							return <Card titulo={value.titulo} imagen={value.imagen} descripcion={value.descripcion} link={value.link} key={index} />
						})
					}
				</div>
			</div>

			<Footer />
		</div>

	);
};

export default Home;

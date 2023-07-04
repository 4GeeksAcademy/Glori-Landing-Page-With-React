import React from 'react'

const Jumbotron = () => {
    return (
        <div className="jumbotron m-4 p-4 pt-5 pb-5 rounded mt-4 " style={{ backgroundColor: "#C5E3EB" }}>
            <h1 className="display-4">Favorite Cozy Games</h1>
            <p className="lead">Cozy gaming, also called “comfort gaming”, is a type of gameplay that emphasizes relaxation, comfort and self-care. These games typically have a slower pace, calming music and gentle gameplay mechanics. They often feature themes of nature, exploration and relaxation and are designed to help players unwind and de-stress. Nurturing and world-building are often major features of cozy gaming, with players often implored to take care of their neighbours or their environment</p>
            <p className="lead">Cozy gaming offers a counterpoint to the often-chaotic world of mainstream gaming. In recent years, the video game industry has become increasingly focused on fast-paced action, competitive play and high-stakes gameplay. While these games can be thrilling and engaging, they can also be stressful and overwhelming. Cozy games, on the other hand, provide a welcome respite from this intensity, allowing players to unwind and enjoy a more low-key gaming experience.</p>
            <p className="lead">Here is a list of some of my favorite cozy games, with their respective brief description.</p>
            <a className="btn btn-light btn-lg" href="https://store.steampowered.com/?l=spanish" role="button">Go to Steam Store</a>
        </div>
    )
}

export default Jumbotron
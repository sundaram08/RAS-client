import React from "react";
import MusicCard from "../MusicCard/MusicCard";


const Home = () => {
  
  return (
    <div className="flex-1 bg-gray-700 min-h-screen flex items-center justify-center">
      <div className="flex-1 w-1/3 bg-gray-200 p-10 mu-5">
        <img
          src="path/to/album/cover.jpg"
          alt="Album Cover"
          className="w-full h-64 object-cover mb-4"
        />
        <h2 className="text-xl font-bold mb-2">Album Name</h2>
        <p className="mb-4">Artist Name</p>
        <h3 className="text-lg font-bold mb-2">Songs</h3>
        <ul>
          <MusicCard title="inglourious" img="https://archive.org/download/mbid-3a65a400-7f18-49f9-b027-4a8f239156e9/mbid-3a65a400-7f18-49f9-b027-4a8f239156e9-38410717599_thumb500.jpg" />
        </ul>
      </div>
    </div>
  );
};

export default Home;

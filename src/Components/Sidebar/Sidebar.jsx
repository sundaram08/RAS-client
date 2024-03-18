import React from 'react'
import sample from "../../assets/image/image.png"
import sample1 from "../../assets/image/home_icon.png"
import sample2 from "../../assets/image/albums_icon.png"
import sample3 from "../../assets/image/tracks_icon.png"
const Sidebar = () => {
  return (
  
    <div className="bg-gray-800 h-relative w-60 p-6">
    <div className="flex items-center justify-center mb-6">
      <img src={sample} alt="Logo" className="h-10 w-35" />
    </div>
    <div className="mb-6">
      <h2 className="text-white text-lg font-bold mb-4">Browse Music</h2>
      <div className="bg-gray-700 p-3 rounded-md flex items-center justify-between mb-4">
        <a href="#" className="text-white hover:text-gray-400 flex items-center">
          <img src={sample1} alt="Home" className="w-5 h-5 mr-2" />
          Home
        </a>
      </div>
      <div className="bg-gray-700 p-3 rounded-md flex items-center justify-between mb-4">
        <a href="#" className="text-white hover:text-gray-400 flex items-center">
          <img src={sample2} alt="Playlists" className="w-5 h-5 mr-2" />
          Playlists
        </a>
      </div>
      <div className="bg-gray-700 p-3 rounded-md flex items-center justify-between mb-4">
        <a href="#" className="text-white hover:text-gray-400 flex items-center">
          <img src={sample3} alt="Tracks" className="w-5 h-5 mr-2" />
          Tracks
        </a>
      </div>
    </div>
    <div className="mb-6">
  <h2 className="text-white text-lg font-bold mb-4">Library</h2>
  <a href="#" className="text-white hover:text-gray-400 flex items-center mb-2">
    Recently Played
  </a>
  <a href="#" className="text-white hover:text-gray-400 flex items-center mb-2">
    Favourite Tracks
  </a>
  <a href="#" className="text-white hover:text-gray-400 flex items-center mb-4">
    Listen Again
  </a>
</div>
  </div>
  )
}

export default Sidebar
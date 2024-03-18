import React from 'react'

const Home = () => {
  return (
    <div className="flex-1 bg-gray-700 min-h-screen flex items-center justify-center">
      <div className="flex-1 w-1/3 bg-gray-200 p-10 mu-5">
        <img src="path/to/album/cover.jpg" alt="Album Cover" className="w-full h-64 object-cover mb-4" />
        <h2 className="text-xl font-bold mb-2">Album Name</h2>
        <p className="mb-4">Artist Name</p>
        <h3 className="text-lg font-bold mb-2">Songs</h3>
        <ul>
          <li className="flex items-center mb-2">
            <img src="path/to/song/image.jpg" alt="Song Image" className="w-16 h-16 object-cover mr-4" />
            <div>
              <p className="text-lg font-bold">Song Name 1</p>
              <p className="text-sm">Artist Name 1</p>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <img src="path/to/song/image.jpg" alt="Song Image" className="w-16 h-16 object-cover mr-4" />
            <div>
              <p className="text-lg font-bold">Song Name 2</p>
              <p className="text-sm">Artist Name 2</p>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <img src="path/to/song/image.jpg" alt="Song Image" className="w-16 h-16 object-cover mr-4" />
            <div>
              <p className="text-lg font-bold">Song Name 3</p>
              <p className="text-sm">Artist Name 3</p>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <img src="path/to/song/image.jpg" alt="Song Image" className="w-16 h-16 object-cover mr-4" />
            <div>
              <p className="text-lg font-bold">Song Name 4</p>
              <p className="text-sm">Artist Name 4</p>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <img src="path/to/song/image.jpg" alt="Song Image" className="w-16 h-16 object-cover mr-4" />
            <div>
              <p className="text-lg font-bold">Song Name 5</p>
              <p className="text-sm">Artist Name 5</p>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <img src="path/to/song/image.jpg" alt="Song Image" className="w-16 h-16 object-cover mr-4" />
            <div>
              <p className="text-lg font-bold">Song Name 6</p>
              <p className="text-sm">Artist Name 6</p>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <img src="path/to/song/image.jpg" alt="Song Image" className="w-16 h-16 object-cover mr-4" />
            <div>
              <p className="text-lg font-bold">Song Name 7</p>
              <p className="text-sm">Artist Name 7</p>
            </div>
          </li>
          <li className="flex items-center mb-6">
            <img src="path/to/song/image.jpg" alt="Song Image" className="w-16 h-16 object-cover mr-4" />
            <div>
              <p className="text-lg font-bold">Song Name 8</p>
              <p className="text-sm">Artist Name 8</p>
            </div>
          </li>
         
        </ul>
      </div>
    </div>
  )
}

export default Home

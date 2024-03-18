import React from 'react'

const MusicBar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-gray-700 text-white flex items-center justify-center h-16">
      <div className="w-full max-w-lg flex items-center justify-between">
        <div className="flex items-center">
          <img src="/src/assets/image/starboy.jpeg" alt="Song Image" className="w-16 h-16 object-cover mr-4 rounded-full" />
          <div>
            <p className="text-lg font-bold">Star Boy</p>
            <p className="text-sm">The Weekend</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-sm mr-4">progress / duration</div>
          <div className="flex items-center">
            <button className="focus:outline-none">
              <svg className="w-6 h-6 fill-current text-gray-400" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </button>
            <button className="focus:outline-none">
              <svg className="w-6 h-6 fill-current text-gray-400" viewBox="0 0 24 24"><path d="M6 19h12v2H6V19zm8-14-6 4-6-4v3h12V5z"/></svg>
            </button>
            <button className="focus:outline-none">
              <svg className="w-6 h-6 fill-current text-gray-400" viewBox="0 0 24 24"><path d="M10 0v2.5l8 8-8 8V10h12v-2.5L10 0zm4.4 13.6c.4.4.4 1 0 1.4s-1 .4-1.4 0L10 11.4l-3.6 3.6c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L8.6 10 5 6.4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L10 8.6l3.6 3.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L11.4 10l3.6-3.6z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicBar

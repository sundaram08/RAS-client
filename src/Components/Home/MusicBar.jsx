import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const MusicBar = () => {
  const musicUrl =
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WM_Recordings/Rod/Noises_in_my_head/Rod_-_01_-_Come_Back_and_stop_those_rainy_days.mp3";
  const [imageUrl, setimageUrl] = useState(
    "data:image/png;base64,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"
  );
  const musicData = useSelector((state) => state.music.currentSong);

  useEffect(() => {
    if (musicData.img != null) setimageUrl((prev) => (prev = musicData.img));
  }, [musicData]);

  return (
    <div className="fixed bottom-0 w-full bg-gray-700 text-white flex items-center justify-center h-16">
      <div className="w-full max-w-lg flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={imageUrl}
            alt="Song Image"
            className="w-16 h-16 object-cover mr-4 rounded-full"
          />
          <div>
            <p className="text-lg font-bold">Star Boy</p>
            <p className="text-sm">{musicData.title}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-sm mr-4">progress / duration</div>
          <audio controls src={musicUrl}></audio>
          <div className="flex items-center">
            <button className="focus:outline-none">
              <svg
                className="w-6 h-6 fill-current text-gray-400"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <button className="focus:outline-none">
              <svg
                className="w-6 h-6 fill-current text-gray-400"
                viewBox="0 0 24 24"
              >
                <path d="M6 19h12v2H6V19zm8-14-6 4-6-4v3h12V5z" />
              </svg>
            </button>
            <button className="focus:outline-none">
              <svg
                className="w-6 h-6 fill-current text-gray-400"
                viewBox="0 0 24 24"
              >
                <path d="M10 0v2.5l8 8-8 8V10h12v-2.5L10 0zm4.4 13.6c.4.4.4 1 0 1.4s-1 .4-1.4 0L10 11.4l-3.6 3.6c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L8.6 10 5 6.4c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L10 8.6l3.6 3.6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L11.4 10l3.6-3.6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicBar;

import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentSong } from "../../store/musicSlice";

function MusicCard({ img,title }) {
  const dispatch = useDispatch();
  const handleCardClick = () => {
    dispatch(updateCurrentSong({img,title}))
  };
  return (
    <div
      className="relative h-[400px] w-[300px] rounded-md "
      onClick={handleCardClick}
    >
      <img
        src={img}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">Delba</h1>
        <p className="mt-2 text-sm text-gray-300">
          {title}
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile →
        </button>
      </div>
    </div>
  );
}

export default MusicCard;

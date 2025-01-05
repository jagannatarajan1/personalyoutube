import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
const VidoeContainer = () => {
  const [videoData, setvideoData] = useState([]);
  useEffect(() => {
    const fetchVideoData = async () => {
      const response = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=40&key=AIzaSyCPDrCamJ531jGKR-UYpimYEfNnBObZrwM"
      );
      const data = await response.json();
      setvideoData(data.items);
    };

    fetchVideoData();
  }, []);
  return (
    <div className=" flex flex-wrap justify-center">
      {videoData.map((ele, i) => (
        <VideoCard key={i} info={ele}></VideoCard>
      ))}
    </div>
  );
};

export default VidoeContainer;

import React, { useEffect } from "react";

const VidoeContainer = () => {
  useEffect(() => {
    const fetchVideoData = async () => {
      const response = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyCPDrCamJ531jGKR-UYpimYEfNnBObZrwM"
      );
      const data = await response.json();
      console.log(data);
    };
    fetchVideoData();
  }, []);
  return <div>VidoeContainer</div>;
};

export default VidoeContainer;

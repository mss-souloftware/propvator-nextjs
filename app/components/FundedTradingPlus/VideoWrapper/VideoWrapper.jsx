import React from "react";
import styles from "./VideoWrapper.module.css";

export default function VideoWrapper() {
  return (
    <div className="container mx-auto px-3 md:px-0">
      <div className={`${styles.iframeHeight} w-full max-w-5xl mx-auto my-8`}>
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/IgHUCL_RYCg?si=5oD8b2BFOVAd2h_S"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

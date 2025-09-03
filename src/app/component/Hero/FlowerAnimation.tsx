import { useEffect, useRef } from "react";

export const FlowerAnimation = ({
  setShowVideo,
  showVideo,
}: {
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;
  showVideo: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }

    if (videoRef2.current) {
      videoRef2.current.playbackRate = 2;
    }
  }, []);

  return (
    <div className="relative aspect-square h-full">
      <video
        poster="/flower.webp"
        style={{
          opacity: showVideo ? 0 : 1,
          scale: 1.2,
        }}
        height="100%"
        preload="auto"
        playsInline
        ref={videoRef}
        disablePictureInPicture
        muted={true}
        loop={false}
        autoPlay={true}
        className="object-cover max-sm:-left-24 absolute"
        src="/flower-video.webm"
        onEnded={() => {
          videoRef2.current?.play();
          setShowVideo(() => true);
          window.setTimeout(() => {}, 0);
        }}
      />

      <video
        ref={videoRef2}
        preload="auto"
        playsInline
        disablePictureInPicture
        autoPlay={false}
        muted
        loop={true}
        style={{
          opacity: showVideo ? 1 : 0,
          scale: 1.2,
        }}
        className="object-cover max-sm:-left-24 absolute"
        src="/flower-video-2.webm"
      />
    </div>
  );
};

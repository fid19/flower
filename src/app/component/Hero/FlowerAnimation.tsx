import { useRef } from "react";

export const FlowerAnimation = ({
  setShowVideo,
  showVideo,
}: {
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;
  showVideo: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  if (videoRef.current) {
    videoRef.current.playbackRate = 2;
  }

  return (
    <div className="mx-auto relative aspect-square h-full">
      <video
        poster="/flower.webp"
        width="100%"
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
        autoPlay={true}
        className="object-cover max-sm:-left-24 absolute"
        src="/flower-video.webm"
        onEnded={() => {
          setShowVideo(() => true);
          videoRef2.current?.play();
        }}
      />
      <video
        ref={videoRef2}
        preload="auto"
        playsInline
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

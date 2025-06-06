const VideoBg = () => {
  return (
    <>
      <div className="bg-video-sec -z-10 w-full min-h-full absolute after:absolute after:bg-[#fff] after:top-0 after:opacity-[0.1] after:w-full after:h-full rounded-[10px] lg:rounded-[20px] overflow-hidden top-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover top-0">
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default VideoBg
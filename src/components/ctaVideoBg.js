const CtaVideoBg = () => {
    return (
      <>
        <div className="bg-video-sec -z-10 w-full h-full absolute after:absolute after:bg-[#714B67] after:opacity-[0.5] after:w-full after:h-full rounded-[20px] overflow-hidden top-0 left-0 after:left-0 after:top-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover top-0">
            <source src="/cta-video.mp4" type="video/mp4" />
          </video>
        </div>
      </>
    )
  }
  
  export default CtaVideoBg
const VideoBg = () => {
  return (
    <>
      <section className="bg-video-sec -z-10 w-full h-full fixed after:absolute after:bg-[#fff] after:top-0 after:opacity-[0.5] after:w-full after:h-full top-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover top-0">
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  )
}

export default VideoBg
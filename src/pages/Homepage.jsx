import bannerImages from '/sinulog2026dekstop1.png'
function Homepage() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexDirection: 'column'
      }}
    >
      <span
        style={{
          fontSize: '20px'
        }}
      >
        HOMEPAGE
      </span>
      <img src={bannerImages} alt="" />
      <img src={bannerImages} alt="" />
      <img src={bannerImages} alt="" />
      <img src={bannerImages} alt="" />
      <img src={bannerImages} alt="" />
      <img src={bannerImages} alt="" />
      <img src={bannerImages} alt="" />
    </div>
  )
}

export default Homepage

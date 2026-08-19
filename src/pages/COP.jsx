import bannerImages from '/sinulog2026dekstop1.png'
function COP() {
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
        COP
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

export default COP

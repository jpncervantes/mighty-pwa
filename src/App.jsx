import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
        width: '100%',
        gap: '20px'
      }}>
        <img src="/sinulog2026dekstop1.png" width={'50%'} style={{
          minWidth: '300px'
        }}/>
        <img src="/sinulog2026dekstop1.png" width={'50%'} style={{
          minWidth: '300px'
        }}/>
        <img src="/sinulog2026dekstop1.png" width={'50%'} style={{
          minWidth: '300px'
        }}/>
        <img src="/sinulog2026dekstop1.png" width={'50%'} style={{
          minWidth: '300px'
        }}/>
        <img src="/sinulog2026dekstop1.png" width={'50%'} style={{
          minWidth: '300px'
        }}/>
      </div>
    </div>
  )
}

export default App

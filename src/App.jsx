
import './App.css'

function App() {
  const user ={
    colorpreferido: "red",
    name: juan
  }
  const userpresentation = {
    backgroundcolor: user.colorpreferido,
    username: user.name
  }

  return (
    <>
      <header>
        <div><p style={userpresentation}>me llamo {user.name}</p></div>
        <div><img src="/imagenes/mommyandme" alt="una imagen" /></div>
      </header>
    </>
  )
}

export default App

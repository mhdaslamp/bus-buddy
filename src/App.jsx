
import './App.css'
import Adminlogin from './components/login/admin_login'
import Home from './components/homewindow/Home'
import Header from './components/header/Header'

function App() {

  return (
    <div className='App' style={{ display: "grid", gap: "10px" }}>
      <Header />
      <Home />
</div>
   

  )
}

export default App

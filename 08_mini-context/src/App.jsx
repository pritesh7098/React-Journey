import './App.css'
import Login from './Component//Login'
import Profile from './Component/Profile'
import UserContextProvider from './Context/userContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
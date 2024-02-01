import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if(userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-100'>
        <div className='min-h-screen w-full flex flex-col items-center bg-gray-400'>
          <Header />
          <main>
            TODO{/* <Outlet /> */}
          </main>
          <Footer />
        </div>
      </div>
    </>) 
  : (
    <>
    <div>
      <h1>You are not logged in</h1>
    </div>
  </>)
}

export default App

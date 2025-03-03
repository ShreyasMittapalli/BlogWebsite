import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Starter from './pages/Starter'
import Home from './pages/Home'
import BlogDetail from './pages/BlogDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path = '/' element={<Starter/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path="/home/blogs/:id" element={<BlogDetail />} />
      </Routes>
    </>
  )
}

export default App

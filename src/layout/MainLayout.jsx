import Sidebar from '../components/Sidebar'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Gallery from '../pages/Gallery'
import Setting from '../pages/Setting'
import Notifications from '../pages/Notification'
import Help from '../pages/Help'
import { Route, Routes } from 'react-router-dom'


const MainLayout = () => {
  return (
    <div className='w-full flex gap-4'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/settings' element={<Setting/>}/>
        <Route path='/notifications' element={<Notifications/>}/>
        <Route path='/help' element={<Help/>}/>
      </Routes>
      
    </div>
  )
}

export default MainLayout

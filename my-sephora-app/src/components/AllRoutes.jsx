import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import NewbeautyProducts from '../pages/NewbeautyProducts'
import SignIn from '../pages/SignIn'

export default function AllRoute(){
    return(
        <Routes>
             <Route path='/' element={<Home />}/>
             <Route path='/newbeautyProducts' element={<NewbeautyProducts />}/>
             <Route path='/signin' element={<SignIn />} />
        </Routes>
    )
}

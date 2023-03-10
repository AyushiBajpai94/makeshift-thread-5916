import {Routes,Route} from 'react-router-dom'
import BathAndBodyProduct from '../pages/Bath&BodyProduct'
import CartPage from '../pages/CartPage'
import EyeProduct from '../pages/EyeProduct'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NewbeautyProducts from '../pages/NewbeautyProducts'
import ProductCardDetail from '../pages/SingleproductPage'
import Paymentpage from '../pages/paymentpage'
import PrivateRoute from './PrivateRoute'
import Admin from '../pages/Admin'
import Orderplaced from '../pages/orderplaced'

export default function AllRoute(){
    return(
        <Routes>
             <Route path='/' element={<Home />}/>
             {/* <Route path='/signup' element={<Signup />}/> */}
             <Route path='/login' element={<Login />}/>
             <Route path='/admin' element={<Admin />}/>
             <Route path='/newbeautyProducts' element={<NewbeautyProducts />}/>
             <Route  path='/eyeProducts' element={<EyeProduct />}/>
             <Route path='/bath&bodyProducts' element={<BathAndBodyProduct />} />
             <Route path='/bath-body/:id' element={<ProductCardDetail />} />
             <Route path='/cartpage' element={
                <PrivateRoute >
                     <CartPage />
                </PrivateRoute>
                   
             
             } />
             <Route path='/payment' element={<Paymentpage />} />
             <Route path='/orderplaced' element={<Orderplaced />}/>
             
        </Routes>
    )
}


import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Services from './Pages/Services';

function App() {
 

  return (


    <>
    

    <Routes>

      <Route path='/' element={<Landing/>}/>
      <Route path='/Services' element={<Services/>}/>


    </Routes>
    
    
    </>

   



  )
}

export default App


import './App.css';

function App() {
	return (
		<>
			<h1 className='text-red-900 text-center'>Hellow EveryOne</h1>
		</>
	);


import './App.css'
import { Route , Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Errorpage from './Pages/Errorpage'
function App() {

  return (
    <>
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/*' element={<Errorpage/>}></Route>
    
  </Routes>
    </>
  )
}

export default App;

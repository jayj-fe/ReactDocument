import { Route, Routes } from 'react-router-dom';
import PageReactDocument from './pages/PageReactDocument'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageReactDocument />}></Route>
        <Route path="/Rma_Timer" element={<PageReactDocument />}></Route>
        <Route path="/RMA_Timer" element={<PageReactDocument />}></Route>
      </Routes>
    </>
  )
}

export default App

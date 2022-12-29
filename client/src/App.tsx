
import { BrowserRouter } from 'react-router-dom'
import BaseLayout from './components/BaseLayout/BaseLayout'
import './App.module.scss'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <BaseLayout/>
      </BrowserRouter>
     
    </div>
  )
}

export default App

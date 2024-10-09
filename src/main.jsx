import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Context } from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
    <Context.Provider>
      <BrowserRouter>
        <App />
       </BrowserRouter>
    </Context.Provider>
)

import MouseAnimated from './components/mosueAnimated/MouseAnimated'
import Router from './router/Router'
import ResetCSS from './stylesConfig/globalStyles'
import { AppProvider } from "./context/AppContext.jsx";


function App() {

  return (
    <div className="App">
      <ResetCSS />
      <AppProvider>

        <MouseAnimated />
        <Router />
      </AppProvider>
    </div>
  )
}

export default App

import { Provider } from "react-redux"
import {store} from "./redux/store"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"

function App() {

  return (
    <>
    <Provider store={store}>
      <Navbar />
      <Hero />
      <Features />
    </Provider>
    </>
  )
}

export default App

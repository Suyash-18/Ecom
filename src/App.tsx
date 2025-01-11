import { Provider } from "react-redux"
import {store} from "./redux/store"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {

  return (
    <>
    <Provider store={store}>
      <Navbar />
      <Hero />

    </Provider>
    </>
  )
}

export default App

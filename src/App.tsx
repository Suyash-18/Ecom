import { Provider } from "react-redux"
import {store} from "./redux/store"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <Provider store={store}>
      <Navbar />

    </Provider>
    </>
  )
}

export default App

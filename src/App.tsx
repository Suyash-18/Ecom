import { Provider } from "react-redux"
import {store} from "./redux/store"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import TrendingProducts from "./components/TrendingProducts"
import { Toaster } from "react-hot-toast"
import Banner from "./components/Banner"
import NewArrival from "./components/NewArrival"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <Provider store={store}>
      <Navbar />
      <Hero />
      <Features />
      <TrendingProducts />
      <Banner />
      <NewArrival />
      <Footer />
      <Toaster position="bottom-center" reverseOrder={false}/>
    </Provider>
    </>
  )
}

export default App

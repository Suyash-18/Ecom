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
import { useState } from "react"
import Cart from "./components/Cart"

function App() {
const [cart, setCart] = useState(false);

  return (
    <>
    <Provider store={store}>
      <Navbar setCart={setCart} />
      {cart && <Cart setCart={setCart}/> }
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

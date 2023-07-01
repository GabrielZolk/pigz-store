import { Container } from "./App.style"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Form from "./components/Form/Form"
import Navbar from "./components/Navbar/Navbar"
import Package from "./components/Package/Package"
import Slider from "./components/Slider/Slider"


function App() {
  return (
    <Container>
      <Navbar />
      <Form />
      <Features />
      <Slider />
      <Package />
      <Footer />
    </Container>
  )
}

export default App

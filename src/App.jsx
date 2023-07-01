import { Container } from "./App.style"
import Features from "./components/Features/Features"
import Form from "./components/Form/Form"
import Navbar from "./components/Navbar/Navbar"
import Slider from "./components/Slider/Slider"


function App() {
  return (
    <Container>
      <Navbar />
      <Form />
      <Features />
      <Slider />
    </Container>
  )
}

export default App

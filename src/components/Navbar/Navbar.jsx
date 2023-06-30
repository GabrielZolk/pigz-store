import { Logo, NavButton, Container } from './Navbar.style'

export default function Navbar() {
  return (
    <Container>
      <Logo src="pigzLogo.png" alt="Pigz Navbar Logo" />
      <NavButton>
        <p>
          Já sou parceiro
        </p>
      </NavButton>
    </Container>
  )
}

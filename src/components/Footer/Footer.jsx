import { Container } from "./Footer.style";

export default function Footer() {
    return (
        <Container>
            <div className="contact">
                <span>Fale com a Pigz</span>
                <img src="whatsapp.png" alt="whatsapp icon" />
                <span>
                    <small>95</small> 3224-2603
                </span>
            </div>
            <div className="footer-content">
                <div className="flex">
                    <div>
                        <div className="logo">
                            <img src="pigzLogo2.png" alt="pigz logo gray" />
                        </div>
                        <p>Tudo que você precisa.</p>
                        <span>Baixe o APP</span>
                        <div className="download">
                            <img src="appstore.png" alt="pigz logo gray" />
                            <img src="playstore.png" alt="pigz logo gray" />
                        </div>
                    </div>
                    <div>
                        <h4>Pigz</h4>
                        <ul id="about">
                            <li>Sobre o Pigz</li>
                            <li>Portal do Parceiro</li>
                            <li>Quero ser um Pigz Partner</li>
                        </ul>
                    </div>
                    <div>
                        <div className="contact-us">
                            <div className="contact-icon">
                                <img src="fale-conosco.png" alt="contact icon" />
                                <p>Fale conosco</p>
                            </div>
                            <p>falecom@pigz.com.br</p>
                            <div id="tel">(95) 3224-2603</div>
                        </div>
                        <div className="socials">
                            <span>Pigz nas redes</span>
                            <img src="linkedin.png" alt="linkedin icon" />
                            <img src="instagram.png" alt="instagram icon" />
                            <img src="facebook.png" alt="facebook icon" />
                            <img src="youtube.png" alt="youtube icon" />
                        </div>
                    </div>
                </div>
                <div id="terms">
                    <ul>
                        <a href="#"><li>Nossos termos</li></a>
                        <a href="#"><li>Privacidade</li></a>
                        <a href="#"><li>Ajuda</li></a>
                    </ul>
                </div>
                <div id="cr">
                    <p>© Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85</p>
                    <div>
                        <img src="orange.png" alt="orange footer logo" />
                    </div>
                </div>
            </div>
            <div id="bar"></div>
        </Container >
    )
}

import { Container, DefaultSlider, SliderContent } from "./Slider.style";


export default function Slider() {
    return (
        <Container>
            <DefaultSlider>
                <h3>Pigz Marketplace</h3>
                <SliderContent>
                    <p>
                        Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.
                    </p>
                    <div>
                        <img src="phones.png" alt="two cell phones" />
                    </div>
                </SliderContent>
            </DefaultSlider>
            <div className="support-info">
                <h4>E mais: suporte que realmente funciona!</h4>
                <p>Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes.</p>
            </div>
        </Container>
    )
}

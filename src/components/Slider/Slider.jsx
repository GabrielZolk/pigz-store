import { useState, useEffect } from "react";
import { Container, DefaultSlider, SliderContent } from "./Slider.style";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <Container>
      <div className="slider-navigation">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`slider-bar ${activeSlide === index ? 'active' : ''}`}
            onClick={() => handleSlideChange(index)}
          ></div>
        ))}
      </div>

      <div className="slider-wrapper">
        <DefaultSlider className={`slider ${activeSlide === 0 ? 'active' : ''}`}>
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

        <DefaultSlider className={`slider ${activeSlide === 1 ? 'active' : ''}`}>
          <h3>Pigz Gestão</h3>
          <SliderContent>
            <p>
              Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.
            </p>
            <div>
              <img src="notebook.png" alt="two cell phones" />
            </div>
          </SliderContent>
        </DefaultSlider>

        <DefaultSlider className={`slider ${activeSlide === 2 ? 'active' : ''}`}>
          <h3>Gestão de entregadores</h3>
          <SliderContent>
            <p>
              A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.
            </p>
            <div>
              <img src="mobile.png" alt="two cell phones" />
            </div>
          </SliderContent>
        </DefaultSlider>

        <DefaultSlider className={`slider ${activeSlide === 3 ? 'active' : ''}`}>
          <h3>Pagamento on-line</h3>
          <SliderContent>
            <p>
              Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.
            </p>
            <div>
              <img src="card.png" alt="two cell phones" />
            </div>
          </SliderContent>
        </DefaultSlider>
      </div>

      <div className="support-info">
        <h4>E mais: suporte que realmente funciona!</h4>
        <p>Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes.</p>
      </div>
    </Container>
  );
}

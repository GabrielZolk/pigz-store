import { Container } from "./Features.style";


export default function Features() {
    return (
        <Container>
            <div className="imgWrapper">
                <img id="pigzpigz" src="pigzpigz.png" alt="Pigz Pigz Image" />
            </div>

            <h4>Você tem um novo Pigzdido!</h4>
            <div className="grid">
                <div className="box">
                    <div className="imgWrapper">
                        <img id="storefront" src="storefront.png" alt="store front image" />
                    </div>
                    <h5>Marketplace</h5>
                    <span>Pra sua loja vender mais</span>
                </div>
                <div className="box">
                    <div className="imgWrapper">
                        <img id="smartphone" src="smartphone.png" alt="smartphone image" />
                    </div>
                    <h5>É fácil e rápido</h5>
                    <span>Fazer um pedido no Pigz</span>
                </div>
                <div className="box">
                    <div className="imgWrapper">
                        <img id="signal" src="signal.png" alt="pigz signal logo image" />
                    </div>
                    <h5>Pigz Gestão</h5>
                    <span>Você no controle, sempre</span>
                </div>
                <div className="box">
                    <div className="imgWrapper">
                        <img id="print" src="print.png" alt="printer image" />
                    </div>
                    <h5>Vias de impressão</h5>
                    <span>Personalizáveis</span>
                </div>
            </div>
            <p>Tudo que você precisa por apenas R$199/mês</p>
            <span>Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por cada venda, sem letrinhas miúdas.</span>
        </Container>
    )
}

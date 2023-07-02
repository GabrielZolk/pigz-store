import { Container, Pack } from "./Package.style";

export default function Package() {
    return (
        <Container>
            <Pack>
                <div>
                    <h3>Pigz</h3>
                    <p>Tudo o que você precisa</p>
                    <ul>
                        <li>Pigz Marketplace</li>
                        <li>Página exclusiva</li>
                        <li>Pigz Gestão Desktop e Mobile</li>
                        <li>Gestão de entregadores</li>
                        <li>Vias de impressão personalizáveis</li>
                    </ul>
                    <span>R$199/mês</span>
                    <button>
                            Vender no Pigz agora
                    </button>
                </div>
            </Pack>
            <Pack>
                <div>
                    <h3>Pagamento On-line</h3>
                    <p>Segurança e agilidade</p>
                    <ul>
                        <li>Aceite Pix e Cartão de Crédito</li>
                        <li>Antecipação Pix automática</li>
                        <li>Não dependa de maquininha de cartão</li>
                        <li>Segurança para receber pedidos</li>
                        <li>Agilidade para entregar</li>
                    </ul>
                    <span>2,99% por transação</span>
                    <button>
                            Saiba mais
                    </button>
                </div>
            </Pack>
        </Container>
    )
}

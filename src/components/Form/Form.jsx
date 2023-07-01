import { Container, TopContent, BottomContent } from "./Form.style";


export default function Form() {
    return (
        <Container>
            <TopContent>
                <div className="top-wrapper">
                    <p>Pigz: tudo que você precisa pra vender ainda mais!</p>
                    <span>
                        Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.
                    </span>
                </div>
                <img src="burguer_3.png" alt="burguer" />
            </TopContent>
            <BottomContent>
                <div className="bottom-wrapper">
                    <h5>Quero vender no Pigz</h5>
                    <p>Dê o primeiro passo para aumentar suas vendas</p>
                    <form>
                        <div className="inputBox">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" placeholder="Leonercio Goesfeeld" />
                        </div>

                        <div className="inputBox">
                            <label htmlFor="email">E-mail</label>
                            <input type="email  " id="email" name="email" placeholder="leonercio.goesfeeld@email.com" />
                        </div>

                        <div className="inputBox">
                            <label htmlFor="tel">Telefone</label>
                            <input type="number" id="tel" name="tel" placeholder="(95) 99876-5432" />
                        </div>

                    </form>

                    <span>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</span>
                    <button>Continuar</button>
                </div>
            </BottomContent>
        </Container>
    )
}

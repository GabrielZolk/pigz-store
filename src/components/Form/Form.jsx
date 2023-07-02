import { useState } from "react";
import { Container, TopContent, BottomContent } from "./Form.style";

export default function Form() {
    const [currentForm, setCurrentForm] = useState(0);

    const handleContinue = () => {

        if (validateForm(currentForm)) {
            setCurrentForm(currentForm + 1);
        } else {
            alert("Por favor, preencha todos os campos antes de continuar.");
        }
    };

    const validateForm = (formIndex) => {
        const inputs = document.querySelectorAll(`#form-${formIndex} input`);

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() === "") {
                return false;
            }
        }

        return true;
    };


    return (
        <Container>
            <TopContent>
                <div className="top-wrapper">
                    <p>Pigz: tudo que você precisa pra vender ainda mais!</p>
                    <span>
                        Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.
                    </span>
                </div>
                <div id="burguer">
                    <img src="burguer_3.png" alt="burguer image" />
                </div>
            </TopContent>
            {currentForm === 0 && (
                <BottomContent>
                    <div className="bottom-wrapper">
                        <h5>Quero vender no Pigz</h5>
                        <p>Dê o primeiro passo para aumentar suas vendas</p>
                        <form>
                            <div className="inputBox">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="nome" name="nome" placeholder="Leonercio Goesfeeld" required />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" name="email" placeholder="leonercio.goesfeeld@email.com" required />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="tel">Telefone</label>
                                <input type="number" id="tel" name="tel" placeholder="(95) 99876-5432" required />
                            </div>
                        </form>

                        <span>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</span>
                        <button onClick={handleContinue}>Continuar</button>
                    </div>
                </BottomContent>
            )}
            {currentForm === 1 && (
                <BottomContent>
                    <div className="bottom-wrapper">
                        <h5>Onde fica a sua loja?</h5>
                        <form>
                            <div className="inputBox">
                                <label htmlFor="cep">CEP</label>
                                <input type="number" id="cep" name="cep" placeholder="00000-00" required />
                            </div>

                            <div className="inputBox">
                                <div className="inputContainer">
                                    <div id="stateContainer">
                                        <label htmlFor="state">Estado</label>
                                        <input type="text" id="state" name="state" placeholder="UF" required />
                                    </div>

                                    <div id="cityContainer">
                                        <label htmlFor="city">Cidade</label>
                                        <input type="text" id="city" name="city" placeholder="Selecione" required />
                                    </div>
                                </div>
                            </div>

                            <div className="inputBox">
                                <div>
                                    <label htmlFor="address">Endereço</label>
                                    <input type="text" id="address" name="address" placeholder="Avenida Brasil" required />
                                </div>
                            </div>

                            <div className="inputBox">
                                <div className="inputContainer">
                                    <div id="numberContainer">
                                        <label htmlFor="number">Número</label>
                                        <input type="number" id="number" name="number" placeholder="123" required />
                                    </div>
                                    <div id="complementContainer">
                                        <label htmlFor="complement">Complemento</label>
                                        <input type="text" id="complement" name="complement" placeholder="Sala 1" />
                                    </div>
                                </div>
                            </div>
                        </form>

                        <button id="button-2" onClick={handleContinue}>Próximo</button>
                    </div>
                </BottomContent>
            )}
            {currentForm === 2 && (
                <BottomContent>
                    <div className="bottom-wrapper">
                        <h5>Me conta um pouco sobre a sua loja</h5>
                        <form>
                            <div className="inputBox">
                                <label htmlFor="storeName">Nome da loja</label>
                                <input type="text" id="storeName" name="storeName" placeholder="Restaurante Todo Mundo Gosta" required />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="cnpj">CNPJ da loja</label>
                                <input type="number" id="cnpj" name="cnpj" placeholder="12.345.678/0001-99" />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="storeType">Tipo de loja</label>
                                <input type="text" id="storeType" name="storeType" placeholder="Selecione" />
                            </div>
                        </form>

                        <button id="button-3" type="submit">Concluir</button>
                    </div>
                </BottomContent>
            )}
        </Container>
    );
}

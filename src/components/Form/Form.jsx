import { useState } from "react";
import { Container, TopContent, BottomContent } from "./Form.style";
import InputMask from "react-input-mask";

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

    const estados = [
        { sigla: 'RJ', nome: 'Rio de Janeiro' },
        { sigla: 'SC', nome: 'Santa Catarina' },
        { sigla: 'SP', nome: 'São Paulo' },
    ];

    const cidades = [
        { estado: 'RJ', nome: 'Rio de Janeiro' },
        { estado: 'RJ', nome: 'São Gonçalo' },
        { estado: 'RJ', nome: 'Duque de Caxias' },
        { estado: 'SC', nome: 'Florianópolis' },
        { estado: 'SC', nome: 'Joinville' },
        { estado: 'SC', nome: 'Blumenau' },
        { estado: 'SP', nome: 'São Paulo' },
        { estado: 'SP', nome: 'Guarulhos' },
        { estado: 'SP', nome: 'Campinas' },
    ];



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
                                <div id="country"><img src="brazil.svg" /> +55</div>
                                <InputMask
                                    mask="(99) 99999-9999"
                                    maskChar=""
                                    id="tel"
                                    name="tel"
                                    placeholder="(95) 99876-5432"
                                    required
                                />
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
                                <InputMask
                                    mask="99999-999"
                                    id="cep"
                                    name="cep"
                                    placeholder="00000-000"
                                    pattern="[0-9]{5}-[0-9]{3}"
                                    required
                                />

                            </div>

                            <div className="inputBox">
                                <div className="inputContainer">
                                    <div id="stateContainer">
                                        <label htmlFor="state">Estado</label>
                                        <select id="state" name="state" required>
                                            <option value="">UF</option>
                                            {estados.map((estado) => (
                                                <option key={estado.sigla} value={estado.sigla} className="option">{estado.nome}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div id="cityContainer">
                                        <label htmlFor="city">Cidade</label>
                                        <select id="state" name="state" required>
                                            <option value="">Selecione</option>
                                            {cidades.map((cidade) => (
                                                <option key={cidade.sigla} value={cidade.sigla} className="option">{cidade.nome}</option>
                                            ))}
                                        </select>
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
                                <InputMask
                                    mask="99.999.999/9999-99"
                                    id="cnpj"
                                    name="cnpj"
                                    placeholder="12.345.678/0001-99"
                                />
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

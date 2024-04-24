import React from 'react';
import { Button } from '../../components/Button'
import { Background, Container, Form } from './styles'
import { FiLock, FiMail  } from 'react-icons/fi'
import { Input } from '../../components/Input'

const SingIn: React.FC<{}> = () => {
    return (
        <>
            <Container>
                <Form>
                   <h1>Rocket Notes</h1>
                   <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                   <h2>Faça seu login</h2>
                   <Input 
                        placeholder="E-mail" 
                        type="text"
                        icon={FiMail}/>
                    <Input 
                        placeholder="Senha" 
                        type="password"
                        icon={FiLock}/>
                    <Button title="Entrar" loading={false} />
                    <a href="#"> 
                        Criar Conta
                    </a>
                </Form>
                <Background/>
            </Container>
        </>
    );   
}

export default SingIn;
import React from 'react';
import { Button } from '../../components/Button'
import { Background, Container, Form } from './styles'
import { FiLock, FiMail, FiUser  } from 'react-icons/fi'
import { Input } from '../../components/Input'

const SingUp: React.FC<{}> = () => {
    return (
        <>
            <Container>
                <Background/>
                <Form>
                   <h1>Rocket Notes</h1>
                   <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                   <h2>Crie sua conta</h2>
                   <Input 
                        placeholder="Nome" 
                        type="text"
                        icon={FiUser}/>
                   <Input 
                        placeholder="E-mail" 
                        type="text"
                        icon={FiMail}/>
                    <Input 
                        placeholder="Senha" 
                        type="password"
                        icon={FiLock}/>
                    <Button title="Cadastrar" loading={false} />
                    <a href="#"> 
                        Voltar para o login
                    </a>
                </Form>
            </Container>
        </>
    )
}

export default SingUp;
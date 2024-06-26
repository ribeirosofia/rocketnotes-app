import React from 'react';
import { Button } from '../../components/Button'
import { Avatar, Container, Form } from './styles'
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function Profile () {
    return(
        <>
        <Container>
            <header>
                <Link to="/">
                <FiArrowLeft />
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/ribeirosofia.png" 
                        alt="Foto do usuário" 
                    />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                        type="file" 
                        id="avatar" 
                        accept="image/*"
                        />
                    </label>
                </Avatar>
                <Input 
                    placeholder="Nome" 
                    type="text"
                    icon={FiUser}/>
                <Input 
                    placeholder="E-mail" 
                    type="text"
                    icon={FiMail}/>
                <Input 
                        placeholder="Senha atual" 
                        type="password"
                        icon={FiLock}/>
                <Input 
                        placeholder="Nova senha" 
                        type="password"
                        icon={FiLock}/>
                <Button title="Salvar" loading={false} />

            </Form>
        </Container>
        </>
    )
}

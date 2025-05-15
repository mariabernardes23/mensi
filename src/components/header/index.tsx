import { useState } from 'react';
import { ContainerHeader, Menu, ItensMenu } from '../style-components/header/style';
import { Link } from 'react-router-dom';
import styles from './style.module.css'
export function Header() {
    const [login, setLogin] = useState(false)

    function optionMenu() {
        if(!login) {
            return(
                <>
                    <ItensMenu> Sobre Nós </ItensMenu>
                    <ItensMenu> Recomendações </ItensMenu>
                    <ItensMenu> Nossos Tutores </ItensMenu>
                    <ItensMenu> Fale Conosco </ItensMenu>
                    <ItensMenu onClick={() => {setLogin(true)}}> Entar </ItensMenu>
                </>
            )
        } else {
            return(
                <>
                    <Link to={'/painel'} className={styles.styleLink}> <ItensMenu> Painel </ItensMenu> </Link>
                    <Link to={'/tutores'} className={styles.styleLink}> <ItensMenu> Tutores </ItensMenu> </Link>
                    <ItensMenu> Comunidade </ItensMenu>
                    <Link to={'/repositorio'} className={styles.styleLink}> <ItensMenu> Repósitorio </ItensMenu> </Link>
                    <ItensMenu onClick={() => {setLogin(false)}}> Minha Conta </ItensMenu>
                </>
            )
        }  
    }

    return(
        <ContainerHeader>
            <img src="../src/assets/img/logo2.png" alt=""  className={styles.logo}/>
            <Menu>
                {optionMenu()}
            </Menu>
        </ContainerHeader>
    )
}
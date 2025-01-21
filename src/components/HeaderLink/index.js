import { Link, useLocation } from 'react-router-dom';
import Button from '../Button'
import './HeaderLink.css'
import { GoHome } from "react-icons/go";
import { IoAddCircleOutline } from "react-icons/io5";


const HeaderLink = () => {
    const localizacao = useLocation();
    return (
        <>
            <Link
                to="/"
                className={`header__link ${localizacao.pathname === '/' ? 'active' : ''}`}
            >
                <Button
                    nome="HOME"
                    isActive={localizacao.pathname === '/'}
                >
                    <GoHome className='icon-home'/>
                </Button>
            </Link>
            <Link
                to="/novovideo"
                className={`header__link ${localizacao.pathname === '/novovideo' ? 'active' : ''}`}
            >
                <Button
                    nome="NOVO VÍDEO"
                    isActive={localizacao.pathname === '/novovideo'}
                >
                    <IoAddCircleOutline className='icon-add'/>
                </Button>
            </Link>
        </>
    )
}

export default HeaderLink;
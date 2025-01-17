import { Link, useLocation } from 'react-router-dom';
import Button from '../Button'
import './HeaderLink.css'


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
                />
            </Link>
            <Link
                to="/novovideo"
                className={`header__link ${localizacao.pathname === '/novovideo' ? 'active' : ''}`}
            >
                <Button
                    nome="NOVO VÍDEO"
                    isActive={localizacao.pathname === '/novovideo'}
                />
            </Link>
        </>
    )
}

export default HeaderLink;
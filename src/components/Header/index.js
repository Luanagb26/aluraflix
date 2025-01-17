import { Link } from 'react-router-dom';
import HeaderLink from '../HeaderLink';
import './Header.css'

const Header = () => {
    return (

        <header className='header'>
            <div className='header__container'>
                <img src="/assets/logo.svg" className='header__logo' alt="Logo da AluraFlix" />
                <div className='header__link__container'>
                   <HeaderLink/>
                </div>
            </div>

        </header>
    )
};

export default Header;
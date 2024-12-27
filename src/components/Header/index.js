import Button from '../Button';
import './Header.css'

const Header = () => {
    return(
        
        <header className='header'>
            <div className='header__container'>
                <img src="/assets/logo.svg" className='header__logo' alt="Logo da AluraFlix"/>
                <div className='button__container'>
                    <Button nome='HOME'/>
                    <Button nome='NOVO VÍDEO'/>
                </div>
            </div>
            
        </header>
    )
};

export default Header;
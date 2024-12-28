import './EditarCard.css'
import Button from '../Button'

const EditarCard = () => {
    return(
        <div>
            <div className='button__container'>
            <Button nome='SALVAR'/>
            <Button nome='LIMPAR'/>
            </div>
        </div>
    )
};

export default EditarCard;
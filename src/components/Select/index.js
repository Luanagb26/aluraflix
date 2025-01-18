import './Select.css';
import { categorias } from '../../context/categorias';

const Select = ({ value, onChange, children, placeholder,  colorFundo = `rgba(25, 25, 25, 1)`, colorBorda = `3px solid rgba(38, 38, 38, 1)` }) => {
    return (
        <div className="select">
            <label className="select__label">{children}</label>
            <select 
            defaultValue=""
            required
            style={{backgroundColor: `${colorFundo}`, border: `${colorBorda}`}}
            value={value}
            onChange={onChange}
            >
                <option value="" disabled>
                    {placeholder}
                </option>

                {categorias.map((categoria) => (
                    <option key={categoria.nome} value={categoria.nome}>
                        {categoria.nome}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select;
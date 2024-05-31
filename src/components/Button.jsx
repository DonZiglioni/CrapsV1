import React from 'react';
import '../components/Screens.css';

function Button({ label, selected, onSelect, }) {
    return (
        <li>
            {
                selected ?
                    <button className='selected' onClick={onSelect}>
                        {label}
                    </button>
                    :
                    <button className='radioButton' onClick={onSelect}>
                        {label}
                    </button>
            }
        </li>
    )
}

export default Button
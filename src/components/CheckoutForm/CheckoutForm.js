import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'bulma/css/bulma.css';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email,
        };
        onConfirm(userData);
    };

    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>
                <div className='field'>
                    <label className='label'>
                        Nombre
                        <div className='control'>
                            <input
                                className='input'
                                type='text'
                                value={name}
                                onChange={({ target }) => setName(target.value)}
                                placeholder='Ingrese su nombre'
                            />
                        </div>
                    </label>
                </div>
                <div className='field'>
                    <label className='label'>
                        Teléfono
                        <div className='control'>
                            <input
                                className='input'
                                type='text'
                                value={phone}
                                onChange={({ target }) => setPhone(target.value)}
                                placeholder='Ingrese su teléfono'
                            />
                        </div>
                    </label>
                </div>
                <div className='field'>
                    <label className='label'>
                        Email
                        <div className='control'>
                            <input
                                className='input'
                                type='email'
                                value={email}
                                onChange={({ target }) => setEmail(target.value)}
                                placeholder='Ingrese su email'
                            />
                        </div>
                    </label>
                </div>
                <div className='field'>
                    <div className='control'>
                        <button type='submit' className='button is-primary'>
                            Crear Orden
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
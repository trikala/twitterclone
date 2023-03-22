import React from 'react'
import './Button.css';

export function Button({ name, tag }) {
    return (
        <div>
            <div className='btn-cover'>
                <button className='btn-inside'><span className='sl'>{tag}</span><span className='sr'>{name}</span></button>
            </div>
        </div>
    )
}

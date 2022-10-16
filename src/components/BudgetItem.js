import React from 'react';
import './BudgetItem.css';

function BudgetItem(props) {
    return (
        <div className='item__container'>
            <div className='item__name'> {props.item} </div>
            <div className='item__price'> RM {props.amount} </div>
        </div>
    )
}

export default BudgetItem
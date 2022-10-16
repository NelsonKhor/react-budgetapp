import React, { useState } from 'react';
import './BudgetItem.css';

function BudgetItem(props) {
    const [itemName, setName] = useState(props.item);
    console.log('Expense evaluated by React')

    function changeName() {
        setName('Updated!');
        console.log(itemName);
    };

    return (
        <div>
            <div className='item__container'>
                <div className='item__name'> {itemName} </div>
                <div className='item__price'> RM {props.amount} </div>
            </div>
            <button onClick={ changeName }>Change Item</button>
        </div>
    )
}

export default BudgetItem
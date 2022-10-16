import React, { useState } from "react";
import './BudgetForm.css'

const BudgetForm = () => {
    const [enteredName, setEnterName] = useState('');
    const [enteredAmount, setEnterAmount] = useState('');

    function addItemName(event) {
        setEnterName(event.target.value);
    };

    function addItemAmount(event) {
        setEnterAmount(event.target.value);
    };

    return (
        <form>
            <div>
                <div className="input__container">
                    <label>Item Name: </label>
                    <input type='text' onChange={ addItemName } />
                </div>
                <div className="input__container">
                    <label>Item Price: </label>
                    <input type='number' min="0.01" step="0.01" onChange={ addItemAmount }/>
                </div>
            </div>
            <div className="button__container">
                <button type="submit">Add Item</button>
            </div>
        </form>
    )
}

export default BudgetForm
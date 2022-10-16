import React from 'react';
import BudgetItem from "./BudgetItem";

function BudgetList(props) {
    return (        
        <div>
            <BudgetItem 
                item={props.budgetData[0].item}
                amount={props.budgetData[0].amount}
            />
            <BudgetItem 
                item={props.budgetData[1].item}
                amount={props.budgetData[1].amount}
            />
            <BudgetItem
                item={props.budgetData[2].item}
                amount={props.budgetData[2].amount}
            />
        </div>
)}

export default BudgetList;
import "./ExpenseItem.css";
function ExpenseItem()
{
    const currentdate =new Date()

    return(
        <div className="expense-item">
            <div>
                {currentdate.toISOString()}
            </div>
            <div className="expense-item__description">
                <h2>Groceries</h2> 
            </div>
            <div className="expense-item__price">
                Amount
            </div>
        </div>
    )
}

export default ExpenseItem;
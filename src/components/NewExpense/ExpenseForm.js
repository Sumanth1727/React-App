
import "./ExpenseForm.css"
function ExpenseForm() {



    return(
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
             <label>Title</label>
             <input type="text" /> 
            </div>
            <div className="new-expense__control">
             <label>Expense</label>
             <input type="'number'" min="1" step="1" />
            </div>
            <div className="new-expense__control">
             <label>Date</label>
             <input type="date" min="2020-09-10" max="2021-08-10" />  
            </div>
        </div>
        <div className="new-expense__actions"><button type="submit">Add Expense</button></div>
        
    </form>
    );
};
export default ExpenseForm;
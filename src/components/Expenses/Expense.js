import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import Card from "../UI/Card";
function Expenses(props){
    const expense=props.items

    return (
        <Card className="expenses">
    <ExpenseItem title={expense[0].title}  amount={expense[0].amount} date={expense[0].date} ></ExpenseItem>
      <ExpenseItem title={expense[1].title}  amount={expense[1].amount} date={expense[1].date} ></ExpenseItem>
      <ExpenseItem title={expense[2].title}  amount={expense[2].amount} date={expense[2].date} ></ExpenseItem>
      </Card>
    );
}

export default Expenses
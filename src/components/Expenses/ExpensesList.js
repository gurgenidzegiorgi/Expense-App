import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
	if (props.filteredExpenses.length === 0) {
		return <h2 className="expenses-list__fallback">No expenses found!</h2>;
	}
	return (
		<ul className="expenses-list">
			{props.filteredExpenses.map((expense) => {
				return (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						date={expense.date}
						price={expense.amount}
					/>
				);
			})}
		</ul>
	);
}

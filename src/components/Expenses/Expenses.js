import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2020");
	function SelectedYearFilterHandler(selectedYear) {
		setFilteredYear(selectedYear);
	}
	const filteredExpense = props.expenses.filter((expense) => {
		return parseInt(expense.date.getFullYear()) === parseInt(filteredYear);
	});
	return (
		<Card className="expenses">
			<ExpenseFilter
				selectedYear={filteredYear}
				onSelectedYearFilter={SelectedYearFilterHandler}
			/>
			<ExpensesChart filterExpenses={filteredExpense} />
			<ExpensesList filteredExpenses={filteredExpense} />
		</Card>
	);
}

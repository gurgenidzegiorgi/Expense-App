import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

export default function NewExpense(props) {
	const [isEditing, setIsEditing] = useState(false);
	function saveExpenseDataHandler(enteredExpenseData) {
		const expenseData = {
			id: "e " + Math.random() * Math.random(),
			...enteredExpenseData,
		};
		props.onAddExpense(expenseData);
		setIsEditing(false);
	}

	function startEditing() {
		setIsEditing(true);
	}

	function stopEditing() {
		setIsEditing(false);
	}

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditing} type="submit">
					Add new Expense
				</button>
			)}
			{isEditing && (
				<ExpenseForm
					handleIsEditing={stopEditing}
					onSaveExpenseData={saveExpenseDataHandler}
				/>
			)}
		</div>
	);
}

import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	const handleTitleInput = (e) => {
		setTitle(e.target.value);
	};
	const handleAmountInput = (e) => {
		setAmount(e.target.value);
	};
	const handleDateInput = (e) => {
		setDate(e.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();
		const newExpense = {
			title: title,
			amount: +amount,
			date: new Date(date),
		};
		props.onSaveExpenseData(newExpense);
		setTitle("");
		setAmount("");
		setDate("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input value={title} onChange={handleTitleInput} type="text" />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						value={amount}
						onChange={handleAmountInput}
						type="number"
						min="0.1"
						step="0.1"
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						value={date}
						onChange={handleDateInput}
						type="date"
						min="2019-01-01"
						max="2022-12-31"
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={props.handleIsEditing} type="submit">
					Cencel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

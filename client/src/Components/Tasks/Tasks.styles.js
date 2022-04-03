import styled from "styled-components";

export const TasksStyles = styled.div`
	width: 100%;
	height: calc(100% - 66px - 24px);
	background-color: #f5f5f5;

	.taskCard {
		max-width: 90%;
		height: 180px;
		margin: 2rem;
		background-color: rgba(161, 159, 159, 0.925);
		display: flex;
		flex-flow: row;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
	}

	.card_title {
		width: 57%;
		height: 100%;
		text-align: center;
		margin: 1rem;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	.leftTaskDetails {
		width: 15%;
		height: 100%;
		margin-top: 0px;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
	}

	.card_due_date {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		margin-top: 0;
	}

	.taskDueLabel {
		width: 100%;
		text-align: center;
		color: white;
		font-size: 1.5rem;
		height: 20px;
	}

	.expense-date {
		display: flex;
		flex-direction: column;
		width: 8rem;
		height: 8rem;
		border: 1px solid red;
		// background-color: #2a2a2a;
		background-color: white;
		color: red;
		border-radius: 12px;
		align-items: center;
		justify-content: center;
		margin: 0;
	}
	.expense-date__month {
		font-size: 2rem;
		font-weight: bold;
	}
	.expense-date__year {
		font-size: 0.9rem;
	}
	.expense-date__day {
		font-size: 1.5rem;
		font-weight: bold;
	}

	.card_status {
		width: 100%;
		text-align: center;
		height: 20px;
		margin-top: 0;
		font-size: 1rem;
		color: white;
	}

	.rightTaskDetails {
		display: flex;
		flex-flow: row wrap;
		width: 20%;
		height: 100%;
		justify-content: center;
		align-items: center;
	}

	.deleteTaskButtonSection {
		width: 100%;
		height: 50px;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
	}

	.editTaskButtonSection {
		width: 100%;
		height: 50px;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
	}

	.evidenceSide {
		width: 10%;
		height: 100%;
	}

	.taskEvidence {
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: flex-start;
		margin-left: 0;
	}

	.taskEvidence a {
		text-decoration: none;
		font-size: 1rem;
		color: white;
	}

	.noTasks {
		font-size: 2.5rem;
		text-align: center;
		margin: 2rem;
	}
	.statusShower {
		border-radius: 20px;
		border: 1px solid #ff2626;
		background-color: #f5f5f5;
		color: black;
		font-size: 12px;
		font-weight: bold;
		padding: 12px 40px;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
`;


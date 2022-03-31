import { useState } from "react";


import "./MyPlan.css";
// import Card from "../../UI/Card/Card";

// Components
import Element from "../../Element/Element";
import Navbar from "../../Header/Navbar/Navbar";
import Tasks from "../../Tasks/Tasks";
import TaskForm from "../../TaskForm/TaskForm";
import PopUpForm from "../../Tasks/PopUpForm";
import Comment from "../../Mentors/GraduateList/Comment";

const MyPlan = ({ user_email }) => {
	const [elementTasksId, setElementTasksId] = useState(1);
	const [refresh, setRefresh] = useState(true);

	const [isOpen, setIsOpen] = useState(false);

	const [commentsOpen, setCommentsOpen] = useState(false);



	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	const toggleComments = () => {
		setCommentsOpen(!commentsOpen);
	};

	return (
		<>
			<Navbar graduateEmail={user_email} />
			<section className="gradPlanPage">
				<main role="main" className="elementsSection">
					<p className="elementsText">
						Welcome to your planning center, from here, you can view and add new
						tasks to be done.
					</p>
					<div >
						<button
							className="elementButton"
							onClick={() => setElementTasksId(1)}
						>
							<Element id={1} name={"Technical"} graduateEmail={user_email} />
						</button>
						<button
							className="elementButton"
							onClick={() => setElementTasksId(2)}
						>
							<Element id={2} name={"Job Search"} graduateEmail={user_email} />
						</button>
						<button
							className="elementButton"
							onClick={() => setElementTasksId(3)}
						>
							<Element id={3} name={"Soft Skills"} graduateEmail={user_email} />
						</button>
					</div>
				</main>
				<div className="tasksSection">
					<input
						type="button"
						className="addNewTaskButton"
						value="Add New Task"
						onClick={togglePopup}
					/>
					{isOpen && (
						<PopUpForm
							content={
								<>
									<b>Fill in task details</b>
									<TaskForm
										refreshFunc={() => setRefresh(!refresh)}
										addNewTaskForm={{
											taskTitle: "",
											userEmail: user_email,
											dueDate: "",
											evidence: "",
											elementId: elementTasksId,
											statusId: 1,
										}}
									/>
								</>
							}
							handleClose={togglePopup}
						/>
					)}
					<input
						type="button"
						className="btn btn-danger"
						value="View Feedback"
						onClick={toggleComments}
					/>
					{commentsOpen && (
						<PopUpForm
							content={
								<>
									<b>Mentor Feedback</b>
									<Comment
										refresh={refresh}
										refreshFunc={() => setRefresh(!refresh)}
										senderEmail={user_email}
										email={user_email}
										id={elementTasksId}
									/>
								</>
							}
							handleClose={toggleComments}
						/>
					)}
					<Tasks
						userEmail={user_email}
						elementId={elementTasksId}
						refresh={refresh}
						refreshFunc={() => setRefresh(!refresh)}
					/>
				</div>
			</section>
		</>
	);
};

export default MyPlan;

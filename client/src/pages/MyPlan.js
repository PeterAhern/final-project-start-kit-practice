import Card from "../Components/UI/Card/Card";
import Element from "../Components/Element/Element";
import "./MyPlan.css";
import Navbar from "../Components/Header/Navbar/Navbar";
const MyPlan = (props) => {
return (
	<>
		<Navbar />
		<main role="main">
			<Card>
				<h1>Home</h1>
				<p>
					Welcome to your planning center, from here, you can view and add new
					tasks to be done.
				</p>
				<h1>Elements to Success</h1>
				<div className="elements">
					<Element id={1} name={"Technical"} currUser={props.currUser} />
					<Element id={2} name={"Job Search"} currUser={props.currUser} />
					<Element id={3} name={"Soft Skills"} currUser={props.currUser} />
				</div>
			</Card>
		</main>
	</>
);
};

export default MyPlan;

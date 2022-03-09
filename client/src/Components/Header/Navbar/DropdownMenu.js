import classes from "./DropdownMenu.module.css";

import developmentIcon from "../../../Assets/svg/development.svg";
import logInOutSvg from "../../../Assets/svg/login-out.svg";
import Card from "../../UI/Card/Card";

// Component
import DropdownItem from "./DropdownItem";

const DropdownMenu = () => {
    return (
			<Card>
				<div className={classes.dropdown}>
						<DropdownItem href="/myPlan" leftIcon={developmentIcon}>
							My Profile
						</DropdownItem>
						<DropdownItem href="/" leftIcon={logInOutSvg}>
							SignOut
						</DropdownItem>
				</div>
			</Card>
		);
};

export default DropdownMenu;
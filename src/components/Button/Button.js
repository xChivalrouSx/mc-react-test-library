import React from "react";

const Button = ({ buttonStyles, buttonAttributes, type, text }) => {
	var bgColor = "#02a9fd";
	var color = "#ffffff";

	if (type === "hacker") {
		color = "#1ad70a";
		bgColor = "#000000";
	} else if (type === "giraffe") {
		color = "#000000";
		bgColor = "#e6b700";
	}

	if (buttonStyles !== undefined) {
		buttonStyles = { ...buttonStyles, padding: "5px", margin: "20px" };
	} else {
		buttonStyles = { padding: "5px", margin: "20px" };
	}

	buttonStyles = { ...buttonStyles, backgroundColor: bgColor, color: color };

	return (
		<button style={{ ...buttonStyles }} {...buttonAttributes}>
			{text}
		</button>
	);
};

export default Button;

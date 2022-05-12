import React from "react";

function Alert(props) {
	const captilizeFirstLetter = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	return (
		// if the alert is null then nothing will be display
		// if the alert is not null then display the alert
		props.alert && (
			<div
				className={`alert alert-${props.alert.type} alert-dismissible fade show`}
				role="alert"
			>
				<strong>{captilizeFirstLetter(props.alert.type)}</strong> :{" "}
				{props.alert.message}
				{/* <button
					type="button"
					className="btn-close"
					data-bs-dismiss="alert"
					aria-label="Close"
				></button> */}
			</div>
		)
	);
}

export default Alert;

import React, { useState } from "react";
export default function TextFrom(props) {
	const [Text, setText] = useState("");

	const onChangeHandler = (event) => {
		setText(event.target.value);
	};

	const handleUpperCase = () => {
		let newText = Text.toUpperCase();
		setText(newText);
		props.showAlert("Text is Uppercase", "success");
	};
	const handleClearText = () => {
		let newText = "";
		setText(newText);
		props.showAlert("Textbox is clear", "warning");
	};

	const handleLowerCase = () => {
		let newText = Text.toLowerCase();
		setText(newText);
		props.showAlert("Text is Lowercase", "success");
	};

	const handleCopyText = () => {
		let copyText = Text;
		navigator.clipboard.writeText(copyText);
		// console.log("copytext: " + copyText);
		// copyText = copyText.setSelectionRange(0, 99999);
		// alert("Copied the text: " + copyText);
		props.showAlert("Text is Copied", "success");
	};

	const removeSpaces = () => {
		let newText = Text.replace(/\s+/g, " ").trim();
		setText(newText);
		props.showAlert("Extra spaces are removed", "success");
	};
	return (
		<>
			<div className="container my-4">
				<h1>Enter the text and see the effect very soon </h1>
				<textarea
					rows={8}
					value={Text}
					className="w-100 p-2"
					onChange={onChangeHandler}
					placeholder="Starting typing here..."
					style={{
						backgroundColor: props.mode === "light" ? "#f7f7f7" : "#1f2937",
						color: props.mode === "light" ? "#1f2937" : "#f7f7f7",
					}}
				></textarea>
				<div className="my-2">
					<button className="btn btn-primary mx-1" onClick={handleUpperCase}>
						Convert To UpperCase
					</button>
					<button className="btn btn-primary mx-1" onClick={handleLowerCase}>
						Convert To LowerCase
					</button>
					<button className="btn btn-primary mx-1" onClick={handleClearText}>
						Clear Text
					</button>
					<button className="btn btn-primary mx-1" onClick={handleCopyText}>
						Copy
					</button>
					<button className="btn btn-primary mx-1" onClick={removeSpaces}>
						Remove Extra Spaces
					</button>
				</div>
			</div>
			<div className="container my-3">
				<h2>Text Summary: </h2>
				<p className="fs-5">
					🆎 Words:{" "}
					<span className="btn btn-secondary py-1 mx-2">
						{Text.split(" ").length - 1}
					</span>{" "}
				</p>
				<p className="fs-5">
					⛔ Characters:{" "}
					<span className="btn btn-secondary py-1 mx-2">{Text.length}</span>{" "}
				</p>
				<p className="fs-5">
					⏰ Reading Time:
					<span className="btn btn-secondary py-1 mx-2">
						{(0.008 * (Text.split(" ").length - 1) * 60).toFixed()} sec
					</span>
				</p>
				<h2>▶ Preview</h2>
				<p>{Text.length > 0 ? Text : "Enter something to preview here... "}</p>
			</div>
		</>
	);
}

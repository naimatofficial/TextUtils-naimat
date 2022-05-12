const a = "naimat";
const b = "ghufran";
const c = "Ahmed";
const d = "samad";

// default export write this ---
// in import file you will be able to create any type of name
export default c;

// but if you not export the variable or any type function as a default then you will write in paranthesis
// and import like this {a, b, d}
export { a };
export { b };
export { d };

export function numberValidator(input: string | undefined): boolean {
	if (input === null || input === undefined) return false;
	if (input === "") return false;
	const output = Number(input);
	if (isNaN(output)) return false;
	return true;
}

export function stringValidator(input: string | undefined): boolean {
	if (input === null || input === undefined) return false;
	if (input === "") return false;
	return true;
}

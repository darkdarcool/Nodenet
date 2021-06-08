function add(num1, num2) {
	return num1 + num2;
}
test('Returns add correctly', () => {
	expect(add(4, 5)).toBe(9)
});
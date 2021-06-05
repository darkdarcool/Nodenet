function add(num1, num2) {
	return num1 + num2;
}
test('my first test', () => {
	expect(add(3, 6)).toBe(9)
})
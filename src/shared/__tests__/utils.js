import { getFormattedValue } from "../utils";

test("format value test", () => {
	expect(getFormattedValue('1234.0')).toBe('1,234.0')
})

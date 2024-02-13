import { split } from "./01";

test('split into words should be correct', () => {
    //data
    const a = "Hello my friends";
    const b = "JS - is   the best";

    //action
    const result1 = split(a);
    const result2 = split(b);

    //expected result
    expect(result1.length).toBe(3);
    expect(result2.length).toBe(4);

})
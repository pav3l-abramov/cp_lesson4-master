import {MiniMaple} from "../src/miniMaple";

/*test('it fails', () => {
    expect(false).toBeTruthy();
}); */
test('x^2', () => {
    const foo = new MiniMaple('4*x^2+x^3-x','x');
    expect(foo.derivativeFunction()).toBe('8*x+3*x^2-1');
    const foo1 = new MiniMaple('4*x^2+x^3-x','y');
    expect(foo1.derivativeFunction()).toBe('');

})
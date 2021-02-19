import { render } from '../src';

test('normal', () => {
  expect(render(2)).toEqual(2);
});

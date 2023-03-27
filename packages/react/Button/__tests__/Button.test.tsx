import * as renderer from 'react-test-renderer';
import { Button } from '../Button';

// const propsToTest = {
//   label: 'Some button text',
//   view: ['outline', 'default', 'link', 'text'],
//   size: ['small', 'medium', 'large'],
// };
describe('Button component testing', () => {
  test('Button props', () => {
    const component = renderer.create(
      <Button size="medium" appearance="primary" label="Button" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

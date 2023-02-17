import * as renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button component testing', () => {
  test('Button props', () => {
    const component = renderer.create(
      <Button {...{ label: 'Some button text' }} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

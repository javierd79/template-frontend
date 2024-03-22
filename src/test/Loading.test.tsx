import renderer from 'react-test-renderer'
import Loading from '../components/Loading'

it('render loading component', () => {
  const component = renderer.create(
    <Loading
      withBorder
      message='Cargando'
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
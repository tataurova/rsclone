import * as React from 'react';
import * as renderer from 'react-test-renderer';
import AccountGithub from './account-github';

describe('<AccountGithub />', () => {
  it('Render AccountGithub', () => {
    const tree = renderer
      .create(<AccountGithub
                address={'test@test.ru'}
                author={'Test Test'}
            />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

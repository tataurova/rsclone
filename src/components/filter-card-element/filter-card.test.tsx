import * as React from 'react';
import * as renderer from 'react-test-renderer';
import FilterCard from './filter-card';
import { mockFunction } from '../../utils/common';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('<FilterCard />', () => {
  it('Render Header', () => {
    const tree = renderer
      .create(
                    <FilterCard
                        filterAge={mockFunction}
                        filterCity={mockFunction}
                    />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import { fireEvent, render, screen } from '../../../../../../tests';
import Filters from '../Filters';

describe('<Filters />', () => {
  const filter = 'category2';
  const handleFilter = jest.fn();
  const categories = [
    { title: 'Category 1', alias: 'category1' },
    { title: 'Category 2', alias: 'category2' },
    { title: 'Category 3', alias: 'category3' },
  ];

  it('Should render filter buttons correctly', () => {
    render(
      <Filters categories={categories} filter={filter} handleFilter={handleFilter} />
    );

    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
    expect(screen.getByText('Category 3')).toBeInTheDocument();
  });

  it('Should call handleFilter when a button is clicked', () => {
    render(
      <Filters
        categories={categories}
        filter={filter}
        handleFilter={handleFilter}
      />
    );

    fireEvent.click(screen.getByText('Category 1'));

    expect(handleFilter).toHaveBeenCalledWith(categories[0]);

    fireEvent.click(screen.getByText('Category 3'));

    expect(handleFilter).toHaveBeenCalledWith(categories[2]);
  });

  it('Should not render anything if categories array is empty', () => {
    const { container } = render(
      <Filters
        categories={[]}
        filter={filter}
        handleFilter={handleFilter}
      />
    );

    expect(container.firstChild).toBeNull();
  });
});

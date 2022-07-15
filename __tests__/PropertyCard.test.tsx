import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PropertyCard } from '../components/PropertyCard/PropertyCard';
import { propertyMock } from '../mocks/propertyMock';

describe('Property Card', () => {
  it('renders a property card', () => {
    render(<PropertyCard property={propertyMock} />);
    const propertyCardItems = screen.getByTestId('propertyCard');
    expect(propertyCardItems).toBeInTheDocument();
  });

  it('renders a header component if the property has one', () => {
    render(<PropertyCard property={propertyMock} />);
    const propertyCardItems = screen.getByTestId(
      'propertyCard-header'
    );
    expect(propertyCardItems).toBeInTheDocument();
  });

  it('doesn`t render a header component if the property has one', () => {
    const updated = {
      ...propertyMock,
      featuredProperty: false,
    };
    const { queryByTestId } = render(
      <PropertyCard property={updated} />
    );
    expect(queryByTestId(/propertyCard-header/i)).toBeNull();
  });

  it('renders a property info section', () => {
    render(<PropertyCard property={propertyMock} />);
    const propertyCardItems = screen.getByTestId('propertyCard-info');
    expect(propertyCardItems).toBeInTheDocument();
  });
});

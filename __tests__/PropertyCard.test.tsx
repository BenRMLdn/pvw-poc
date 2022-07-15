import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PropertyCard } from '../components/PropertyCard/PropertyCard';
import { propertyMock } from '../mocks/propertyMock';

describe('Property Card', () => {
  it('renders a property card', () => {
    render(<PropertyCard property={propertyMock} />);
    const propertyCardItems = screen.getByTestId('property-card');
    expect(propertyCardItems).toBeInTheDocument();
  });
});

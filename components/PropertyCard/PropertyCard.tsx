import { Property } from '../../types/properties';
import { PropertyCardFeatures } from './PropertyCardFeatures';
import { PropertyCardHeader } from './PropertyCardHeader';
import { PropertyCardImage } from './PropertyCardImage';
import { PropertyCardPrice } from './PropertyCardPrice';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = (propertyData: PropertyCardProps) => {
  console.log(propertyData);
  return (
    <div>
      {propertyData.property.featuredProperty && (
        <PropertyCardHeader heading={propertyData.property} />
      )}
      <PropertyCardImage />
      <PropertyCardPrice />
      <PropertyCardFeatures />
    </div>
  );
};

import classes from './PropertyCard.module.scss';
import { Property } from '../../types/properties';
import { PropertyCardFeatures } from './PropertyCardFeatures';
import { PropertyCardHeader } from './PropertyCardHeader';
import { PropertyCardImage } from './PropertyCardImage';
import { PropertyCardPrice } from './PropertyCardPrice';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className={classes.propertyCard__wrapper}>
      {property.featuredProperty && (
        <PropertyCardHeader heading={property.heading} />
      )}
      <PropertyCardImage />
      <PropertyCardPrice />
      <PropertyCardFeatures />
    </div>
  );
};

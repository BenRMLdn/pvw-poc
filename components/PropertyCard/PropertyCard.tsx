import { useContext } from 'react';
import ResponsiveContext from '../../store/ResponsiveContext';
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
  const { isDesktopOrLaptop } = useContext(ResponsiveContext);

  return (
    <div
      data-testid="propertyCard"
      className={
        isDesktopOrLaptop
          ? classes.propertyCard__wrapper__desktop
          : classes.propertyCard__wrapper__mobile
      }
    >
      {property.featuredProperty && (
        <PropertyCardHeader
          heading={property.heading}
          desktop={isDesktopOrLaptop}
        />
      )}
      <section className={classes.propertyCard__infoWrapper}>
        <section className={classes.propertyCard__infoWrapper__left}>
          <PropertyCardImage />
          <PropertyCardPrice />
        </section>
        <section className={classes.propertyCard__infoWrapper__right}>
          <PropertyCardFeatures />
        </section>
      </section>
    </div>
  );
};
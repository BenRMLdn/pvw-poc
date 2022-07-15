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
      <section
        className={classes.propertyCard__infoWrapper}
        data-testid="propertyCard-info"
      >
        <section className={classes.propertyCard__infoWrapper__left}>
          <section
            className={classes.propertyCard__infoWrapper__left__image}
          >
            {property.numberOfImages > 0 ? (
              <PropertyCardImage
                propertyImages={property.propertyImages}
                desktop={isDesktopOrLaptop}
              />
            ) : (
              'No Current Images'
            )}
          </section>
          <section
            className={classes.propertyCard__infoWrapper__left__price}
          >
            <PropertyCardPrice
              price={property.price}
              desktop={isDesktopOrLaptop}
            />
          </section>
        </section>
        <section className={classes.propertyCard__infoWrapper__right}>
          <PropertyCardFeatures
            displayAddress={property.displayAddress}
            propertySubType={property.propertySubType}
            bathrooms={property.bathrooms}
            bedrooms={property.bedrooms}
            summary={property.summary}
            addedOrReduced={property.addedOrReduced}
            customer={property.customer}
            firstVisable={property.firstVisibleDate}
            formattedBranchName={property.formattedBranchName}
            saved={property.saved}
            desktop={isDesktopOrLaptop}
          />
        </section>
      </section>
    </div>
  );
};

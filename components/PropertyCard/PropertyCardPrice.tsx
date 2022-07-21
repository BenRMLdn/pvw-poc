import { useContext } from 'react';
import ResponsiveContext from '../../store/ResponsiveContext';
import classes from './PropertyCardPrice.module.scss';
import { Price } from '../../types/properties';

interface PropertyCardPriceeProps {
  price: Price;
}

export const PropertyCardPrice = ({
  price,
}: PropertyCardPriceeProps) => {
  const { isDesktopOrLaptop } = useContext(ResponsiveContext);
  return (
    <section
      className={
        isDesktopOrLaptop
          ? classes.propertyCard__price__wrapper__desktop
          : classes.propertyCard__price__wrapper__mobile
      }
    >
      <p className={classes.propertyCard__price__display}>
        {price.displayPrices[0].displayPrice}
      </p>
      {price.displayPrices[0].displayPriceQualifier && (
        <p className={classes.propertyCard__price__info}>
          {price.displayPrices[0].displayPriceQualifier}
        </p>
      )}
    </section>
  );
};

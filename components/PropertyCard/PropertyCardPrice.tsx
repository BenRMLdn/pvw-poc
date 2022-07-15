import classes from './PropertyCardPrice.module.scss';
import { Price } from '../../types/properties';

interface PropertyCardPriceeProps {
  price: Price;
  desktop: boolean;
}

export const PropertyCardPrice = ({
  price,
  desktop,
}: PropertyCardPriceeProps) => {
  return (
    <section className={classes.propertyCard__price__wrapper}>
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

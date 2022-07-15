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
  return <div>{price.displayPrices[0].displayPrice}</div>;
};

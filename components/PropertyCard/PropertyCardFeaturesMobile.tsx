import Image from 'next/image';
import { Customer } from '../../types/properties';
import classes from './PropertyCardFeatures.module.scss';

interface PropertyCardFeaturesMobile {
  displayAddress: string;
  propertySubType: string;
  bathrooms: number;
  bedrooms: number;
  summary: string;
  addedOrReduced: string;
  customer: Customer;
  toggleShow?: () => void;
  toggleSave?: () => void;
  isHidden?: boolean;
  isSaved?: boolean;
}

export const PropertyCardFeaturesDMobile = ({
  displayAddress,
  propertySubType,
  bathrooms,
  bedrooms,
  addedOrReduced,
  customer,
  toggleShow,
  toggleSave,
  isHidden,
  isSaved,
}: PropertyCardFeaturesMobile) => {
  return (
    <section
      className={classes.propertyCard__features__mobile}
      data-testid="propertyCard-features"
      tabIndex={0}
    >
      <div className={classes.propertyCard__features__mobile__left}>
        <span
          className={classes.propertyCard__features__top__address}
          tabIndex={0}
        >
          {`${displayAddress.substring(0, 20)}...`}
        </span>
        <div>
          {propertySubType} | {bathrooms} | {bedrooms}
        </div>
        <div>{addedOrReduced}</div>
        <div>Call / Email Buttons</div>
      </div>
      <div className={classes.propertyCard__features__mobile__right}>
        <Image
          src={customer.brandPlusLogoUrl}
          alt={`${customer.brandTradingName} logo`}
          width={76}
          height={26}
        />
        <div>Save Button</div>
      </div>
    </section>
  );
};

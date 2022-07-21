import { Customer } from '../../types/properties';
import { PropertyCardCustomer } from './PropertyCardCustomer';
import { PropertyCardFeatures } from './PropertyCardFeatures';
import classes from './PropertyCardFeatures.module.scss';

interface PropertyCardFeaturesDeskop {
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

export const PropertyCardFeaturesDesktop = ({
  displayAddress,
  propertySubType,
  bathrooms,
  bedrooms,
  summary,
  addedOrReduced,
  customer,
  toggleShow,
  toggleSave,
  isHidden,
  isSaved,
}: PropertyCardFeaturesDeskop) => {
  return (
    <section
      className={classes.propertyCard__features__desktop}
      data-testid="propertyCard-features"
      tabIndex={0}
    >
      <div className={classes.propertyCard__features__top}>
        <p
          className={classes.propertyCard__features__top__address}
          tabIndex={0}
        >
          {displayAddress}
        </p>
        <button onClick={toggleShow}>
          {!isHidden ? 'X' : 'Show'}
        </button>
      </div>
      <div className={classes.propertyCard__features__mid}>
        <p tabIndex={0}>
          {propertySubType} | {bathrooms} | {bedrooms}
        </p>
        <p tabIndex={0}>{summary}</p>
        <p tabIndex={0}>{addedOrReduced}</p>
      </div>
      <div className={classes.propertyCard__features__bottom}>
        <PropertyCardCustomer customer={customer} />
        <button onClick={toggleSave}>
          {isSaved ? 'saved' : 'save'}
        </button>
      </div>
    </section>
  );
};

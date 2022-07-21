import classes from './PropertyCardFeatures.module.scss';
import { Customer } from '../../types/properties';
import { useState } from 'react';
import { PropertyCardCustomer } from './PropertyCardCustomer';
interface PropertyCardFeatures {
  displayAddress: string;
  propertySubType: string;
  bathrooms: number;
  bedrooms: number;
  summary: string;
  addedOrReduced: string;
  customer: Customer;
  firstVisable: string;
  formattedBranchName: string;
  saved: boolean;
  desktop: boolean;
}

export const PropertyCardFeatures = ({
  displayAddress,
  propertySubType,
  bathrooms,
  bedrooms,
  summary,
  addedOrReduced,
  customer,
  firstVisable,
  formattedBranchName,
  saved,
  desktop,
}: PropertyCardFeatures) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isSaved, setIsSaved] = useState(saved);

  const toggleShow = () => {
    setIsHidden((isHidden) => !isHidden);
  };

  const toggleSave = () => {
    setIsSaved((isSaved) => !isSaved);
  };

  return (
    <section
      className={classes.propertyCard__features__wrapper}
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
        {desktop && (
          <button onClick={toggleShow}>
            {!isHidden ? 'X' : 'Show'}
          </button>
        )}
      </div>
      <div className={classes.propertyCard__features__mid}>
        <p tabIndex={0}>
          {propertySubType} | {bathrooms} | {bedrooms}
        </p>
        {desktop && <p tabIndex={0}>{summary}</p>}
        <p tabIndex={0}>{addedOrReduced}</p>
      </div>
      <div className={classes.propertyCard__features__bottom}>
        <PropertyCardCustomer customer={customer} />
        {desktop && (
          <button onClick={toggleSave}>
            {isSaved ? 'saved' : 'save'}
          </button>
        )}
      </div>
    </section>
  );
};

import ResponsiveContext from '../../store/ResponsiveContext';
import { Customer } from '../../types/properties';
import { useContext, useState } from 'react';
import { PropertyCardFeaturesDesktop } from './PropertyCardFeaturesDesktop';
import { PropertyCardFeaturesDMobile } from './PropertyCardFeaturesMobile';

interface PropertyCardFeatures {
  displayAddress: string;
  propertySubType: string;
  bathrooms: number;
  bedrooms: number;
  summary: string;
  addedOrReduced: string;
  customer: Customer;
  saved: boolean;
  toggleShow?: () => void;
  toggleSave?: () => void;
  isHidden?: boolean;
  isSaved?: boolean;
  featuredProperty: boolean;
}

export const PropertyCardFeatures = ({
  displayAddress,
  propertySubType,
  bathrooms,
  bedrooms,
  summary,
  addedOrReduced,
  customer,
  saved,
  featuredProperty,
}: PropertyCardFeatures) => {
  const { isDesktopOrLaptop } = useContext(ResponsiveContext);
  const [isHidden, setIsHidden] = useState(false);
  const [isSaved, setIsSaved] = useState(saved);

  const toggleShow = () => {
    setIsHidden((isHidden) => !isHidden);
  };

  const toggleSave = () => {
    setIsSaved((isSaved) => !isSaved);
  };

  return isDesktopOrLaptop ? (
    <PropertyCardFeaturesDesktop
      displayAddress={displayAddress}
      propertySubType={propertySubType}
      bathrooms={bathrooms}
      bedrooms={bedrooms}
      summary={summary}
      addedOrReduced={addedOrReduced}
      customer={customer}
      isHidden={isHidden}
      isSaved={isSaved}
      toggleSave={toggleSave}
      toggleShow={toggleShow}
      featuredProperty={featuredProperty}
    />
  ) : (
    <PropertyCardFeaturesDMobile
      displayAddress={displayAddress}
      propertySubType={propertySubType}
      bathrooms={bathrooms}
      bedrooms={bedrooms}
      summary={summary}
      addedOrReduced={addedOrReduced}
      customer={customer}
      isHidden={isHidden}
      isSaved={isSaved}
      toggleSave={toggleSave}
      toggleShow={toggleShow}
    />
  );
};

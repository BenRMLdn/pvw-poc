import Image from 'next/image';
import { Customer } from '../../types/properties';
import classes from './PropertyCardFeatures.module.scss';
import {
  PhoneIcon,
  MailIcon,
  HeartIcon,
} from 'kanso-react/lib/ssr/components/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          {`${displayAddress.substring(0, 30)}...`}
        </span>
        <div>
          {propertySubType} |{' '}
          <FontAwesomeIcon icon={['fas', 'bed']} /> {bedrooms} |{' '}
          <FontAwesomeIcon icon={['fas', 'bath']} /> {bathrooms}
        </div>
        <div>{addedOrReduced}</div>
        <div
          className={classes.propertyCard__features__top__contacts}
        >
          <a
            className={
              classes.propertyCard__features__top__contacts__icon
            }
            href={`tel:${customer.contactTelephone}`}
          >
            <PhoneIcon title="Click to call an agent" /> Call
          </a>
          <div
            className={
              classes.propertyCard__features__top__contacts__icon
            }
          >
            <MailIcon title="Click to email an agent" /> Contact
          </div>
        </div>
      </div>
      <div className={classes.propertyCard__features__mobile__right}>
        <Image
          src={customer.brandPlusLogoUrl}
          alt={`${customer.brandTradingName} logo`}
          width={76}
          height={26}
        />
        <button
          onClick={toggleSave}
          className={
            classes.propertyCard__features__mobile__right__save
          }
        >
          <HeartIcon title="Save this property" />{' '}
          {!isSaved ? 'Save' : 'Saved'}
        </button>
      </div>
    </section>
  );
};

import Image from 'next/image';
import { Customer } from '../../types/properties';
import classes from './PropertyCardCustomer.module.scss';
import { MailIcon } from 'kanso-react/lib/ssr/components/icons';

interface PropertyCardCustomerProps {
  customer: Customer;
}

export const PropertyCardCustomer = ({
  customer,
}: PropertyCardCustomerProps) => {
  return (
    <div
      className={classes.propertyCard__customer__wrapper}
      data-testid="propertyCard-customer"
      tabIndex={0}
    >
      <Image
        src={customer.brandPlusLogoUrl}
        alt={`${customer.brandTradingName} logo`}
        width={76}
        height={26}
      />
      <a href={`tel:${customer.contactTelephone}`}>
        {customer.contactTelephone}
      </a>
      <p className={classes.propertyCard__customer__email}>
        <MailIcon title="Click to email an agent" /> Contact
      </p>
    </div>
  );
};

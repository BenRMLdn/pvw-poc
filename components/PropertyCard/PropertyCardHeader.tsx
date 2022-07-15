import classes from './PropertyCardHeader.module.scss';

interface PropertyCardHeaderProps {
  heading: string;
  desktop: boolean;
}

export const PropertyCardHeader = ({
  heading,
  desktop,
}: PropertyCardHeaderProps) => {
  return (
    <div
      className={
        desktop ? classes.header__desktop : classes.header__mobile
      }
      data-testid="propertyCard-header"
    >
      {heading}
    </div>
  );
};

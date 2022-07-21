import { useContext } from 'react';
import ResponsiveContext from '../../store/ResponsiveContext';
import classes from './PropertyCardHeader.module.scss';

interface PropertyCardHeaderProps {
  heading: string;
}

export const PropertyCardHeader = ({
  heading,
}: PropertyCardHeaderProps) => {
  const { isDesktopOrLaptop } = useContext(ResponsiveContext);

  return (
    <div
      className={
        isDesktopOrLaptop
          ? classes.header__desktop
          : classes.header__mobile
      }
      data-testid="propertyCard-header"
      tabIndex={0}
    >
      {heading}
    </div>
  );
};

import classes from './PropertyCardImage.module.scss';
import Image from 'next/image';
import { PropertyImages } from '../../types/properties';
import { useContext } from 'react';
import ResponsiveContext from '../../store/ResponsiveContext';

interface PropertyCardImageProps {
  propertyImages: PropertyImages;
}

export const PropertyCardImage = ({
  propertyImages,
}: PropertyCardImageProps) => {
  const { isDesktopOrLaptop } = useContext(ResponsiveContext);
  return (
    <div
      className={
        isDesktopOrLaptop
          ? classes.propertyCard__image__wrapper__desktop
          : classes.propertyCard__image__wrapper__mobile
      }
      data-testid="propertyCard-image"
      tabIndex={0}
    >
      <Image
        className={classes.propertyCard__image__rounded}
        src={
          propertyImages.mainImageSrc
            ? propertyImages.mainImageSrc
            : propertyImages.images[0].srcUrl
        }
        alt="main property image"
        width={isDesktopOrLaptop ? 267 : 388}
        height={isDesktopOrLaptop ? 186 : 258}
        aria-label="main property image"
      />
      {isDesktopOrLaptop && (
        <Image
          src={
            propertyImages.mainImageSrc
              ? propertyImages.images[1].srcUrl
              : propertyImages.images[1].srcUrl
          }
          alt="main property image"
          width={267}
          height={186}
          aria-label="main property image"
        />
      )}
    </div>
  );
};

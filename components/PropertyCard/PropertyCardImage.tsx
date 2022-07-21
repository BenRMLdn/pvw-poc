import classes from './PropertyCardImage.module.scss';
import Image from 'next/image';
import { PropertyImages } from '../../types/properties';

interface PropertyCardImageProps {
  propertyImages: PropertyImages;
  desktop: boolean;
}

export const PropertyCardImage = ({
  propertyImages,
  desktop,
}: PropertyCardImageProps) => {
  return (
    <div
      className={
        desktop
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
        width={desktop ? 267 : 1000}
        height={desktop ? 186 : 600}
        aria-label="main property image"
      />
      {desktop && (
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

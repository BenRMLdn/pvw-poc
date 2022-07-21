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
      className={classes.propertyCard__image__wrapper}
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
        width={267}
        height={186}
        aria-label="main property image"
      />
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
    </div>
  );
};

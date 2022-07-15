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
    <Image
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
  );
};

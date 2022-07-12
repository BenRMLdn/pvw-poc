import { Property } from '../../types/properties';

interface PropertyCardHeaderProps {
  heading: string;
}

export const PropertyCardHeader = ({
  heading,
}: PropertyCardHeaderProps) => {
  return <div>{heading}</div>;
};

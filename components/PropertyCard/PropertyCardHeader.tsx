import { Property } from '../../types/properties';

interface PropertyCardHeaderProps {
  heading: Property;
}

export const PropertyCardHeader = (
  props: PropertyCardHeaderProps
) => {
  return <div>{props.heading.heading}</div>;
};

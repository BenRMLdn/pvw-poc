import { getPVAResults } from '../helpers/api-util';
import styles from '../styles/Home.module.scss';
import { Property } from '../types/properties';
import { PropertyCard } from '../components/PropertyCard/PropertyCard';

interface PropertyProps {
  properties: Property[];
}

const Home = (props: PropertyProps) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        Property cards using the PVA results rest endpoint, using
        NextJS out of the box
        <ul>
          {props.properties.map((propertyData, idx) => {
            return (
              <li key={idx}>
                <PropertyCard property={propertyData} />
              </li>
            );
          })}
        </ul>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export const getStaticProps = async () => {
  const properties: Property[] = await getPVAResults();
  return {
    props: {
      properties,
    },
  };
};

export default Home;

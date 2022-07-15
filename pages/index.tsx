import Head from 'next/head';
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
        <ul>
          {props.properties.map((item) => {
            return (
              <li key={item.id}>
                <PropertyCard property={item} />
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
    revalidate: 60,
  };
};

export default Home;

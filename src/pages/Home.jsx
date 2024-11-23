import { Container, CountryList, Heading, Loader, Section } from 'components';
import useFetchCountries from '../hooks/useFetchCountries';

const Home = () => {
  const { countries, isLoading, error } = useFetchCountries();
  return (
    <Section>
      <Container>
        {countries.length > 0 && <CountryList countries={countries} />}
        {isLoading && <Loader />}
        {error && <Heading title="Something went wrong" bottom />}
      </Container>
    </Section>
  );
};

export default Home;

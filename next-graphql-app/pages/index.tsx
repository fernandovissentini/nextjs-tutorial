import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useQuery} from "@apollo/client";
import QUERY_COUNTRIES from './queries/CountriesQuery.graphql'

export default function Home() {
  const {data, loading, error} = useQuery(QUERY_COUNTRIES);
  if (error) {
    return <p>An Error happened: {error.message}</p>
  }
  if (loading) {
    return 'Loading...';
  }
  const sortedCountries = [...data.countries].sort((a: any, b: any) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })
  return (
      <div className={styles.container}>
        <Head>
          <title>Contries GraphQL</title>
          <link rel='icon' href='/favicon.ico'/>
        </Head>
        <h1>Countries</h1>
        <div>
          <table border="1">
            <thead>
            <th>
              Flag
            </th>
            <th>
              Name
            </th>
            <th>
              Capital
            </th>
            <th>
              Continent
            </th>
            <th>
              Languages
            </th>
            </thead>
            <tbody>
            {
              sortedCountries.map((country: any) => (
                  <tr>
                    <td>{country.emoji}</td>
                    <td>{country.name}</td>
                    <td>{country.capital}</td>
                    <td>{country.continent.name}</td>
                    <td>{country.languages.map((language: any) => ` ${language.name} `)}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}

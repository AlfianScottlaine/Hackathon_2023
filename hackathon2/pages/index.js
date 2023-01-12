import Head from 'next/head';
import Header from '../components/Header';
import AppWidget from '../components/AppWidget';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CaRent</title>
        <meta name="description" content="Rent A Car" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/CaRentLogo.png" />
      </Head>

      <main>
        <Header />

        <SearchBar />

        <AppWidget />
      </main>
    </div>
  );
}

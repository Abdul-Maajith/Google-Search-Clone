import Head from 'next/head';
import Header from "../components/Header"
import { API_KEY, CONTEXT_KEY } from "../keys"
import Response from "../Response"
import { useRouter } from "next/router"
import SearchResults from "../components/SearchResults"

const Search = ({ results }) => {
    const router = useRouter();
    console.log(results)
    
    return (
        <>
        <div>
          <Head>
            <title>{router.query.term} - Google Search</title>
            <link rel="icon" href="/favicon.ico"/>
          </Head>
        </div>

        {/* Header */}
        <Header />

        {/* Search Results */}
        <SearchResults results={results}/>

        </>
    );
}

export default Search;

// In Order to use Server-side rendering, we must use=>

export async function getServerSideProps(context) {
   const useDummyData = true;
   const startIndex = context.query.start || "0";

   const data = useDummyData
   ? Response
   : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
   .then(res => res.json());

   //After the SERVER has rendered... Pass the results to the client..
   return {
    props: {
      results: data
    }
   }
}

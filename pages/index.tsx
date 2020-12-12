import Head from 'next/head';
import { ChangeEvent, MouseEvent, useCallback, useReducer } from 'react';
import Navbar from '../components/organisms/Navbar';
import Main from '../components/organisms/Main';
import Footer from '../components/organisms/Footer';
import reducer, { initialStateWithServerData } from '../reducers/home';
import { FILTER_OPTIONS, IHomeActionTypes, IMainProps, SORT_OPTIONS } from '../types';

const Home = ({ filters, jobs }: IMainProps) => {
  const [state, dispatch] = useReducer(reducer, initialStateWithServerData({ filters, jobs }))
  console.log(state)
  const onClickEventDelegation = (event: MouseEvent<HTMLElement>) => {
    const eventTarget = event.target as HTMLElement;
    const filterOption = eventTarget.closest('[data-filter-type]') as (HTMLElement | null);
    const sortOption = eventTarget.closest('[data-sort-option]') as (HTMLElement | null);
    if(filterOption) {
      const { filterType, filterKey } = filterOption.dataset;
      dispatch({
        type: IHomeActionTypes.TOGGLE_FILTER_OPTION,
        payload: { filterKey, filterType: filterType as FILTER_OPTIONS }
      })
    } else if(sortOption) {
      console.log(sortOption.dataset)
      dispatch({
        type: IHomeActionTypes.TOGGLE_SORT_OPTION,
        payload: { option: sortOption.dataset['sortOption'] as SORT_OPTIONS }
      })
    }
  }


  const onSearchTextChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: IHomeActionTypes.SEARCH_QUERY_CHANGE,
      payload: { searchText: event.currentTarget.value }
    })
  }, [dispatch])
  return (
    <div
      className='font-mono flex flex-col w-screen bg-gray-50 m-h-full'
      onClick={onClickEventDelegation}
    >
      <Head>
        <title>Clipboard Health</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main
        {...state}
        onSearchTextChange={onSearchTextChange}
      />
      <Footer />
    </div>
  )
}

const callAPI = async (url: string) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export const getStaticProps = async () => {
  const response = await Promise.all([
    callAPI(`${process.env.API_URL}/api/filters`),
    callAPI(`${process.env.API_URL}/api/jobs`)
  ])
  return { props: {
    filters: response[0],
    jobs: response[1]
  }};
}

export default Home;

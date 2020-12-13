import Head from 'next/head';
import { ChangeEvent, MouseEvent, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import reducer, { initialStateWithServerData } from '../reducers/home';
import { FILTER_OPTIONS, IHomeActionTypes, IMainProps, SORT_OPTIONS } from '../types';
import throttle from '../helpers/throttle';
import HomeAPI from '../services';

const Home = ({ filters, jobs }: IMainProps) => {

  const [state, dispatch] = useReducer(reducer, initialStateWithServerData({ filters, jobs }))

  const searchTermRef = useRef('')

  const throttleFunc = useMemo(() => throttle(({
    sortOptions, filters, searchText
  }) => {
    (async function() {
      try {
        const response = await HomeAPI.getJobs({sortOptions,filters,searchText})
        // current searchterm is evaluated with server responses search term.
        if(response.search_text === searchText) {
          dispatch({
            type: IHomeActionTypes.LOADING_DONE,
            payload: { data: response.jobs }
          })
        }
      } catch(err) {
        dispatch({
          type: IHomeActionTypes.LOADING_ERROR
        })
      }
    })()
  }, 1000), [searchTermRef])

  useEffect(() => {
    if(state.isLoading) {
      const { filters, sortOptions, searchText } = state;
      searchTermRef.current = searchText;
      throttleFunc({
        sortOptions, filters, searchText
      })
    }
  }, [state.isLoading, state.searchText, state.sortOptions, state.filters, throttleFunc, searchTermRef, dispatch])

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

Home.getInitialProps = async ({ req: { headers: { host }} }) => {
  const response = await Promise.all([
    HomeAPI.getFilters(),
    HomeAPI.getJobs()
  ])
  return {
    filters: response[0],
    jobs: response[1].jobs
  };
}

export default Home;
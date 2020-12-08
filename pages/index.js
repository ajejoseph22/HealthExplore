import Head from 'next/head'
import styles from '../styles/Home.module.css'

import * as config from '../config';

import * as Actions from '../actions';
import { useState } from 'react-redux';

import LeftSidebar from '../components/LeftSidebar';
import Search from '../components/Search';

export async function getStaticProps() {
  let filters = {};
  try {
    const result = await fetch(`${config.server}/api/filters`);
    filters = await result.json();
    // console.log(filters);
  } catch (exc) {
    console.log(exc);
  }
  return {
    props: {
      initialReduxState: {
        filters,
        jobs: [],
        ui: {
          searchText: '',
          activeFilters: {},
          queryModifiers: {
            location: '',
            role: '',
            department: '',
            education: '',
            experience: ''
          }
        }
      }
    }
  };
}

export default function Home({ initialReduxState }) {
  return (
    <div>
      <Search />
      <LeftSidebar />
    </div>
  )
}

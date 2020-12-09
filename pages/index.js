import Head from 'next/head'
import styles from '../styles/Home.module.css'
import commonStyles from '../styles/Commons.module.css';

import * as config from '../config';

import LeftSidebar from '../components/LeftSidebar';
import Search from '../components/Search';

import { Collapse, Dropdown, Menu } from 'antd';
import JobsHeader from '../components/JobsHeader';
import JobsListings from '../components/JobsListings';

import { fetchFilters } from '../actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


export async function getStaticProps() {

  return {
    props: {
      initialReduxState: {
        filters: {},
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  return (
    <div className={commonStyles.jobsWrapper}>
      <Search />
      <div className={commonStyles.jobsContentWrapper}>
          <div className={`${commonStyles.leftJobPanel} ${commonStyles.active}`}>
            <LeftSidebar />
          </div>
          <div className={`${commonStyles.rightJobPanel} ${commonStyles.boxShadow}`}>
              <div className={commonStyles.rightPanel__header}>
                <JobsHeader />
              </div>
              <div className={commonStyles.jobsListings}>
                 <JobsListings />
              </div>
          </div>
      </div>
    </div>
  )
}


class ParentComp {

}

class smallComp {
  state = {
    isLoading: true
  }

}
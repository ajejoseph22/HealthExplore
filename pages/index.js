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
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { notification } from 'antd';


export async function getStaticProps() {

  return {
    props: {
      initialReduxState: {
        filters: {},
        jobs: [],
        ui: {
          jobsLoading: false,
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
  const [showSidebar, setShowSidebar] = useState(false);
  const jobsLoading = useSelector(state => state.ui.jobsLoading)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  useEffect(() => {
    if (jobsLoading) {
      notification.info({
        key: 'jobs-loading',
        message: 'Loading...',
      });
    } else {
      notification.close('jobs-loading');
    }
  }, [jobsLoading])

  return (
    <div className={commonStyles.jobsWrapper}>
      <Search setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div className={commonStyles.jobsContentWrapper}>
          <div className={`${commonStyles.leftJobPanel} ${showSidebar ? commonStyles.active: ''}`}>
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

import * as Actions from '../actions';
import { useDispatch, useSelector, useState } from 'react-redux';
import { useEffect } from 'react';
import { searchForJobsUsingSagas } from '../actions';
import commonStyles from '../styles/Commons.module.css';

import { Collapse, Dropdown, Menu } from 'antd';
const { Panel } = Collapse;

export default function JobsListings() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchForJobsUsingSagas());
  }, []);

  const jobsData = useSelector(state => {
    return state.jobs;
  });

  function callback() {
    console.log('callback');
  }
  
  console.log('jobsData', jobsData);
  return (
    <>
        <Collapse onChange={callback} accordion>
          {jobsData && jobsData.map((job, index) => {
            return <Panel header={job.name} key={index + 1}>
            <Collapse defaultActiveKey="1" accordion>
              {job.items.map((item, itemIndex) => {
                return <Panel header={item.job_title} key={itemIndex + 1}>{item.job_title}</Panel>
              })}
            </Collapse>
          </Panel>
          })}
        </Collapse>
    </>
  );
};

import * as Actions from '../actions';
import { useDispatch, useSelector, useState } from 'react-redux';
import { useEffect } from 'react';
import { searchForJobsUsingSagas } from '../actions';
import commonStyles from '../styles/Commons.module.css';

import { Collapse, Dropdown, Menu, Button } from 'antd';
const { Panel } = Collapse;

function JobShortDescription(props) {
  return <div>
      <div className={commonStyles.job_title} >{props.item.job_title}</div>
      <div className={commonStyles.job_less_detail}>
        <span>{props.item.job_type}</span>
        <span>${props.item.salary_range[0]} - ${props.item.salary_range[1]} an hour</span>
        <span>{props.item.city}</span>
      </div>
  </div>; 
}

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
  
  // console.log('jobsData', jobsData);
  return (
    <>
        <Collapse 
          onChange={callback} 
          accordion 
          expandIcon={() => null}
        >
          {jobsData && jobsData.map((job, index) => {
            return <Panel header={<div style={{
              display: 'flex',
              padding: '4px',
              alignItems: 'center'
            }}>
              <div className={commonStyles.expandIcon}>{job.name.slice(0, 2).toUpperCase()}</div>
              <div style={{
                'paddingLeft': '8px',
                display: 'flex'
              }}>{job.name}</div>
              </div>} 
              key={index + 1}>
            <Collapse defaultActiveKey="1" accordion>
              {job.items.map((item, itemIndex) => {
                return <Panel showArrow={false} header={<JobShortDescription item={item}/>} key={itemIndex + 1}>
                  <div className={commonStyles.jobMoreDetails}>
                      <div className={commonStyles.jobDetailPanel}>
                          <div className={commonStyles.title}>Department</div>
                          <div className={commonStyles.rightData} >{item.department.join(", ")}</div>
                      </div>
                      <div className={commonStyles.jobDetailPanel}>
                          <div className={commonStyles.title}>Hours / shifts</div>
                          <div className={commonStyles.rightData} >{item.hours[0]} hours / {item.work_schedule}</div>
                      </div>
                      <div className={commonStyles.jobDetailPanel}>
                          <div className={commonStyles.title}>Summary</div>
                          <div className={commonStyles.rightData} >
                              <div>
                                {item.description}
                              </div>
                              <div>
                                <Button type="primary">Job details</Button>
                                <Button>Save job</Button>
                              </div>
                          </div>
                          
                      </div>
                  </div>
                </Panel>
              })}
            </Collapse>
          </Panel>
          })}
        </Collapse>
    </>
  );
};
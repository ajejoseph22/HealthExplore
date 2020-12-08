import commonStyles from '../styles/Commons.module.css';
import { Collapse, Dropdown, Menu } from 'antd';

import { useSelector } from 'react-redux';
import { useMemo } from 'react';

function menu(name) {
    return <Menu>
        <Menu.Item key="none">
        {name}
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="asc">
        Ascending
        </Menu.Item>
        <Menu.Item key="desc">
        Descending
        </Menu.Item>
    </Menu>;
}

export default function JobsHeader() {
    const jobs = useSelector(state => state.jobs);
    const jobsLength = useMemo(() => {
        let jobsLength = 0;
        for (let job of jobs) {
            if (job.items) {
                jobsLength += job.items.length;
            }
        }
        return jobsLength;
    }, [jobs])
    return (
        <>
        <div className={commonStyles.rightPanel__headerLeft}>{jobsLength} job postings</div>
        <div className={commonStyles.rightPanel__headerRight}>
          <span>Sort by:</span>
          <ul>
            <li>
              <Dropdown overlay={menu('Location')} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Location
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown overlay={menu('Role')} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Role
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown overlay={menu('Department')} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Department
                </a>
              </Dropdown>
            </li>
          </ul>
        </div>
        </>
    );
}
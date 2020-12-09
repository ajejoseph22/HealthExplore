import commonStyles from '../styles/Commons.module.css';
import { Collapse, Dropdown, Menu } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';


function menu(name, onClick) {
    return <Menu onClick={key => onClick(key)}>
        <Menu.Item key="none">
            <span className={commonStyles.dropdownFirstOption} >{name}</span>
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

import { setQueryModifiers } from '../actions';

function JobsHeaderItem({ sortOption }) {
    const dispatch = useDispatch();
    function onClick({ key }) {
        dispatch(setQueryModifiers(sortOption.key, key == "none" ? "" : key));
    }

    return (<li>
    <Dropdown overlay={menu(sortOption.key, onClick)} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {sortOption.value == "" ? sortOption.key : `${sortOption.key}(${sortOption.value})`}
      </a>
    </Dropdown>
  </li>);
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
    }, [jobs]);
    const queryModifiers = useSelector(state => state.ui.queryModifiers);

    return (
        <>
        <div className={commonStyles.rightPanel__headerLeft}>{jobsLength} job postings</div>
        <div className={commonStyles.rightPanel__headerRight}>
          <span>Sort by:</span>
          <ul>
              {Object.keys(queryModifiers).map(queryModifier => (<JobsHeaderItem key={queryModifier} sortOption={{
                  key: queryModifier,
                  value: queryModifiers[queryModifier]
              }}></JobsHeaderItem>))}
          </ul>
        </div>
        </>
    );
}
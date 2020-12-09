
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchText, searchJobsWithFilter, searchForJobsUsingSagas } from '../actions';
import _ from 'lodash';
import styles from '../styles/Commons.module.css';

import { MenuOutlined } from '@ant-design/icons';


export default function Search(props) {
    const searchText = useSelector(state => state.ui.searchText);
    const dispatch = useDispatch();
    function onChangeSearchText(e) {
        dispatch(setSearchText(e.target.value));
    }

    function onKeyDown(e) {
        if (e.key == 'Enter') {
            // do API call
            // dispatch(searchJobsWithFilter());
            dispatch(searchForJobsUsingSagas());
        }
    }
    function openMenu() {
        props.setShowSidebar(!props.showSidebar);
    }
    return <>
        <div className={styles.desktopHideMenuIcon} onClick={openMenu}><MenuOutlined /></div>
        <div className={styles.searchWrapper}>
            <input type="text" value={searchText} onChange={onChangeSearchText} onKeyDown={onKeyDown} placeholder={'search for any job, title, keywords or company'}></input>
            <span></span>
        </div>
    </>
};
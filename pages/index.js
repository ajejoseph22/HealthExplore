import React, { useState, useEffect } from 'react';

import { SearchBar, FilterBar, JobList } from '@/components/home';

import { getJobs, getFilters } from '@/app/api';

export async function getServerSideProps() {

	const filters = await getFilters();
	const jobs = await getJobs();

	// Pass data to the page via props
	return { props: { filters, jobs } }
}

export default ({ filters, jobs }) => {

	const onSearch = () => {

	}

	return (
		<div className="p-5">
      		<SearchBar onChange={onSearch} />
			<div className="flex mt-5 lg:space-x-4">
				<FilterBar filters={filters} />
				
			</div>
		</div>
	);

}
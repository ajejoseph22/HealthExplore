import { connect } from 'react-redux'
import { Creators } from '#/store/actions/jobs'
import Dashboard from './Dashboard'

const mapStateToProps = (state: Test.StoreState) => ({
  selectedFilters: state.jobs.selectedFilters,
  sort: state.jobs.sort,
  keyword: state.jobs.keyword
})

const mapDispatchToProps = {
  getJobs: Creators.getJobs
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

import { connect } from 'react-redux'
import { Creators } from '#/store/actions/jobs'
import JobList from './JobList'

const mapStateToProps = (state: Test.StoreState) => ({
  jobs: state.jobs.jobs,
  sort: state.jobs.sort
})

const mapDispatchToProps = {
  getFilters: Creators.getFilters,
  setFilter: Creators.setFilter,
  setSort: Creators.setSort
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList)

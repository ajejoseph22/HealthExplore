import { connect } from 'react-redux'
import { Creators } from '#/store/actions/jobs'
import Filters from './Filters'

const mapStateToProps = (state: Test.StoreState) => ({
  availableFilters: state.jobs.availableFilters,
  selectedFilters: state.jobs.selectedFilters
})

const mapDispatchToProps = {
  getFilters: Creators.getFilters,
  setFilter: Creators.setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)

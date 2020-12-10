import { connect } from 'react-redux'
import { Creators } from '#/store/actions/jobs'
import SearchBar from './SearchBar'

const mapStateToProps = (state: Test.StoreState) => ({
  keyword: state.jobs.keyword
})

const mapDispatchToProps = {
  setKeyword: (keyword) => Creators.updateStates({ keyword })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

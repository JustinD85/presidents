import React, { useEffect } from 'react'
import './App.css'
import PresidentsArea from './PresidentsArea'
import * as actions from './actions'
import { connect } from 'react-redux'

const App = ({ fetchPresidents }) => {
  useEffect(fetchPresidents, [])
  return (
    <div className="App">
      <PresidentsArea />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchPresidents: () => dispatch(actions.fetchPresident()),
})
export default connect(
  null,
  mapDispatchToProps,
)(App)

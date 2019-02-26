import React from 'react'
import { connect } from 'react-redux'


const PresidentsArea = ({ presidents }) => (
  <div>{presidents && presidents.map(president => <div key={president.toString()}> a Person</div>)}</div>
)

export const mapStateToProps = state => ({
  presidents: state.presidents,
})
export default connect(mapStateToProps)(PresidentsArea)

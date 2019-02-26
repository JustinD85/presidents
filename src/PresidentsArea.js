import React, { Fragment } from 'react'
import { connect } from 'react-redux'
const styles = {
  card: {
    margin: 120,
    background: 'lightgrey',
    padding: 10,
    borderRadius: 10,
  },
}
const PresidentsArea = ({ presidents, isLoading, hasErrored }) => {
  if (hasErrored) {
    return <h1 style={{ margin: '0 auto' }}>There is an error...</h1>
  } else if (presidents) {
    return (
      <div>
        {presidents.map(president => (
          <Fragment>
            <div style={styles.card}>
              <p>Order: {president.number}</p>
              <p>Name: {president.president}</p>
              <p>Birth: {president.birth_year}</p>
              <p>Death: {president.death_year}</p>
              <p>Took Office: {president.took_office}</p>
              <p>Left Office: {president.left_office}</p>
              <p>Affiliation: {president.party}</p>
            </div>
          </Fragment>
        ))}
      </div>
    )
  } else {
    return <h1 style={{ margin: '0 auto' }}>Loading please wait...</h1>
  }
}

export const mapStateToProps = state => ({
  presidents: state.presidents,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
})
export default connect(mapStateToProps)(PresidentsArea)

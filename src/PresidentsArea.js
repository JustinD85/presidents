import React, { Fragment } from 'react'
import { connect } from 'react-redux'
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    margin: 8,
    minWidth: 250,
    background: 'lightgrey',
    padding: 10,
    borderRadius: 10,
  },
  filter: {
    height: 100,
    margin: '0 auto',
  },
  loading: { margin: '0 auto' },
}
export const PresidentsArea = ({ presidents, hasErrored }) => {
  if (hasErrored) {
    return (
      <h1 className="error" style={{ margin: '0 auto' }}>
        There is an error...
      </h1>
    )
  } else if (presidents) {
    const ufilter = presidents.map(p => p.party)
    const list = ufilter.filter(
      (word, index) => ufilter.findIndex(iWord => iWord === word) === index,
    )
    return (
      <div className="presidents" style={styles.root}>
        <div style={styles.filter}>
          <select>
            {list.map(party => (
              <option>{party}</option>
            ))}
          </select>
        </div>
        {presidents.map(president => (
          <Fragment key={president.toString + 'key'}>
            <div style={styles.card} key={president.toString()}>
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
    return (
      <h1 className="loading" style={styles.loading}>
        Loading please wait...
      </h1>
    )
  }
}

export const mapStateToProps = state => ({
  presidents: state.presidents,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
})
export default connect(mapStateToProps)(PresidentsArea)

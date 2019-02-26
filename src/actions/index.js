import * as constants from '../constants'

export const setPresident = presidents => ({
  type: constants.SET_PRESIDENTS,
  presidents,
})
export const fetchPresident = () => ({
  type: constants.FETCH_PRESIDENTS,
})

export const isLoading = isLoading => ({
  type: constants.IS_LOADING,
  isLoading
})

export const hasErrored = hasErrored => ({
  type: constants.HAS_ERRORED,
  hasErrored
})

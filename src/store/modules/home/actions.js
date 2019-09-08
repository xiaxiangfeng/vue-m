import * as types from './mutation-types'

export default {
  showName ({ commit, state }, data) {
    commit(types.TEXT_NAME, data)
  }
}

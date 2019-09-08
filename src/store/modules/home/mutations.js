import * as types from './mutation-types'

export default {
  [types.TEXT_NAME] (state, data) {
    state.name = data
  }
}

import { ADD, MINUS, RESET } from '../constants/counter'

const INITIAL_STATE = {
  num: 0
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      }
    case RESET:
      return {
        ...state,
        num: action.payload
      }
    default:
      return state
  }
}

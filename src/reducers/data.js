import { RECEIVE_API_DATA, DELETE_DATA } from "../actions";

export default (state = [], { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      let arr = data.results.map(i => { return { name: i.name.first + ' ' + i.name.last, email: i.email, age: i.dob.age, nat: i.nat, url: i.picture.large } });
      return arr;

    case DELETE_DATA:
      return state.filter((i, j) => { return j !== state.length - 1 })

    default:
      return state;
  }
};
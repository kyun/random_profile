import { RECEIVE_API_DATA } from '../actions';

export default (state: any = {}, { type, data }: any) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};
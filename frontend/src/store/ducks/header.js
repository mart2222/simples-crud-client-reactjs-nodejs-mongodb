import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  changeTitle: ['title'],
});

export const HeaderTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  title: 'Início',
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_TITLE]: (state, { title }) => state.merge({ title }),
});

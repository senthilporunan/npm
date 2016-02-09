import { CALL_API, Schemas } from '../middleware/api'

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

export const LIST_PACKAGE = 'LIST_PACKAGE';
export const SEARCH_PACKAGE = 'SEARCH_PACKAGE';

function fetchUser() {
  return {
    [CALL_API]: {
      types: [ USER_REQUEST, USER_SUCCESS, USER_FAILURE ];
    }
  }
}

// Action
export function listPackage() {
  console.log('list all package');

  return {
    type: LIST_PACKAGE;
  }
}

export function searchPackage() {
  console.log('search package');

  return {
    type: SEARCH_PACKAGE;
  }
}

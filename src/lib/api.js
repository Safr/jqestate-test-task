import { request } from 'lib/helpers';

const LIMIT = 12;
const URL = 'https://api.jqestate.ru/v1/properties/country';
export default {
  getEstates: (page = 0) => {
    return request(
      'get',
      `${URL}?pagination[limit]=${LIMIT}&pagination[offset]=${page}`,
    );
  },
};

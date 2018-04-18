import moducks from '~/modules';
import { sagas as counter } from '~/modules/counter';

export default moducks.util.flattenSagas({
  counter,
});


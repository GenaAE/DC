import { Data } from './DataType';

type State = {
  investors: [] | Data[];
  savedInvestors: [] | Data[];
  error: undefined | string;
};

export default State;

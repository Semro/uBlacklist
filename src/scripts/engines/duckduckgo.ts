import {
  createActionDefault,
  createControlDefault,
  getEntriesDefault,
  getURLDefault,
} from '../content-handlers';

window.ubContentHandlers = {
  controlHandlers: [
    {
      createControl: createControlDefault('.js-search-filters', 'ub-control-web'),
    },
  ],
  entryHandlers: [
    {
      getEntries: getEntriesDefault('.result'),
      getURL: getURLDefault('> div.result__body > h2.result__title > a.result__a'),
      createAction: createActionDefault('', 'ub-action-web'),
    },
  ],
};

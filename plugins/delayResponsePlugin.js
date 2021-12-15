const { delay } = require('../utils/delayUtils');

const DELAY_IN_MS = 1200;

const delayResponsePlugin = {
  async serverWillStart() { },

  async requestDidStart(requestContext) {
    const { operationName, variables } = requestContext.request;
    console.log('REQUEST start', { operationName, variables });
    return {
      async willSendResponse(requestContext) {
        await delay(DELAY_IN_MS);
        console.log('REQUEST end', { operationName, variables });
      },

      async didEncounterErrors(requestContext) {
        console.error('### Errors', requestContext.errors);
      },
      
      // async responseForOperation(requestContext) {
      //   console.log('responseForOperation');
      // }
    };
  },
};

module.exports.delayResponsePlugin = delayResponsePlugin;

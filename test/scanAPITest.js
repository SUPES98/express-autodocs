const assert = require('chai').assert;
const getAllAPICalls = require('../helpers/getAllAPICalls');

describe('🔎 API Scan Test', function () {
  
  // GET API Test
  it('Scan GET API', function () {
    assert.deepEqual(getAllAPICalls('test/scanAPI_test_cases/getAPI.js','app','router')[0], {
      method: 'get',
      callName: '/item',
      params: {
        description: 'Returns An Item from database.',
        inputs: {
          itemid:'The id of the item.'
        },
        outputs: {}
      }
    })
  });
  // POST API Test
  it('Scan POST API',function (){
    assert.deepEqual(getAllAPICalls('test/scanAPI_test_cases/postAPI.js','app','router')[0], {
      method: 'post',
      callName: '/item',
      params: {
        description: 'Adds an item to the database.',
        inputs: {
          name:'The name of the item'
        },
        outputs: {
          itemid:'Returns the autogenerated ID of the item'
        }
      }
    })
  })
  // PUT API Test
  it('Scan PUT API',function (){
    assert.deepEqual(getAllAPICalls('test/scanAPI_test_cases/putAPI.js','app','router')[0], {
      method: 'put',
      callName: '/item',
      params: {
        description: 'Puts an item to the database.',
        inputs: {
          name:'The name of the item'
        },
        outputs: {
        }
      }
    })
  })
  // DELETE API Test
  it('Scan DELETE API',function (){
    assert.deepEqual(getAllAPICalls('test/scanAPI_test_cases/deleteAPI.js','app','router')[0], {
      method: 'delete',
      callName: '/item',
      params: {
        description: 'Deletes An Item from database.',
        inputs: {
          itemid:'The id of the item.'
        },
        outputs: {
        }
      }
    })
  })
});

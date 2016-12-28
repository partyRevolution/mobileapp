'use strict';
console.log('Loading function');

let doc = require('dynamodb-doc');
let dynamo = new doc.DynamoDB();

/**
 * Provide an event that contains the following keys:
 *
 *   - operation: one of the operations in the switch statement below
 *   - tableName: required for operations that interact with DynamoDB
 *   - payload: a parameter to pass to the operation being performed
 */
exports.handler = (event, context, callback) => {

    // TODO: Load nearby

    var spec = {
        "TableName" : "ddpParty",
        "Key" : {
            "beaconId" : parseInt(event.beaconId),
            "userId" : "" + event.userId
        }
    }
    dynamo.deleteItem(spec, function(err, data) {
        if (err) {
            console.error(err)
            callback("An error occurred")
        } else {
            callback(null, {ok:true})
        }
    });
};
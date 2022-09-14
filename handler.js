'use strict';

const AWS = require("aws-sdk");

module.exports.sendMessage = (event, context) => {
  const sendSMSPromise = new AWS.SNS()
    .publish({
      Message: 'Hi there!',
      PhoneNumber: '+38761xxxxx',
      MessageAttributes: {
        'AWS.SNS.SMS.SenderID': {
          DataType: 'String',
          StringValue: 'Sender'
        },
      },
  }).promise();

  sendSMSPromise
    .then((data) => {
      console.log("SMS successfully sent.", JSON.stringify(data));    
    })
    .catch((err) => {
      console.error(err, err.stack);
    });
};

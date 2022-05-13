# Message Sender

## Description

Automte SMS sending using Serverless, AWS Lambda, AWS SNS and AWS CloudBridge

## Table of Contents
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)

## Prerequisites

1. Export AWS Access Key and Secret on your macihne, if you don't have them exported.
2. Set AWS default region to `us-east-1`.
3. Install serverless globally `npm install -g serverless@1.8.3`.

## Installation

1. Fork repository
2. Clone repository to the local environment
3. Open repository and install `aws-sdk` using `npm install aws-sdk`.

## Usage

### Development 

1. Edit file with the wanted data (number to send, sender, message, rate, etc.)

2. Deploy your lambda to aws and see message on the number -`sls deploy`

3. Destroy your lambda -`sls remove --stage dev --region us-east-1`

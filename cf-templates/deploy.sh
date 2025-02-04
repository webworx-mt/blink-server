#!/bin/bash

# Deploy S3 Bucket
aws cloudformation deploy \
  --template-file s3-bucket.yaml \
  --stack-name blink-s3-bucket

# Deploy API Stack
aws cloudformation deploy \
  --template-file cf-api-stack.yml \
  --stack-name cf-api-stack \
  --parameter-overrides \
    KeyName=blink-server-key \
    SSLCertificateArn=arn:aws:acm:eu-west-1:390844761136:certificate/fe68aefc-8809-4898-9a9b-494fc88a3f8b

#!/bin/sh
configure_aws_cli(){
  aws --version
  aws configure set default.region $AWS_DEFAULT_REGION
  aws configure set default.output json
}

configure_aws_cli
aws ecs describe-clusters --cluster dev

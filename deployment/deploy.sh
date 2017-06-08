#!/bin/sh
configure_aws_cli(){
  aws --version
  aws configure set aws_access_key_id $aws_access_key_id
  aws configure set aws_secret_access_key $aws_secret_access_key
  aws configure set default.region $aws_default_region
  aws configure set default.output json
}

configure_aws_cli
aws ecs describe-clusters --cluster dev

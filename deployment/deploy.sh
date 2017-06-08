#!/bin/sh
configure_aws_cli(){
  aws --version
  aws configure set default.region ap-northeast-1
  aws configure set default.output json
}

configure_aws_cli
aws ecs describe-clusters



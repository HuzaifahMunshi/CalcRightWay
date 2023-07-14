import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambdalayer from 'aws-cdk-lib/aws-lambda'; 

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaLayerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const layer = new lambdalayer.LayerVersion(this, "LayerVersionCalc", {
      layerVersionName: "LambdaLayerCalc",
      code: lambdalayer.Code.fromAsset("./dist/layer"),
      compatibleRuntimes: [lambdalayer.Runtime.NODEJS_14_X]
    })
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'LambdaLayerQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}

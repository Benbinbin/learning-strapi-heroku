module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('B2_ID'),
        secretAccessKey: env('B2_KEY'),
        region: env('B2_REGION'),
        params: {
          Bucket: env('B2_BUCKET'),
        },
        endpoint: env('B2_ENDPOINT')
      },
    },
  },
});
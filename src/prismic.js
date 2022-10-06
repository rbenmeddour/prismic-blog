import * as prismic from '@prismicio/client';

export const repositoryName = 'ryn-blog';

export const client = prismic.createClient(repositoryName, {
  accessToken:
    'MC5ZejdSVWhFQUFDSUFpSzV3.VO-_ve-_ve-_vTXvv73vv71BQBtO77-9PAJD77-9C3nvv71G77-9Mu-_vQzvv70677-9Ve-_vXDvv70p',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: 'post',
      path: '/',
    },
  ],
});

# Website Code for https://abelldesign.co.uk

## Build Setup

Firstly, go get yourself a firebase account, and create a project. when you have your API Key, Auth Domain, and other setup information, come back here, you'll need them.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080. Feed your firebase auth information into this command.
npm run dev FIREBASE_API_KEY='YourApiKey' FIREBASE_AUTH_DOMAIN='your-website.firebaseapp.com' FIREBASE_DATABASE_URL='https://your-website.firebaseio.com' FIREBASE_PROJECT_ID='your-project-id' FIREBASE_STORAGE_BUCKET='your-website.appspot.com' FIREBASE_MESSAGING_SENDER_ID='123456789012'

# build for production with minification
npm run build FIREBASE_API_KEY='YourApiKey' FIREBASE_AUTH_DOMAIN='your-website.firebaseapp.com' FIREBASE_DATABASE_URL='https://your-website.firebaseio.com' FIREBASE_PROJECT_ID='your-project-id' FIREBASE_STORAGE_BUCKET='your-website.appspot.com' FIREBASE_MESSAGING_SENDER_ID='123456789012'

# build for production and view the bundle analyzer report
npm run build FIREBASE_API_KEY='YourApiKey' FIREBASE_AUTH_DOMAIN='your-website.firebaseapp.com' FIREBASE_DATABASE_URL='https://your-website.firebaseio.com' FIREBASE_PROJECT_ID='your-project-id' FIREBASE_STORAGE_BUCKET='your-website.appspot.com' FIREBASE_MESSAGING_SENDER_ID='123456789012' --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# gist-monitor
To test application on local machine follow the steps:
  1. pull down the *feature/express-implementation* branch of the project
  2. run *yarn install*
  3. insert your pipedrive key at *3rd line in index.js file*
  4. run yarn start

## Dockerization and deployment
The project uses gitHub actions where, with every *push* docker image is created and uploaded to the Hub.
The app is dockerized and uploaded to the google cloud platform.
The app does not have a front-end implementation and could not be deployed with google run.
The front end will be added in the future iterations of the app as well as more thorough pipedrive API calls.


<img width="1359" alt="Screenshot 2022-06-20 at 00 47 45" src="https://user-images.githubusercontent.com/74304890/174501825-a13c0baa-b84f-4921-823a-2641e0a0f4cb.png">


<img width="979" alt="Screenshot 2022-06-20 at 00 55 45" src="https://user-images.githubusercontent.com/74304890/174501855-428edf01-b07f-4010-89b3-2f847052c517.png">

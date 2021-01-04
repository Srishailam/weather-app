### Welcome to the Vroom Weather team!
We're not a real team, but if we were, this would be our front end code! We've created this application that has quite a few issues to fix. The application is just a homepage and a forecast page. The homepage shows the current weather, and the forecast shows the weather for the next few days, or it would, if it wasn't broken. We would like to see your solutions for the issues we've opened in this repository - they are intended to be clear, so if something seems like a trick, or it doesn't seem like there is enough information, please reach out to us!

This project resembles a project in its infancy, because it is. This means that the structure, architecture, or other conventions are fluid, and we will not be surprised to see changes, but we don't expect anything specific either. If you would find it easier to work with a different tool or pattern, feel free to implement it, but be prepared to justify your choice!

### Technical notes
Please place a .env file in the project's root directory.<br>
Use this file to add the API key for openweathermap. This project will need this key to function.<br>
You can get your own API key by signing up at https://openweathermap.org/api.

`npm start` runs both `server.js` and the react app that connects to it. `server.js` is a proxy server that essentially just forwards requests from the client to the openweathermap API. It is ugly and has some minor bugs right now, if you see a better way to do something feel free to modify this file. 

### Issues and Commits
Please try and work on one issue at a time.  
If you have multiple commits for one issue, please prefix them with the issue number.
For example: Issue #1 - my first commit for this issue.
When all issues are completed to the best of your ability, please open PR and let us know PR is ready for review.

### Setup
```
# clone repo
# cd into newly created directory
# add a .env file in this directory with API_KEY defined
# run the following commands

npm install
npm start

# app should open up on http://localhost:3000/
```

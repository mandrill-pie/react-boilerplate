# Expensify

## Git CLI
git init 										Create a new repo (run once)
git remote add origin url		Add link to remote branch (run once)
git status									View changes to code
git add . 									Add all modified status to staging area (to be commited)
git commit -m "message"			Create new commit (with files from staging area)
git push -u origin master		Initial push (run once)
git push										Normal push
git push heroku master			Normal push to different branch
git log											View recent commits

## npm CLI
npm ls											List local packages
npm install [package] 			Install [package] or all packages listed in package.json
npm update [--save]					Update local packages [and save version to package.json]

## WebPack scripts CLI
npm run build:prod					Build script for production
npm run build:dev						Build script for development
npm run dev-server					Start local server (webpack-dev-server)
npm run start								Start local "prod" server (node server/server.js)
npm run test								Start testing suite (jest)

## Firebase
.ref(path) 									Get reference to path
.ref(path).set(val) 				Set path to be val
.ref(path).remove() 				Remove path
.ref(path).push(val) 				Push val to path

## Heroku CLI
heroku open
heroku config
heroku config:set KEY=val
heroku config:unset KEY=val

## Tool Links
### Setting up nodejs with heroku cli
https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

## How React flow works
1. Component calls action generator (actions)
2. Action generator (actions) returns Object (type: ACTION, [...]) or Function (in the case of Firebase)
3. Component dispatches the returned Object (or Function)
4. Redux Store changes

### React Diagramm
View -> Actions -> Dispatch -> Reducer -> State -> View
(The View Dispatches an Action to a Reducer in order to change the Store State)
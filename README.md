# discs-server


## Updating

0) `git fetch --all`
0) `git merge origin/master`
0) `yarn`
0) `sudo pm2 restart src/index.js --interpreter ./node_modules/.bin/babel-node --log discs.log`

Changes should be visible now.

If trouble, try:

0) `sudo pm2 stop src/index.js --interpreter ./node_modules/.bin/babel-node --log discs.log`
0) `sudo pm2 start src/index.js --interpreter ./node_modules/.bin/babel-node --log discs.log`

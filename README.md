# mywallet-back

## API of MyWallet app that allows users to create, edit and persist their data.

*MyWallet is mobile responsive only*

*Active deploy at: https://mywalletfinances.vercel.app*

*Front-end repository: https://github.com/AldusD/mywallet-front*

As one of the weekly projects from Driven Education's Full Stack Web Development Bootcamp, MyWallet was meant to reinforce the following learnt knowledge:
- Registering users and saving password with criptography
- Manage users access with sessions and access tokens
- CRUD with MongoDb 
- Separate responsabilities in specific files: Routers, middlewares and controllers 
- Creation of single page application using React Framework

#### How To Start MyWallet
- 1 - Clone both front-end and back-end repositories
- 2 - Install all production dependencies using 'npm install'
- 3 - If wanted, fill the .env files to specify where to run the API and how front-end app can find it 
- 4 - Run on root directory 'node app.js' on back-end project
- 5 - Run on root directory 'npm start' on front-end project

#### Explaining the recent new branch
- Feat/finishing-project branch was meant to complete project intentions that at the time I struggled to complete in time   
- The upgrades brought by feat/finishing-project branch respected the tecnologies and tools limitations I had at the time

#### Acknowledged mistakes and limitations:
- Buttons on home will, in some devices will block balance text  
- API calls are exposed in components file
- Not using hooks 

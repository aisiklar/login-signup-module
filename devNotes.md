# developer notes 



## feature backlog
Following features are to be added to the module.

### 1st and 2nd priority
- [x] signin form: password field inputs should be shown as * (input type to be changed)
* add other fields (keys) for db
     - [x]  time for registration
      - [ ] user-specific data, which can be submitted after signing up, signing in at the landing page after registration
- [x] hash the password and save the hashed key to the db. (Done for the backend side. a new priority-3 level item is added for front end side)
- [ ] After signing up, user will login with her credentials.
- [ ] After signing in, user will see her data in the signin page, and submit / modify her data in the related fields.
  * name
  * age
  * work definition
  * company
  * etc...
- [ ] session / accounts page according to the account info (after signing up, directing to another page, for ex. login page. After logging in, directing to landing page, where the user can see her data)
- [ ] user will change the email and password (modifications on the db)
- [ ] user should be able to erase her account (erase from the database)

### 3rd priority - optional items
- [ ] mongo instead of NEdb?
- [ ] front-end side hashing solution. the password to be written in the form will be hashed and sent to backend. (at the backend it is again hashed and saved to db.)
* ?? an admin account with privileges 
  - [ ] see the database
  - [ ] erase any item or all the items in the database


# Dependencies:

## hash.js:
installed. to be used in backend.

https://www.npmjs.com/package/hash.js 

in addition to this function, which is used in "backend" it would probably be better to also implement another hashing on the front end side. 
https://security.stackexchange.com/questions/110948/password-hashing-on-frontend-or-backend

Still looking for a solution on the front-end side hashing. Adding a new to-do item at priority-3 level.


## express-session:
for keeping the session id.
https://www.npmjs.com/package/express-session
https://www.geeksforgeeks.org/session-management-using-express-session-module-in-node-js/


# developer notes 



## feature backlog
Following features are to be added to the module.

### 1st and 2nd priority
- [x] signin form: password field inputs should be shown as * (input type to be changed)
* add other fields (keys) for db
     - [x]  time for registration
      - [ ] user-specific data, which can be submitted after signing up, signing in at the landing page after registration
- [ ] hash the password on frontend side and save the hashed key to the db.
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
* ?? an admin account with privileges 
  - [ ] see the database
  - [ ] erase any item or all the items in the database

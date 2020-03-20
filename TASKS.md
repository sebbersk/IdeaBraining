# IdeaBraining

## Routes

* [x] Index Route, Basic Route
    * [x] /
    * [x] /about
* [x] Auth Route, GET & POST
    * [x] /login
    * [x] /logout 
    * [x] /register
* [x] Idea Route
    * Get Ideas:
        * [x] /ideas (all public Ideas)
        * [x] /ideas/my (get my Ideas)
        * [x] /ideas/user/:id (Get a Users ideas)
        * [x] /ideas/add (Get form to add an Idea)
        * [x] /ideas/edit/:id (Edit idea, if Owner)
        * [x] /ideas/show/:id (Show specific idea)
    * Post Ideas
        * [x] /ideas  (Create new Idea)
        
    * Delete Ideas
        * [x] /ideas/:id (Delete Idea)
    * Put Ideas (Edit)
        * [x] /ideas/:id
* [x] Comment Route Inside Ideas file
    * Post Comment
        * [x] /ideas/:id/comment (id of Idea)
    * Delete Comment  
        * [x] /ideas/:id/comment/:comment_id
    * Put Comment (Edit)
        * [x] /ideas/:id/comment/:comment_id

## Front-end

* [x] Initialization tasks
    * [x] Install template engine (Handlebars)
    * [x] Create main layout with partials:
        * [x] Put {{{body}}} in a container
        * [x] _header (nav)
        * [x] _footer
    * [x] Add css Framework (Bootstrap/bulma/materialize)
    * [x] Add icons (Font-awesome)
    
* [] Index Pages
    * [x] index.handlebars
        * [x] Top 3 Rated ideas (If existing) in one column
        * [x] Card With Login/Register possibilities
    * [x] about.handlebars
        * [x] Cards with information (Lorem ipsum)
* [x] Auth Pages
    * [x] register.handlebars
        * [x] Form with:
            * [x] Name
            * [x] Lastname
            * [x] Username
            * [x] Password
            * [x] Confirm Password
    * [x] login.handlebars
        * [x] Form with:
            * [x] Username
            * [x] Password

## Back-end

* [x] Initialization Tasks
    * [x] Install body-parser, passport, passport-local, mongoose, bcryptjs
* [x] Set up middleware
    * [x] app.use body-parser
    * [x] mongoose connection
* [x] Set up mongoose Schemas
    * [x] User 
        * Name REMEMBER TO TRIM
        * Lastname REMEMBER TO TRIM
        * Username  REMEMBER TO TRIM
        * Password (hashed) REMEBER TO TRIM
    * [x] Ideas
        * Topic 
        * Title
        * Body
        * Date
        * User/author (id & maybe username)
        * Comments
    * [x] Comments 
        * Body
        * Date
        * User/author
* [x] Set up Passport with Local Strategy
* [x] Set up express-session
* [x] Seed DB With Ideas
* [x] Get Ideas from DB 
        
 ## Front-end 
* Just Styling  
* [x] Idea Pages
    * [x] index.handlebars (ideas/index)
        * [x] show ideas in cards 
    * [x] show.handlebars
        * [x] card to show idea
        * [x] javascript to show comment form
        * [/] Thumbs up & Thumbs down MAYBE
        * [x] Profile of Author
        * [x] Other Topic Related ideas
    * [x] add.handlebars
        * [x] Add form with:
            * [x] Topic Select
            * [x] Title
            * [x] Body
    * [x] edit.handlebars
         * [x] Add form with:
            * [x] Topic Select
            * [x] Title
            * [x] Body

## Back-end
* [x] User Registration  
    * [x] Retrieve Data from form
    * [x] Validate Data
    * [x] Hash password
    * [x] Create User
* [x] User Login
    * [x] Retrieve Data from form
    * [x] Validate Data
    * [x] Login if success
* [x] Add Idea from form
    * [x] Retrieve Data from form
    * [x] Validate Data
    * [x] Save in DB
    * [x] redirect to /ideas

## Front-end
* [x] Truncate & Render Ideas
* [x] Separate into categories on Index
* [x] Fix Icons, edit, delete ideas or comments.
* [x] Download method override
* [x] Fix form routes, for edit,put,delete (ideas, comments).¨
    * [x] Ideas
    * [x] Comments (Popup to delete?)
* [x] Add Forms 



## Back-end
* [x] Fix logic for POST,PUT, DELETE Idea Routes
* [x] Protect these routes
* [x] Fix logic for Comment Routes, POST,PUT,DELETE 
 * [x] (Middleware for protection?)
* [x] Change Ideas model, Add Likes. 
    * [x] Number of likes, starts at 1, 
    * [x] Array of Usernames/ ids?
* [x] Change Comment model, add likes && Routes/Logic

## Front-end
* [x] Link to Routes to update likes.
* [x] Hide buttons if logged in or not:
    * [x] Register/Login
    * [x] Logout
    * [x] Add Idea
    * [x] Comments
    * [x] Edit/Delete
* [x] Welcome User!
* [] Show most Liked Ideas at /
* [] Add Flash Messages
    * [] Wrong password or username
    * [] User already registered
    * [] When login in/out

## Details
* [] Remove CSS/JS from HBS-files.
...


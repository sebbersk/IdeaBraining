# IdeaBraining

* Just To Brainstorm Ideas
* Create An Account, Have Public Or Private Ideas
* Let People Comment & Rate Your Ideas
* Brainstorm Together!

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

* [] Initialization tasks
    * [] Create main layout with partials:
        * [] Put {{{body}}} in a container
        * [] _header (nav)
        * [] _footer
    * [] Add css Framework (Bootstrap/bulma/materialize)
    * [] Add icons (Font-awesome)
    * [] Install template engine (Handlebars)
* [] Index Pages
    * [] index.handlebars
        * [] Top 3 Rated ideas (If existing) in one column
        * [] Card With Login/Register possibilities
    * [] about.handlebars
        * [] Cards with information (Lorem ipsum)
* [] Auth Pages
    * [] register.handlebars
        * [] Form with:
            * [] Name
            * [] Username
            * [] Password
            * [] Confirm Password
    * [] login.handlebars
        * [] Form with:
            * [] Username
            * [] Password

## Back-end

* [] Initialization Tasks
    * [] Install body-parser, passport, passport-local, mongoose, bcryptjs
* [] Set up middleware
    * [] app.use body-parser
* [] Set up mongoose Schemas
    * [] User
        * Name
        * Username
        * Password (hashed)
        * (Image)

* [] Idea Pages
    * [] index.handlebars (ideas/index)
        * [] 

    

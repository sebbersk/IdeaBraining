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
* [] Idea Route
    * Get Ideas:
        * [] /ideas (all public Ideas)
        * [] /ideas/my (get my Ideas)
        * [] /ideas/user/:id (Get a Users ideas)
        * [] /ideas/add (Get form to add an Idea)
        * [] /ideas/edit/:id (Edit idea, if Owner)
        * [] /ideas/show/:id (Show specific idea)
    * Post Ideas
        * [] /ideas  (Create new Idea)
        
    * Delete Ideas
        * [] /ideas/:id (Delete Idea)
    * Put Ideas (Edit)
        * [] /ideas/:id
* [] Comment Route Inside Ideas file
    * Post Comment
        * [] /ideas/:id/comment (id of Idea)
    * Delete Comment 
        * [] /ideas/:id/comment/:comment_id
    * Put Comment (Edit)
        * [] /ideas/:id/comment/:comment_id

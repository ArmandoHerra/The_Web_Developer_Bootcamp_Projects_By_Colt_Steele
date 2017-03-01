#RESTful Routing.

#Introduction.

* Define REST and explain why it matters.
* List all 7 RESTful routes.
* Show example of RESTful routing in practice.


REST - A mapping between HTTP routes and CRUD.

NAME        ||      PATH        ||      HTTP Verb       ||      PURPOSE
===============================================================================
Index       ||  /dogs           ||      GET             ||  List all dogs.
New         ||  /dogs/new       ||      GET             ||  Show new dog form.   
Create      ||  /dogs           ||      POST            ||  Create a new dog, then redirect somewhere.
Show        ||  /dogs/:id       ||      GET             ||  Show info about one specific dog.
Edit        ||  /dogs/:id/edit  ||      GET             ||  Show edit form for one dog.
Update      ||  /dogs/:id       ||      PUT             ||  Update a particular dog, then redirect somewhere.
Destroy     ||  /dogs/:id       ||      DELETE          ||  Delete a particular dog, then redirect somewhere.

#Blog Index.

* Setup the Blog App.
* Create the Blog model.
* Add INDEX route and template.

#Basic Layout.

* Add Header and Footer Partials.
* Include Semantic UI.
* Add simple Nav.

#Putting the C in CRUD.

* Add NEW route.
* Add NEW template.
* Add CREATE route.
* Add CREATE template.

#SHOW time.

* Add SHOW route.
* Add SHOW template.
* Add links to show page.
* Style show template.

#Edit/Update.

* Add EDIT route.
* Add EDIT form.
* Add UPDATE route.
* Add UPDATE form.
* Add Method-Override.

#DESTROYYY.

* Add Destroy Route.
* Add Edit and Destroy Links.

#Final Updates.

* Sanitize blog body.
* Style Index.
* Update REST Table.
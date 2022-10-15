# Installation Steps:
1.Install npm, if you haven't already on your computer.

2.Clone this repository locally

3.In the `server` folder, create a `.env` file.

4.Create a MongoDB Server in the cloud, and get the URI of the database.
It should look something like this:

`mongodb+srv://<username>:<password>@cluster0.ckv3xsy.mongodb.net/<project-name>?retryWrites=true&w=majority`

5.Set the environment variable DB to this URI in the `.env` file.

`DB=mongodb+srv://<username>:<password>@cluster0.ckv3xsy.mongodb.net/<project-name>?retryWrites=true&w=majority`

You are now ready to run your project!

# Steps to run the project:
1.Open a command prompt from the root directory of the repository and type the following:
```
cd client
npm start
```

2.Open another commant prompt from root directory and type this:
```
cd server
npm start
```

3.The project is setup to run with some default data already present for testing purposes. If you don't want this default data to load, comment out line 36 in index.js.
`DefaultData();`

However, if you want to load data particularly, with your own testing data, then you can do so by modifying the `constants` folder and changing the user, task and subtask data, according to the models.

If you look at `default.js`, you can choose which collections you want to add to the database, and if they should be reset everytime the data refreshes.

4.In your browser(preferably Firefox), go to `http://localhost:3000/login` and Login your user, or register the same.

# List of implemented features:

* Login for the users
* Register for the users
* Each post is defined as a task and has the following attributes:
    * Title
    * Description
    * Social Media Platform
    * Deadline
* Each subtask has the following attributes:
    * Title
    * Description
    * Deadline
    * Assignee
    * Status
    * File (This is a place-holder attribute)
* Members can create/delete new tasks and subtasks
* Members can view more details about the tasks and sub tasks in the side-panel view
* There has been a dashboard created for the viewing, creating, and deleting of the tasks and subtasks.
* The different tasks of the club have been ordered by the social media platform

# List of planned features:

* Change color of subtasks based on its status
* Include drop-down menus
* Include Google OAuth
* Add deadlines to the user's Google Calendar with an API
* Add the file upload feature, into the Google Drive of the user
* Add Editing tasks and subtasks feature
* Add an admin view
* Make a user part of multiple clubs
* Improve the styling of the website
* Improve the models of the tasks, subtasks and users
* Make references between users, tasks, and subtasks in the collections

# List of known bugs:

1. Application stops working, and backend server crashes in case invalid form data is submitted to the database. Just restart the database prompt if this happens.
2. The right side view will not change to view None after the deletion of a task or a subtask and if the same was selected in the view (Should be fixed easily)
3. Log out pages sometimes redirects to the dashboard
4. Sometimes subtasks aren't added

# References used:

* Stack Overflow
* Material UI Docs
* mongoosejs.com
* Github Gist

# Screenshots:

![Login user][./screenshots/login.png "Login User"]
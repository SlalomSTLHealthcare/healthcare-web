# Healthcare-Web
Front end for the HealthSTLX conference to be held 11.14.18

# Motivation
The goal of this project is to provide the HealthSTLX conference with a fully functioning website so that users can learn more about the conference as well as sign up for the conference.


# Technologies Used
This app is built in [Vuejs](https://vuejs.org/) using [ElementUI](http://element.eleme.io/#/en-US) as the style framework, and custom html elements where element does not provide with the feature that was needed out of the box.


# Code Structure
In line with Vuejs, this app consists of components and views, with each view utilizing the appropriate components.

[Vuex](https://vuex.vuejs.org/) is used to store data accross the entire app

[Axios](https://github.com/axios/axios) is used to make any api calls necessary to retrieve data. 

[Underscore](https://underscorejs.org/) is used throughout the app to manipulate retrieved data.


# Features
Users can register for the conference, and once registered can edit thier profile as well as delete thier registration

Users can also view more information surrounding the conference, such as viewing the schedule of the conference and more detailed information on the sessions available to users

# Local Setup
after cloning the repo, run

`npm install`

To get all required packages installed

After installing all packages, you can build the app with 

`npm run build`

To launch the app on the designated port you can run

`npm run serve`


# Author Note

Created by [Eric Mason](https://github.com/EricMason24), [Soraya Moss](https://github.com/sorayamoss), [Taylor Jackson](https://github.com/tlj4k8) and [Dan Borstelmann](https://github.com/dborstelmann)

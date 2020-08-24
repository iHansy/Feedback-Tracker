# Feedback Tracker

## Description

_Duration: 18 hours_

At my school we had a problem with how we submitted our daily feedback, it was very inefficient. The process was very manual and consisted of all of us writing out on paper how we are doing. We answered a series of questions then left our paper on the professors desk which created a huge mess. The professor had a hard time keeping track of all the feedback submissions and wanted a digital way to submit and store the feedback history.

I offered to build my professor a website and he was very excited! I built a multi-page web application that allows a student to navigate views and answer multiple feedback questions, including adding a comment. Towards the end of the application the student is able to review his response, go back and edit if needed, and finally submit. Once the student submits his response it gets sent to a back end database that stores their response along with all others. Now the professor has access to view all responses in his own secret url which ends with '/admin'. The professor is also able to delete responses if need be.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

![review](images/review-img.png)

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. xxx
2. xxx
3. xxx
4. xxx
5. xxx
6. xxx


## Built With

List technologies and frameworks here

## License
[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [youremail@whatever.com](www.google.com)
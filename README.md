## [Air Quality Monitor (Rotterdam)](https://air-rotterdam.ew.r.appspot.com)

Air Quality Monitor is single page web application.
Its purpose is to give users an impression about the quality of air we are re breathing in the Netherlands.

The idea of this app was to give an insight about the air quality near Ahoy, Zuidplein in Rotterdam,
so that the guests of the Eurovision Song Contest 2020 that hopefully will take place at Ahoy Congress,  
could be aware of the environment.

Due to the outbreak of Covid-19 in the Netherlands many activities were put on hold.
I asked myself, how significant the effect of our smart lock down on the air quality could be,
especially, reduction of pollutants emission. Could one see the difference between "now" and one year old data?  

To answer this question, I added a feature that travels the app in time and compared the real-time and historical measurements. 

Then, I added the feature that compares the quality of air in any part of Netherlands with measurements, taken in Rotterdam and median values in South Holland.

Finally, I developed the feature that finds out the most polluted locations in the country (Top 7) by each polluting component.

Now let's dive in details of UI.
 
Once you open the [application](https://air-rotterdam.ew.r.appspot.com) page,
the browser page will look like this:

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5e7f3476ba8e413822fb0b77/b9e02b25ea766feb016ad18f88c31da1/Air_monitor_-_Monitor.png" alt="application"/>


## Features

The application supports two modes:

* "Monitor": Monitoring the air quality on the spot

* "Top 7": Real-time values of Top 7 components (pollutants) contributing to AQI calculation, measured country-wide.
The location, where the maximum was spotted, is shown on the map.

## Monitoring the air quality on the spot

The value of the pollutant concentration, shown on the diagram, is recently taken measurement.

* Show next 3 pollutants' concentrations

Click or tap the button to see next 3 concentrations of pollutants.

* Travelling in time / comparing the current and the historical measurements

You can travel in time by picking the date and time of the measurement in the past. 

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5e77b4505cdd097bf329e49d/f7134dde10f6b34a94dad4624d1d4989/TimeTravel.PNG" alt="travelling"/>

Once you have chosen the measurement date, the app will show you historical values of air pollutants on the spot.

* Comparing the real-time concentrations and historical values (city and provincial)
 
Did you click or tap the pollutant bar on the upper chart? The lower chart, 
which displays the real-time average values of pollutant concentration in Rotterdam city and Zuid - Holland province, 
will be updated. The lower chart (city and provincial values) is not travelling in time. 
This makes it easy to compare the real-lime concentration of the pollutant in the city and the province and their corresponding historical 
values on the spot.

* Switching to "Top 7" mode

Once you click (or tap) the "Top 7" button, the application will switch to "Top 7" mode.

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5e7f3476ba8e413822fb0b77/6b314da5e755e3e15cad7fe66e30970d/Air_monitor_-_Top_Pollutants.PNG" alt="application"/>

### Find your spot

You can use the Search feature (experimental).
Click or tap the Search icon and start to type your city or your street name.
The search result set will be limited to the Dutch addresses. 

<img src="https://trello-attachments.s3.amazonaws.com/5e8394fe5b4fc731d6931121/600x295/f202bea22b880a2e4077d2c9dfceb9d5/LeafletSearch_-_3.PNG.png" alt="LeafletJS search your spot"/>

Once the result appears on the top of search results list, tap or click the list item with desired address. 
The app will fly you to the nearest measurement station and show you real-time concentrations of the pollutants (based on 3 recent measurements) 
measured by this station.


## Top 7

The application displays the list of maximal concentrations of top 7 pollutants contributing to AQI calculation. 
The numbers are maximal values of at least 3 recent measurements.

* Switching back to "Monitor" mode

Once you click (or tap) the "Switch to monitor" button, the application will switch back to "Monitor" mode.
 
## Supported devices

The application will work in Chrome, Firefox, Safari and Edge desktop browsers.
It has also been tested to work correctly on Android mobile phones and iPad.

### Android

Android version look and feel, impression:

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5f949e1a6e2f5002d06c3925/9e13bd1453b83309f6762fac2d1267a5/20201025_205120.jpg" alt="android"/>

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5f949e1a6e2f5002d06c3925/fdc5a082b75c5af12cab43a4921573ca/20201025_205102.jpg" alt="android"/>

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5f949e1a6e2f5002d06c3925/85f6b3bd5bd4551401af6b923f50a0e9/20201025_205041.jpg" alt="android"/>


### iPad

iPad varsion look and feel:

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5e7f3476ba8e413822fb0b77/52d009b9e05d183fa530e44df2275eb9/photo_2020-03-28_23-07-30.jpg" alt="android"/>

## Technical stack

This project is ReactJS web app.
It is bootstrapped with [Create React App](https://github.com/facebook/create-react-app),
and it makes use of my  [air-quality-monitor-nl-server](https://github.com/dmitrychebayewski/air-quality-monitor-nl-server) project. 
The latter is stateless service built in Kotlin around the  [Luchtmeetnet 2020 OpenAPI](https://api-docs.luchtmeetnet.nl/?version=latest#intro).

## Math

I used the great Circle Distance algorithm to calculate the coordinates of the air measurement station near your spot.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Heroku

Use the [Heroku Buildpack for Create React App.](https://github.com/mars/create-react-app-buildpack)

## Known issues

 
## Cookies

The application may set cookies from the following vendors:

* [LeafletJS](https://leafletjs.com)
* [OpenStreetMap](https://www.openstreetmap.org)

The application sets the following cookies:

*  applicationMode: to save the mode (Watch or Top7) for your next visit of [Airrotterdam](https://air-rotterdam.ew.r.appspot.com/)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

## CI/CD
This version has descriptors for the following CI/CD pipelines:
* [CircleCI](https://circleci.com/)

### Deployment

This version has descriptors for the following PaaS:

* [Google AppEngine](https://cloud.google.com/)
* [Heroku](https://blog.heroku.com/deploying-react-with-zero-configuration)

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Credits

* Orkun Tümer: [react-leaflet-search](https://github.com/tumerorkun/react-leaflet-search)
* Sophie Koonin: [Deploying your Google AppEngine app with CircleCI](https://localghost.dev/2019/12/deploying-your-google-appengine-app-with-circleci/)
 

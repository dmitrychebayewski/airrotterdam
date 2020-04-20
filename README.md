## [Air Quality Monitor (Rotterdam)](https://airrotterdam.herokuapp.com)

This single-page web application will update you about the quality of air you're breathing,
anywhere in the Netherlands!

The idea of this app was to give quick insight into the air quality near Ahoy, Zuidplein in Rotterdam,
to the visitors of Eurovision 2020 Song Contest.

Due to outbreak of covid-19 in Western Europe, many activities in the Netherlands were put on hold.
We were uncertain about the air around us, but I was curious, 
what the effect of our smart lock down on the quality of air could be. 

So did the next dimension of the app materialize: Travelling in time. 

Finally, we found ourselves self-isolated in our houses. Never before was our neighbourhood so important for us. 
So the third feature was born: Find your spot.

But let's begin from the very beginning.
 
Once you open the application page which is:

https://airrotterdam.herokuapp.com

the browser page will look like this:

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5e7f3476ba8e413822fb0b77/b9e02b25ea766feb016ad18f88c31da1/Air_monitor_-_Monitor.png" alt="application"/>

Let us dive deeper into the features.

## Features

The application supports two modes and one experimental feature:

* Monitoring the air quality on the spot (Monitor) with "Find your spot"

* Showing top values of pollutants concentrations contributing to AQI calculation, recently measured in the Netherlands (Top pollutants)

## Monitoring the air quality on the spot

Each air pollutant value is an average value of at least 3 recently taken ones.

* Loading the next 3 measurements on the spot

Click or tap the button to see the next measurements of the components polluting the air.

* Travelling in time / comparing the current and the historical measurements

You can travel in time by picking the date and time of the measurement in the past. 

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5e77b4505cdd097bf329e49d/f7134dde10f6b34a94dad4624d1d4989/TimeTravel.PNG" alt="travelling"/>

Once you have chosen the measurement date, the app will show you historical values of air pollutants on the spot.

* Comparing the historical values and up to date city and provincial values of pollutant concentrations
 
Did you click  or tap the pollutant row in the table, the application will update the charts 
that display the actual values of pollutant concentration in Rotterdam city and Zuid - Holland province.
These values are not travelling in time. This makes it handy to compare the current situation in the city 
(and the the region) with historic measurements.

* Switching to "Top Pollutants" mode

Once you click (or tap) the "Switch to top pollutants" button, the application will switch to "Top Pollutants" mode.

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5e7f3476ba8e413822fb0b77/6b314da5e755e3e15cad7fe66e30970d/Air_monitor_-_Top_Pollutants.PNG" alt="application"/>

### (Experimental) Search your spot

You can use the Search feature. The feature has experimental status.
Click or tap the Search icon and start to type your city of street name.

<img src="https://trello-attachments.s3.amazonaws.com/5e8394fe5b4fc731d6931121/600x295/f202bea22b880a2e4077d2c9dfceb9d5/LeafletSearch_-_3.PNG.png" alt="LeafletJS search your spot"/>

Once the result appears in the top of search results list, tap the desired list item. 
The app will fly you to the nearest station and show you up to date status of pollutants (based on 3 recent measurements) 
that are contributing to the contamination of the air around you.


## Top pollutants

The application displays the list of maximal concentrations of top pollutants. 
The numbers are maximal values of at least 3 recent measurements.

* Switching back to "Monitor" mode

Once you click (or tap) the "Switch to monitor" button, the application will switch back to "Monitor" mode.
 
## Supported devices

The application will work in Chrome, Firefox, Safari and Edge desktop browsers.
It has also been tested to work correctly on Android mobile phones and iPad.
However, the look and feel experience is optimal on tablet (iPad or Android).

### Android

On an Android mobile phone, the application will look and feel like this:

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5e7f3476ba8e413822fb0b77/c135877a9360b349ec48c85de6204c20/photo_2020-03-28_23-02-24.jpg" alt="android"/>

### iPad

On an iPad, in Safari browser, the application will look and feel like this:

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5e7f3476ba8e413822fb0b77/52d009b9e05d183fa530e44df2275eb9/photo_2020-03-28_23-07-30.jpg" alt="android"/>

## Technical stack

This project is ReactJS web app.
It is bootstrapped with [Create React App](https://github.com/facebook/create-react-app),
and it makes use of my  [air-quality-monitor-nl-server](https://github.com/dmitrychebayewski/air-quality-monitor-nl-server) project. 
The latter is stateless service built in Kotlin around the  [Luchtmeetnet 2020 OpenAPI](https://api-docs.luchtmeetnet.nl/?version=latest#intro).

## Math

I used PatriciaTrie implementation of [Radix Tree](https://en.wikipedia.org/wiki/Radix_tree) to structure the stations measuring the air,
and great Circle Distance algorithm to fly you to the nearest measurement spot in real time when you're looking up your spot in the Netherlands.


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
You can find instructions in [Deploying React with Zero Configuration.](https://blog.heroku.com/deploying-react-with-zero-configuration)

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

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Known issues

### Search feature
 
Top search result is sometimes giving the second nearest station, as it is shown on the picture.

<img src="https://trello-attachments.s3.amazonaws.com/5e8394fe5b4fc731d6931121/601x303/a03295f9518550fc87478d4bae473a40/LeafletSearch_-_1.PNG.png" alt="LeafletJS improper result"/>

Here the search input is Delft whereas the nearest station should be located in Ypenburg, the Hague. 
But due to the search provider (OpenStreetMaps), top search result is improper, and the app will fly you
to Overschie near Rotterdam instead, and show you top pollutants there.

<img src="https://trello-attachments.s3.amazonaws.com/5e8394fe5b4fc731d6931121/590x296/f3b727104dbffb6037cae4390257c745/LeafletSearch_-_2.PNG.png" alt="LeafletJS  improper result"/>

Solution: Specify the city and the street name in the search field

### Application sleeps after 30 minutes of inactivity

Due to known limitation of Heroku, the app will sleep after 30 minutes of inactivity. 
On wakeup, it will take up to 1 minute to warm up the internal caches. 
We are working on boosting this process up.  
 
## Cookies

The application may set cookies from the following vendors:

* [LeafletJS](https://leafletjs.com)
* [OpenStreetMap](https://www.openstreetmap.org)

The application sets the following cookies:

*  applicationMode: to save the mode (Watch or Top7) for your next visit of [Airrotterdam](https://airrotterdam.herokuapp.com/)

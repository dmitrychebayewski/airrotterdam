## Rotterdam Air Quality Monitor
## User Manual
This single-page web application will update 
you about the quality of air you're breathing near Ahoy, Zuidplein in Rotterdam.

Once you start the server and the client, the browser page wil look like this:
<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5e77b4505cdd097bf329e49d/6d8dc804c821aaf6332ffae106b66719/Rotterdam_air_quality.PNG" alt="application"/>

Each air pollutant measurement is average of at least 3 ones, taken from 4 hours back until now:

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5e77b4505cdd097bf329e49d/48a03283819d5141268d2a633b0185c5/Pollutants.PNG" alt="measurements"/>

Click or tap the button to see the next components polluting the air.

You can travel in time using the date and time picker. 

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5e77b4505cdd097bf329e49d/f7134dde10f6b34a94dad4624d1d4989/TimeTravel.PNG" alt="travelling"/>

The app will show you historical values of air pollutants.
You can click (or tap) the pollutant row, 
and the app will update the bar charts and the explanation at the bottom:

<img src="https://trello-attachments.s3.amazonaws.com/5e77b3f063dc99362c7036b8/5e77b4505cdd097bf329e49d/10767bc209f1281dd64325a8c9fccc79/Aggr.PNG" alt="pollutants"/>

The bar charts show the values of selected pollutant in Rotterdam and in South Holland province.
They are also average values of at least 3 measurements, but they are not travelling in time.
Not only can you breathe the fresh air but also see the difference of the air quality near Ahoy, now or in the past 
and the actual average quality of air in Rotterdam and South Holland.

## Supported devices
The app will work in Chrome, Firefox, Safari, Edge desktop browsers.
It has also been tested to work on Android mobile phones and iPad.
On Android screen the application will look and feel like this:

<img src="https://trello-attachments.s3.amazonaws.com/5e77b4505cdd097bf329e49d/720x1280/3379286d6c2045fc917be5028ae93585/photo_2020-03-22_20-01-22.jpg" alt="android"/>

## Technical stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app),
and it makes use of my  [air-quality-monitor-nl-server](https://github.com/dmitrychebayewski/air-quality-monitor-nl-server) project.

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

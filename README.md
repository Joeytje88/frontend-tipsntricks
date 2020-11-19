Om mijn project te kunnen draaien, zijn de volgende programma’s nodig:

- PostgreSQL
- IntelliJ (of een andere IDEA)
- Visual Studio Code (geen vereiste kan ook met de IDEA)

Nu kunt u beginnen met het starten van de IDEA en het openen van het backend gedeelte. 
Voor het draaien van de backend moet eerst de juiste gegevens voor de postgreSQL database worden ingevoerd in de application.properties bestand. Dit bestand is te vinden in de resources folder van de backend.

Deze staan nu op mijn gegevens, maar de kans is groot dat deze niet werken bij u, aangezien u waarschijnlijk andere inloggegevens heeft.
Dit kunt u eventueel checken door (in IntelliJ) rechtsboven op het scherm op database (in kleine letters tegen de zijkant van het scherm) te klikken en daar te testen of er een verbinding is met de database of daar  eventueel een connectie aanmaken met de database. Deze heeft bij mij de naam test gekregen. Deze naam kunt u eventueel wijzigen, aangezien er iedere keer dat de backend gestart wordt de database opnieuw gevuld wordt. 
Echter als u de naam verandert, dient deze ook in de application.properties bestand worden aangepast.

Het opstarten van de backend gaat door middel van het commando : mvn spring-boot:run in te voeren in de terminal van de IDEA.

Zodra u een connectie heeft gemaakt, kunt ook het frontend gedeelte opstarten. Dit kan door het project in een nieuw venster in IntelliJ te openen of de folder te openen in Visual Studio code. Voor dat u het frontend gedeelte start, dient u eerst de npm packages te installeren. Dit doet u door de volgende commando in de terminal in  te voeren: NPM Install. Ik kreeg hier na het verwijderen van de Node modules een foutmelding. Mocht dit ook bij u gebeuren, draai dan ook even npm audit fix. Dat was de enige oplossing, waardoor ik hem weer draaiende kreeg.  Zodra dit eenmaal geïnstalleerd is, kunt u ook de frontend draaien door het commando npm start in de terminal in te voeren.

Zodra dit draait , wordt de website geopend in uw browser en kunt u aan de slag met de website. Mocht dit niet gebeuren, ga dan naar http:// localhost:3000 om de pagina alsnog te openen.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

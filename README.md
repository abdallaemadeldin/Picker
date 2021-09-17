> :warning: **Support Android Only**: unfortunately my mac is dead so i can't handle IOS.

> :heavy_check_mark: App is completely **responsive** and adapts well to all viewports.

## Get Started
To get started you can run the app in development

```
git clone https://github.com/abdallaemadeldin/Picker.git
cd Picker
yarn
yarn start
yarn android
```

Launch the test runner

```sh
yarn test
```

## File Structure

```
Picker
├─ src
│  ├─ assets
│  │  └─ logo.png
│  ├─ context
│  │  └─ realm.context.js
│  ├─ db
│  │  └─ log.scheme.js
│  ├─ hooks
│  │  ├─ home.hook.js
│  │  ├─ index.js
│  │  └─ splash.hook.js
│  ├─ lib
│  │  └─ windowStack.js
│  └─ screens
│     ├─ Home
│     │  ├─ Home.js
│     │  ├─ style.js
│     │  └─ __test__
│     │     ├─ Home.test.tsx
│     │     └─ __snapshots__
│     │        └─ Home.test.tsx.snap
│     └─ Splash
│        ├─ Splash.js
│        ├─ style.js
└─       └─ __test__
            ├─ Splash.test.tsx
            └─ __snapshots__
               └─ Splash.test.tsx.snap

```

- `assets` images, fonts, ...etc
- `context` All context Apis should be in one folder, with no nesting!.
- `db` All the realm schemes should be in one folder, with no nesting!.
- `hooks` All hooks should be in one folder, with no nesting! Each hook is refered to component or screen.
- `lib`
- `screens` A screen is what simply what get passed to navigator, Each screen has its own folder, it contains the jsx screen itself as well as styles, tests, ...etc.

## Redux design pattern
```
├─ redux
│  ├─ features
│  │  ├─ home.feature.js
│  │  └─ index.js
│  ├─ saga
│  │  ├─ home.saga.js
│  │  └─ index.js
│  └─ store.js
```

The way how redux store is structured here is by using the ducks pattern recommended by [redux style guide](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks).

> _Co-locating logic for a given feature in one place typically makes it easier to maintain that code. Because of this, **we recommend that most applications should structure files using a "feature folder" approach** (all files for a feature in the same folder) **or the ["ducks" pattern](https://github.com/erikras/ducks-modular-redux)** (all Redux logic for a feature in a single file), rather than splitting logic across separate folders by "type" of code (reducers, actions, etc)_

The project's redux folder includes the store configuration and all the logic (api calls, actions, reducers and sagas) grouped by feature.

## Stack
This app is built with react-native cli, `react-navigation`, `redux-saga`, `@reduxjs/toolkit`, React-Testing-Library & Jest for testing.`

## Screenshots

![screenshot 2](/screenshots/2.jpeg?row=true "Home Screen")
![screenshot 1](/screenshots/1.jpeg?row=true "Logs List")
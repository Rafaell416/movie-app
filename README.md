# The Movie App

Welcome to "The Movie App" coding assessment! In this assessment, you'll be tasked with building a React Native application that showcases your skills in front-end development. You'll have the opportunity to demonstrate your ability to create a mobile application that fetches and displays movie data from an API, delivering a seamless and intuitive user experience. Let's dive in and showcase your React Native prowess!

Before moving forward make sure to follow this [guide](#getting-tmdb-api-access) to set up the API key needed to complete the assessment.

## Task 1: Create Home Page
A user can go to the home page of the app and be presented with the latest trending topics for all (TV/Movies) containing the following elements:

- Create a Loading screen that will pre-fetch the information from the API and save it into a **long-term storage**
- A search bar should appear on top, this search bar should be connected to the [movie search API](https://api.themoviedb.org/3/search/movie)
- A list of trending movies/shows/people [all Trending API](https://developer.themoviedb.org/reference/trending-all) 
- A navigation bar at the bottom that has 1 option: "Rated"
- Your data model should support ratings from movies and shows

Note: Make sure to fetch data only when necessary, you should sync with the data that is already stored in the device

## Task 2: Personalize your assessment
Make sure to personalize your assessment
- Add a new AppIcon and make sure to change the name of the app
- Make sure to set the version of your app to `1.1.0`

## Task 3: Display Movies/Shows details
A user should be able to see the details of a TV or Movie
- Use the following APIs to retrieve media details based on type: [TV Movie details](https://developer.themoviedb.org/reference/movie-details), [TV Show details](https://developer.themoviedb.org/reference/tv-series-details)
- It must contain an image with the movie backdrop or Poster
- Use as much data as you see fit

## Task 4: Gather Ratings!
A user should be able to rate movies or TV shows

- Make sure that these ratings are saved in long-term storage
- Your data model should support ratings by TV/Movie ID, use the IDs returned by the server

Note: The rating experience should be offline, it should be stored locally

## Bonus Tasks (Optional)
- Implement a Person detail page similar to the Movies/Shows details page
- Implement unit test/e2e, bear in mind to write meaningful tests that add value.
- Make your app fun! add loading and transition animations to make your app fun to navigate
- Add a camera integration into the app

## Bonus Tasks 2 (Optional)
Expand your navigation bar to include 2 more options: "TV" and "Movies", when tapping on these options you should show a list of the corresponding Trending media types:
- Use the following APIs to retrieve a list of trending media: [Trending Movies](https://developer.themoviedb.org/reference/trending-movies), [Trending TV shows](https://developer.themoviedb.org/reference/trending-tv)
- The listing should at least include an image and a title, add as much data as you see fit.

# Getting TMDB API access

>**Note**: Make sure to create an account in [The Movie Database](https://developer.themoviedb.org/docs/getting-started) before moving forward, the access to the API is free and it doesn't require payment information.

## Sign up

- [Signup](https://www.themoviedb.org/signup) for an account, 
- Verify your email address to active your user
- Login into your account

## Request API Read Access Token
- Once logged into your account, [request API access](https://www.themoviedb.org/settings/api/request)
- Use the `Developer` option and accept `Term of use` 
- Fill the form with the app information, name, and address information, and submit the information
- Once complete you should get access to the `API Read Access Token`, use this token to access the APIs that are referenced in this challenge

## How to build an image URL
You may notice that some of the API responses will return props like `backdrop_path`, and `poster_path`, to use these properties make sure to read the following guide: [Using TMDB images](https://developer.themoviedb.org/docs/image-basics)

# Additional information

## Styling
This repo comes with [emotion](https://emotion.sh/docs/@emotion/native) pre-installed, while is not required, we encourage the usage of a styled component approach

## Utility functions
This repo comes with a handful of utility hooks ready to use, don't hesitate to add and to use them! these helpers are located in:
```
./app/utils
```

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

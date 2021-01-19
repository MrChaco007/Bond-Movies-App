# Bond Movies

# Project Overview

## Project Links

- [add your github repo link]()
- [add your deployment link]()

## Project Description

My app will render a list of all the James Bond movies and allow users to click on one, which will bring up the movie details in a card for the movie clicked. There will also be an "Add to Favorites" button on the movie card that's displaying, allowing users to add that movie to another Route with the path "/pages/favorites" and that will appear in the Navbar as "My Favorites." In the "My Favorites" section, users will be able to click an item in a dropdown list with the different James Bond actors in each movie, and clicking one of the items will filter out the cards that hold the movies with the particular actor described on the item clicked. If there is extra time, I will also try to figure out how to allow users to sort the movies from highest Rotten Tomatoes rating at the top to lowest Rotten Tomatoes rating at the bottom.

## API

This is one example of a Bond movie pulled from the API URL: https://omdbapi.com/?t=Casino+Royale&apikey=******/. The t query asks for a title. I'm going to create a bondMovies array that has an object with a title key and the title value for each movie, and then map the array to interpolate the object title value into the API URL for each Bond Movie. That way I will have a list of Bond movies rendered on the main page.

```
{
	"Title": "Casino Royale",
	"Year": "2006",
	"Rated": "PG-13",
	"Released": "17 Nov 2006",
	"Runtime": "144 min",
	"Genre": "Action, Adventure, Thriller",
	"Director": "Martin Campbell",
	"Writer": "Neal Purvis (screenplay), Robert Wade (screenplay), Paul Haggis (screenplay), Ian Fleming (novel)",
	"Actors": "Daniel Craig, Eva Green, Mads Mikkelsen, Judi Dench",
	"Plot": "After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro.",
	"Language": "English, Serbian, German, Italian, French",
	"Country": "UK, Czech Republic, USA, Germany, Bahamas",
	"Awards": "Won 1 BAFTA Film Award. Another 26 wins & 44 nominations.",
	"Poster": "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
	"Ratings": [
	{
		"Source": "Internet Movie Database",
		"Value": "8.0/10"
	},
	{
		"Source": "Rotten Tomatoes",
		"Value": "95%"
	},
	{
		"Source": "Metacritic",
		"Value": "80/100"
	}
	],
	"Metascore": "80",
	"imdbRating": "8.0",
	"imdbVotes": "580,663",
	"imdbID": "tt0381061",
	"Type": "movie",
	"DVD": "N/A",
	"BoxOffice": "$167,445,960",
	"Production": "Eon Productions Ltd., Sony Pictures Entertainment, Metro-Goldwyn-Mayer",
	"Website": "N/A",
	"Response": "True"
}
```

## Wireframes

- [Mobile Wireframe](https://res.cloudinary.com/dvnl2s9um/image/upload/v1610745235/Screen_Shot_2021-01-15_at_4.13.24_PM_gnasij.png)
- [Tablet Wireframe](https://res.cloudinary.com/dvnl2s9um/image/upload/v1610746521/Wireframe_Tablet_wmvnps.png)
- [Desktop Wireframe](https://res.cloudinary.com/dvnl2s9um/image/upload/v1610746523/Wireframe_Desktop_dh1irh.png)
- [React Architecture](https://res.cloudinary.com/dvnl2s9um/image/upload/v1610732562/Bond_Movies_App_Architecture_5_iy7xw5.png)

### MVP/PostMVP

#### MVP

- Find and use external film api
- Render Bond movie data on page
- Allow users to click on movie in list, which will render a card component that displays the information for that particular movie
- Allow users to click on button in the rendered movie card that adds that particular movie to favorites list in a seperate Route
- Allow users to filter favorites list by Bond actor

#### PostMVP

- Allow users to sort favorites list by Rotten Tomatoes rating from high to low and low to high

## Components

| Component |                                                                      Description                                                                      |
| --------- | :---------------------------------------------------------------------------------------------------------------------------------------------------: |
| App       |                                          This will wrap the Nav component and import React Router and Switch                                          |
| Nav       |                                                               This will render the Nav                                                                |
| allmovies |                                 This is a page where all the Bond movies data will be fetched and rendered as a list                                  |
| Movie     |            This is the card component that will carry the information from the particular Bond movie clicked out of the list on allmovies             |
| favorites |                                            This is a page where all the favorited Bond movies will render                                             |
| Dropdown  | This is a dropdown component that will allow users to filter their favorites by Bond actor (and also sort by Rotten Tomatoes rating, if there's time) |

## Time Frame

| Component        | Priority | Estimated Time | Actual Time |
| ---------------- | :------: | :------------: | :---------: |
| App              |    H     |      1hr       |     TBD     |
| Nav              |    H     |      2hr       |     TBD     |
| allmovies        |    H     |      5hrs      |     TBD     |
| Pulling API      |    H     |      3hrs      |     TBD     |
| Movie            |    H     |      5hrs      |     TBD     |
| favorites        |    H     |      5hrs      |     TBD     |
| Dropdown         |    M     |      6hrs      |     TBD     |
| Dropdown PostMVP |    L     |      6hrs      |     TBD     |
| Total MVP        |    H     |     27hrs      |     TBD     |
| Total PostMVP    |    L     |      6hrs      |     TBD     |
| Total            |    M     |     33hrs      |     TBD     |

## Additional Libraries

Sass

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is code to reverse a string of text
}
```

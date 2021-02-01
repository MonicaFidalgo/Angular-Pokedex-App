# Pokedex

## About

I decided to create a simple sample app that displays a list of Pokémons. The data is fetched from the public [PokeAPI](https://pokeapi.co/). The API is open source and available on [GitHub](https://github.com/PokeAPI/pokeapi).

## Technologies

- Angular CLI 9.1.9
- Typescript
- CSS Grid
- SCSS

## Dev Details

- This project use a service to communicate with the pokemon api
- The service needs to work with HTTP calls, for that we import HttpClientModule at our app.module.ts and at the service we import the HttpClient
- Then we need to import at our data service and inject to our card list component constructor
- at ngOninit we add a method to return the list of pokemons. Since we are returning from http client, it is an observable so we can subscribe to it
- The card component is reusable

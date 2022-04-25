![image](https://user-images.githubusercontent.com/6615820/165180541-8c5a9a1a-42c7-4c42-8134-626bd0927e01.png)
# Make Up a Mon - API

A NodeJS app to generate random ideas for Pokemon designs!

This endpoint allows for seeded generation. Meaning that a design can be truly random, OR a daily design can be generated for all users!
[I'm working on setting up the UI for this](https://github.com/dylbyl/mon-ui), but I got sidetracked learning React Native. Sorry!

## Install
- Clone repo
- In your terminal (I use gitbash), navigate to the repo's root folder
- Run `npm install`
- Run `npm run start`
- Test the endpoints below!

## Endpoints
- [http://localhost:3000/generatePokemon/random](http://localhost:3000/generatePokemon/random)
  - A truly random Pokemon design!  
- [http://localhost:3000/generatePokemon/daily](http://localhost:3000/generatePokemon/daily)
  - Generates a random Pokemon using the current date as the seed. Should be the same for all users for the entire day (based on server time)

## The Code
- For now, endpoints return similar Pokemon data structures.
  - 1-2 types
  - 3 "base designs" - animal, profession, objects, urban legends
  - 3 "descriptors" - random nouns, verbs, or adjectives
  - 3 "extra concepts" - abstract ideas, other professions (I need to decide on one spot to put them)
  - 3 "found in" spots - biomes, environments, or countries that you could find this Pokemon in
  - `isLegendary`, `hasMegaEvolution`, `hasAlternateForm` - three booleans that really only make sense if you know Pokemon
  - how many evolution stages the Pokemon has, 1-3
  - stat descriptions, but fun
  - seed and generation date - separate because I plan to generate non-date seeds in the future
- All possible values are pulled from static JSON files.
  - Each possible property has multiple inner categories
  - Before being sent to the randomizer, these categories are all compiled into one big array per property


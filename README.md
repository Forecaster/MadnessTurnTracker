# Mansions of Madness 2nd Edition Turn Tracker

## Introduction
We've found that keeping track of who's done what during a phase can be tricky, and the app doesn't have anything to help with this.
I couldn't find a digital turn tracker for Mansions of Madness. No websites or apps or anything. So I've simply made one. If you play Mansions of Madness 2nd edition this  might be for you.
I think it works best on a computer, but it will also work on smaller devices, but might only be borderline usable on a phone.

The app is hosted [here](https://towerofawesome.org/madnessturntracker/)

## Local Running
This application runs entierly on Javascript in the tab, with the exception of jQuery and Bootstrap which are loaded from my server. If you want to be able to run this offline you can simply download this repo, and download the two linked libraries from my server and change the links to point locally instead and everything will work the same.
If there is demand I could include the libraries in the repo instead to make it locally runable by default.

## Issues
Currently it's pretty basic. Not very many features. Which means not many things can go wrong. But if you encounter something that doesn't work do report it here!

## Suggestions
If you have a feature you'd like to see added create an issue here! You don't need to mark it in any way. I'll be able to tell and tag it appropriately. If the feature refers to a mechanic in the game, please provide a description to this mechanic, or a link to a description to make it easier for me!

## Saving
Data is saved in the browsers local storage after editing a name or performing an action or move or reset. All players (names and actions) are stored, as well as the entire message log.

#### Clicking the Add Player button does not trigger a save.

Saved data is loaded on page load to resume the previous session.

The button "Clear Save Data" can be used to wipe all stored data, causing the next page load to return to the default starting setup.

NOTE: If the browser doesn't support localStorage saving will not work. Up-to-date browsers should support localStorage.

## Instructions
For instructions see the [app page](https://towerofawesome.org/madnessturntracker/).

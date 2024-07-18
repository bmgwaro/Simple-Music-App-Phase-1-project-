# Music Application

## Description

Originally, this application was meant to play the music videos of every available song. However, due to copyright issues I was unable to embed the videos into my code and opted to improvise. 
As a user, you will be able to view a list of songs, see detailed information about each song, and add new songs to the list. You also have the option to to download songs for offline listening.

## Features
   - Fetches and displays a list of songs from the server.
   - Highlights songs on mouseover.
   - Loads song details on click.
   - Displays detailed information about a selected song, including name, artist, genre, and a link to the song.
   - Allows users to download a song and displays a confirmation message.
   - Provides a form to add new songs to the list.
   - Submits the new song to the server and updates the song list.

## Prerequisites
- Operating system
- Code editor
- JSON server
- Browser
- 2GB free disk space

## Getting Started
1. Click on this link in order to access the github repository containing this project;
[https://github.com/bmgwaro/Simple-Music-App-Phase-1-project-]

2. Click on fork and create a fork of the repository. 

3. Open your terminal and navigate into the directory where you would like to save the work using the `cd` command.

4. Feel free to copy and paste the following command in order to clone the repository into your local storage; 
`git clone git@github.com:bmgwaro/Simple-Music-App-Phase-1-project-.git`

5. Navigate into the newly cloned folder and type in the `code .` command in order to open it on your text editor.

## How to Use the Application

1. Load the Application:
When the page loads, the JavaScript fetches the list of available songs from the server and displays them.

2. Interact with the Song List:
Each song in the list is clickable. Clicking on a song fetches its details and displays them in the main section.

3. Select a Song:
Click on any song name in the list to view its details.

4. Song Details Display:
The details include the song's name, artist, genre, and a link to the song image. These are all displayed in the webpage.

5. Download a Song:
After viewing a song's details, click the "Download" button.
A message "This song has been downloaded successfully" will be displayed under the song details.

6. Adding a New Song
- Enter the song name, artist, genre, and link in the form located at the bottom of the page.
- Click the "Add Song" button to add the new song to the playlist. This sends a POST request to the server with the new song's data.
- The new song will be added to the song list, and you can click on it to view its details just like the existing songs.
_NB: When adding a new song to the list, you will have to refresh the page in order for it to show up._
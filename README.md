# Dubbing Interface App ( React + Vite )

Welcome to the Dubbing Interface Application, an interface displaying:

- A Basic video player that can play/pause a video. 
- Include a progress bar for seeking. 
- Audio player with recoding functionality
- Waveform visualization of the recording
- Show the current dialogue text below the video player. 
- Include editable fields for "Original Text" and "Translated Text". 
- Implement buttons to move between dialogues (mock data for 3-5 dialogues is sufficient). 
- Ensure the recorded audio can be played back in sync with the video.


## Table of Contents
- [Dubbing Interface App ( React + Vite )](#dubbing-interface-app--react--vite-)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Application Structure](#application-structure)
    - [Deployment](#deployment)

## Getting Started

### Installation
1. Clone the repository: `git clone https://github.com/PawanEpisode/dubbing-interface-app.git`
2. Change into the project directory: `cd dubbing-interface-app`
3. Install dependencies: `npm install`

### Usage
1. Start the development server: `npm run dev`
2. Open your browser and navigate to `http://localhost:5173/` to view the app.

### Application Structure
- `main.jsx` is the starting point for starting the application.
- `App.jsx` is the Global Parent Component wrapping up the application UI and logic.
- `package.json` is the JSON representation of all the packages that we need to build this application.
- `tailwind.config.js` file is the configuration file for the tailwind environment of the application.
1. All the assets, component files, css files as well as constants and helper functions residing in `src` folder
2. `assets` folder contains all the assets like images and icons.
3. `components` folder contains all the components like :
   - `CustomVideo Component`
   - `CustomAudioRecording Component`
<!-- 4. `contexts` folder contains themeContext 
5. `utils` folder contains `constants.js` file and `helperFunctions.js` file -->

### Deployment
<!-- 1. Open your browser and navigate to `https://catalogfi-app.vercel.app/` to view the app. -->
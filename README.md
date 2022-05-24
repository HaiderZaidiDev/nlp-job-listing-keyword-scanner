<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">NLP Keyword Scanner</h3>
  <p align="center">
    A web-app which scans keywords in a job listing, using the IBM Watson Natural Language Processing API.
	</p>
</p>


<!-- ABOUT THE PROJECT -->
## About The Project

![Demo Gif](https://i.imgur.com/dmDUe2S.gif)

### Built With

* React
* Node.js
* Express
* IBM Watson Natural Language Processing API

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Checkout the [IBM Watson Natural Language Processing API here](https://cloud.ibm.com/apidocs/natural-language-understanding), then create your own credentials and service urls. Set these to their respective environment variables: `apikey`, `serviceURL`

### Installation

1. Clone the repo
   ```sh
   https://github.com/HaiderZaidiDev/nlp-job-listing-keyword-scanner
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the React project.
   ```sh
   npm start
   ```
4. Start the API Proxy Server.
    ```sh
    cd server
    node server.js
    ```

<!-- USAGE EXAMPLES -->
## Usage

Paste the responsibilities section of a job listing (or really, any relevant information) onto the website to fetch important keywords - then, read through the list of keywords and try to include them in relevant bullet points.


_For an example, check the demo-gif above to see how the website works._


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

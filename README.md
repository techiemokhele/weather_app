# Hey 👋 There! 

## Welcome To The Weather Forecast App.

This is a 5-day weather forecast application built with Next.js, TypeScript, and Tailwind CSS. It follows a specific Figma design and uses real-world data from OpenWeatherMap and OpenCage APIs.

## Features

- 5-day weather forecast
- City search functionality
- Responsive design
- Real-time weather data including temperature, humidity, and wind speed
- Weather condition icons
- Dark/Light mode toggle

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- API keys for OpenWeatherMap and OpenCage (instructions below)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/techiemokhele/weather_app.git
   cd weather-forecast-app
   ```

2. Install the dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY=your_openweathermap_api_key
   NEXT_PUBLIC_OPENCAGE_API_KEY=your_opencage_api_key
   ```

## Running the Application

To run the application in development mode:

```
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## API Endpoints

This application uses two main API endpoints:

1. OpenCage Geocoding API:
   - Endpoint: `https://api.opencagedata.com/geocode/v1/json`
   - Used for city search functionality

2. OpenWeatherMap API:
   - Endpoint: `https://api.openweathermap.org/data/2.5/forecast`
   - Used for fetching weather forecast data

## Obtaining API Keys

### OpenWeatherMap API

1. Go to [OpenWeatherMap](https://openweathermap.org/) and sign up for a free account.
2. After logging in, go to your API keys section.
3. Generate a new API key or use the default one provided.

### OpenCage API

1. Visit [OpenCage](https://opencagedata.com/) and sign up for a free account.
2. After logging in, navigate to your dashboard.
3. You'll find your API key listed there.

## Deployment

This project is set up to be easily deployed on Vercel. To deploy:

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign up or log in.
3. Click "New Project" and select your GitHub repository.
4. Vercel will automatically detect that it's a Next.js project.
5. Add your environment variables (API keys) in the Vercel project settings.
6. Deploy!

## Contributing

Contributions to this project are welcome. Please ensure to update tests as appropriate.

## Project UI

### Weather Info (Light mode)

![Screenshot 2024-10-08 at 15 42 08](https://github.com/user-attachments/assets/a758a3fe-6de9-42bd-89b5-4059b46b4829)

### Weather Info (Dark mode)

![Screenshot 2024-10-08 at 15 41 58](https://github.com/user-attachments/assets/57a220f7-fdd4-4d10-8802-0c41620332e1)

### Search City (Light mode)

![Screenshot 2024-10-08 at 15 42 40](https://github.com/user-attachments/assets/4518b2e0-15e1-4afa-a6d9-ef2ad1c65765)

### Search City (Dark mode)

![Screenshot 2024-10-08 at 15 42 49](https://github.com/user-attachments/assets/7db93ae9-991e-42ca-a130-06665854da15)

### App In Action

https://github.com/user-attachments/assets/05dc5de7-90e3-46c5-9391-11a72027539f




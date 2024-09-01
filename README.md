# FastLane

Welcome to FastLane! This repository contains code for a cab services app, built using React Native, Expo, and other technologies, with backend services managed by Neon and Clerk.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Clerk Integration](#clerk-integration)
- [Support](#support)
- [Badges](#badges)

## Introduction

FastLane is a cab services app where users can book rides, view their ride history, manage profiles, and soon chat with drivers. This application is built using React Native and Expo, with backend services such as authentication, database, and file storage managed by Clerk and Neon.
## Features

- Ride booking and tracking.

- Ride history management.

- User profile management.

- Authentication and authorization using Clerk.

- Google OAuth integration for seamless login.

- Integration with serverless PostgreSQL for ride data storage using Neon.

- Smooth and responsive user interface with React Native and Expo.

- Utility-first styling with NativeWind.

- Upcoming feature: In-app chat for communication between users and drivers.
## Getting Started

To get started with the FastLane frontend, follow these steps:
### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/rr789451/FastLane.git

2. Install the required dependencies:

    ```bash
    npm install

3. Start the server:

    ```bash
    expo start

4. The application will be accessible through the **QR Code** provided in the terminal.
    
## Project Structure

The project follows a common Expo project structure:

- **app/index.jsx**: Entry point to the app with an onbording screen.

- **app/_layout.jsx**: Creates a layout for the application.

- **app/(auth)**: Contains the authentication screens for the application.

- **app/(tabs)**: Individual screens of the app (e.g., Home, Profile, Booking, History).

- **assets/**: Images, videos, and other static assets.

- **components/**: Reusable UI components used throughout the app.

- **constants/**: For global usage of static assets.

- **lib/**: Route definitions for API endpoints.
## Technologies Used

- ***React Native***:  Framework for building native apps using React.

- ***Expo***: Platform for developing, building, and deploying React Native apps.

- ***Clerk***: Authentication and user management service, providing seamless integration with Google OAuth.

- ***Neon***: Serverless PostgreSQL for managing ride data.

- ***Expo-Router***: Handles navigation and routing in the app, offering a file-based system that simplifies defining and managing routes in Expo projects.

- ***NativeWind***: Utility-first CSS for React Native, making it easy to style components.

## Clerk Integration

**FastLane** integrates with Clerk for the following functionalities:

- ***Authentication***: User registration, login, session management, and Google OAuth.
## Support

For support, email rr789451@gmail.com.


## Badges

[![Apache License 2.0](https://img.shields.io/badge/License-ApacheLicense2.0-green.svg)](https://choosealicense.com/licenses/apache-2.0/)

[![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://docs.expo.dev/)

[![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/docs/getting-started)

[![NativeWind](https://img.shields.io/badge/NativeWind-000000?style=for-the-badge&logo=wind&logoColor=white)](https://nativewind.dev/)

[![Clerk](https://img.shields.io/badge/Clerk-3F6FF0?logo=clerk&logoColor=white)](https://clerk.dev)

[![Neon](https://img.shields.io/badge/Neon-00A3E0?logo=postgresql&logoColor=white)](https://neon.tech)

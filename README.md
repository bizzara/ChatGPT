# Chat GPT Clone

Chat GPT Clone mobile app built using React Native Expo and Firebase. The app provides features like user login, registration, chat completion, and generating images.

![Chat GPT Mobile](https://i.ibb.co/RcNyyT6/chatgpt.png)

## Features

The Chat GPT Clone app offers the following features:

1. **User Authentication:**

-   Login: Existing users can log in using their credentials.
-   Register: New users can create an account by providing necessary information.

2. **Chat Completion:**

-   Users can engage in conversations with the Chat GPT model and receive intelligent responses.
-   The app utilizes the power of GPT-3.5, a large language model, to generate human-like text responses.

3. **Image Generation**

-   Users can generate images based on specific prompts or descriptions.
-   The app uses AI models and image generation algorithms to create images.

## Prerequisites

Before setting up the app, make sure you have the following prerequisites installed:

-   **Node.js**: Install Node.js from the official website (https://nodejs.org) or use a package manager like Homebrew (macOS) or Chocolatey (Windows).
-   **Expo CLI**: Install the Expo CLI globally by running the following command:

```shell
npm install --global expo-cli

```

-   **Firebase Account**: Create a Firebase account at https://firebase.google.com and set up a new project.

## Getting Started

To get started with the Chat GPT Clone app, follow these steps:

1. **Clone the repository:**

```shell
git clone https://github.com/bizzara/ChatGPT.git

cd ChatGPT
```

2. **Install dependencies:**

```shell
npm install
```

3. **Set up Firebase:**

-   Create a new Firebase project
-   Enable Authentication and Firestore services.
-   In the Firebase console, navigate to Project Settings and copy the Firebase configuration object.

4. **Configure Firebase in the app:**

-   Replace the placeholder values in firebaseHelper.js with your Firebase configuration values.

5. **Start the Expo development server:**

```shell
expo start
```

6. **Install the Expo Go app** on your iOS or Android device.
7. **Scan the QR code** displayed in the terminal or in the browser using the Expo Go app to launch the app on your device.
8. You should now be able to use the Chat GPT Clone app on your device.

## Technologies Used

The Chat GPT Clone app utilizes the following technologies:

-   **React Native**: A framework for building native apps using React.
-   **Expo**: A framework and platform for universal React applications.
-   **Firebase**: A backend-as-a-service platform for building web and mobile apps.
-   **GPT-3.5**: A state-of-the-art language model developed by OpenAI.

## Contributing

Contributions to the Chat GPT Clone app are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request

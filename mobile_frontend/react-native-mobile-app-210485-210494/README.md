# react-native-mobile-app-210485-210494

## Documentation
This repository includes GxP-aligned documentation for the mobile_frontend:

- Product Requirements Document (PRD): docs/PRD.md
- Architecture Overview: docs/Architecture.md
- Traceability Matrix: docs/TraceabilityMatrix.md
- Validation Plan: docs/ValidationPlan.md

Please review PRD and Architecture first to understand scope, non-functional requirements, and the proposed src/ layout, then consult the Traceability Matrix and Validation Plan for test readiness and compliance details.

## Build and Run Notes
- This project currently uses an Expo-managed workflow and does not include native Android/iOS folders by default.
- The previous CI error was due to invoking a Gradle build without an Android folder. The build script has been updated to avoid Gradle calls.
- To run locally:
  - npm install
  - npm run start
  - For platforms: npm run android | npm run ios | npm run web (requires appropriate simulators/emulators)
- To generate native projects, use Expo Prebuild:
  - npx expo prebuild
  - This will create android/ and ios/ folders, after which Gradle/Xcode builds can be invoked.
- For web artifacts in CI, use:
  - npm run build (uses expo export --platform web)

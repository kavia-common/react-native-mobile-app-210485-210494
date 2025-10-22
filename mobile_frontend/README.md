# mobile_frontend — Expo Managed

This package is the mobile app container for the repository. It uses an Expo-managed workflow and does not include native android/ or ios/ folders by default.

## Scripts
- start: expo start
- android: expo start --android
- ios: expo start --ios
- web: expo start --web
- lint: eslint .
- build: expo export --platform web (via npm run build)

## CI Guidance
- Do not execute ./gradlew in this package; it will fail because no native folders exist.
- See CI_NOTES.md for recommended CI steps.
- If native builds are needed, run `npx expo prebuild` first to generate native projects.

## Documentation Links
Refer to the repository root README for links to:
- docs/PRD.md
- docs/Architecture.md
- docs/TraceabilityMatrix.md
- docs/ValidationPlan.md

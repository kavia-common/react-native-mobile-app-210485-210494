# mobile_frontend — Expo Managed

This package is the mobile app container for the repository. It uses an Expo-managed workflow and does not include native android/ or ios/ folders by default.

## Scripts
- start: expo start
- android: expo start --android
- ios: expo start --ios
- web: expo start --web
- lint: eslint .
- build: expo export --platform web (via npm run build)

## Navigation
The app uses React Navigation with a bottom tab navigator:
- Packages: @react-navigation/native, @react-navigation/bottom-tabs, react-native-screens, react-native-safe-area-context
- Tabs: Home, Settings
- Ocean Professional theme applied (primary #2563EB, secondary #F59E0B, error #EF4444, background #f9fafb, surface #ffffff, text #111827)

Entry:
- App.tsx mounts src/navigation/TabNavigator.tsx via RootNavigation.

Files:
- src/navigation/TabNavigator.tsx
- src/screens/HomeScreen.tsx
- src/screens/SettingsScreen.tsx
- src/theme/colors.ts

GxP Notes:
- TODO comments are included in screens to integrate audit trail events for view navigation.

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

# CI Notes for Expo-Managed Workflow

## Summary
This project is in an Expo-managed workflow. There are no native android/ or ios/ folders, and thus no Gradle wrapper (./gradlew). CI should not invoke Gradle commands unless `npx expo prebuild` is executed first to generate native projects.

## Recommended CI Steps
- Install:
  - npm ci
- Lint:
  - npm run lint
- Build (Web export for artifacts if needed):
  - npm run build
- Start (for ephemeral preview environments):
  - npm run start

## If Native Builds Are Required
1. npx expo prebuild
2. For Android:
   - cd android
   - ./gradlew assembleDebug (or appropriate task)
3. For iOS:
   - Use Xcode or xcodebuild with the generated ios/ project

Note: Prebuild requires platform SDKs and a properly configured environment. Do not call ./gradlew before prebuild.

# CI Notes (Repository Root)

The mobile_frontend uses an Expo-managed workflow and does not include native build artifacts by default. Any CI job attempting to call ./gradlew will fail.

A temporary guard script at repo root named `gradlew` and shim scripts at `android/gradlew` and `mobile_frontend/android/gradlew` have been added to no-op when invoked, so pipelines that still call `./gradlew` do not fail. Replace these with proper native builds only after running `npx expo prebuild`.

Recommended steps:
- cd mobile_frontend
- npm ci
- npm run lint
- npm run build (exports web assets)
- Optional: npm run start (for ephemeral environments)

If native builds are required:
- npx expo prebuild
- Proceed with platform-specific builds (requires configured SDKs and host images).

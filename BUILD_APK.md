# Android APK build

The Android application is configured for APK generation with Expo/EAS.

## Local

```bash
npm ci
npx eas build --platform android --profile preview
```

The `preview` profile is intended to produce an installable APK for direct device testing.

## Release

```bash
npx eas build --platform android --profile production
```

Use the generated APK artifact for installation on an Android device. Do not publish a release until the app has been tested against the Bitey Web production contract.

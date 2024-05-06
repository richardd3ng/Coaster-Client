# Coaster
## Developer Guide
### Setup
1. Install [pnpm](https://pnpm.io/installation) (faster than npm) for package management
2. Install expo: `pnpm i expo -w` (this is the pattern for installing all packages with pnpm, do NOT use npm)
3. Clone this GitHub repository
8. In the project root, run `pnpm install`
9. In the project root, create a `.env` file with the format shown below (missing details will be provided by someone who knows them)
```
EXPO_DEV_MODE=false
ATLAS_URI="<database connection string>"
```
- Note: when adding new environment variables, also modify `src/types/env.d.ts`

### iOS Simulator (Mac only)
1. In `.env`, set `EXPO_DEV_MODE=false`
2. Install [XCode](https://developer.apple.com/xcode/) (takes a few hours)
3. Install iOS on XCode (takes ~1 hour): XCode > Settings > Platforms > iOS
4. In the project root, run `pnpm expo start`
5. Press i to open the iOS simulator
   
### Expo Go (all platforms)
Note: background location tracking capabilities aren't enabled on Expo Go
1. In `.env`, set `EXPO_DEV_MODE=true`
2. Download Expo Go on a mobile [iOS](https://apps.apple.com/us/app/expo-go/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US&pli=1) device
4. In the project root, run `pnpm expo start`
5. Scan the QR code with the Camera app (iOS) or Expo Go (Android)

### Prebuilding
1. See [Expo Prebuild](https://docs.expo.dev/workflow/prebuild/) if you need to generate native code for the project (Note: not a common workflow, ask beforehand if necessary)

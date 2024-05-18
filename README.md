# Coaster Client
## Developer Guide
### Setup
1. Install [pnpm](https://pnpm.io/installation) (faster than npm) for package management
2. Install expo: `pnpm i expo -w` (this is the pattern for installing all packages with pnpm, do NOT use npm)
3. Clone this GitHub repository
4. In the project root, run `pnpm install`
5. In the project root, create a `.env` file with the format shown below (missing details will be provided by someone who knows them)
```
EXPO_DEV_MODE=false
ATLAS_URI="<database connection string>"
GOOGLE_MAPS_API_KEY=<secret>
```
- Note: when adding new environment variables, also modify `src/types/env.d.ts`
6. The nodejs version (22.1.0) is specified in `.tool-versions`, and the xcode version (15.3 (15E204a)) in `.xcode-version`. You can use runtime version managers to manage these. For example: 
```
asdf local nodejs 22.1.0
xcodes select 15.3 (15E204a)
```

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

### Code Conventions
- Code Conventions generally follow [this guide](https://medium.com/@mahesh.nagpure.mailbox/react-native-coding-standard-structure-ab5c5f9e6784) and [this guide](https://gilshaan.medium.com/react-native-coding-standards-and-best-practices-5b4b5c9f4076)
- Follow existing directory structure (capitalization patterns, styling files, etc.)
- Organize imports in alphabetical order, grouped by React, npm libraries, and our own modules, separated by an empty line
- Use [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for VSCode

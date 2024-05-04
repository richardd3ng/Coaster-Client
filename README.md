# Coaster
## Developer Guide
1. Install [pnpm](https://pnpm.io/installation) (faster than npm) for package management
2. Install expo: `pnpm i expo -w`
3. Clone this repository
8. In the project root directory, run `pnpm install`
   
### iOS Simulator (Mac only)
1. Install [XCode](https://developer.apple.com/xcode/) (takes a few hours): 
3. Install iOS on XCode (takes ~1 hour): XCode > Settings > Platforms > iOS
4. In the project root directory, run `pnpm expo start`
5. Press i to open the iOS simulator
   
### Expo Go (all platforms)
1. Download Expo Go on a mobile [iOS](https://apps.apple.com/us/app/expo-go/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US&pli=1) device
2. In the project root directory, run `pnpm expo start`
3. Scan the QR code with the Camera app (iOS) or Expo Go (Android)

### Prebuilding
1. See [Expo Prebuild](https://docs.expo.dev/workflow/prebuild/) if you need to generate native code for the project (Note: not a common workflow, ask beforehand if necessary)

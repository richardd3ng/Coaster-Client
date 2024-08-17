## Coaster 🎧
Coaster is a mobile app inspired by a very good friend of mine who loves sharing music and travel memories - try it out [here!](https://docs.google.com/document/d/1_VbUTdMC4SZ2JUfEl9FTwajJKHST0oeqn6WOBA_RksU/edit?usp=sharing)
![coaster-mockup](https://github.com/user-attachments/assets/471bbbc9-78aa-47e4-973e-a36545c8a37c)

Coaster enhances your Spotify experience by:

- Clustering listened tracks geographically on an interactive map
- Offering playback previews and playlist creation
- Enabling sharing and filtering of song clusters with friends and the world
- Supporting location and music-based search queries
- Facilitating collaborative listening memories with friends
  
In summary, Coaster combines music playback, geolocation, and social features to create a unique, interactive music discovery platform! Click [here](https://drive.google.com/file/d/1kST7KaNh2zrtrXZanQ8jGdlfh0kDm5TU/view?usp=sharing) to view a demo.

## Developer Guide
### Setup
1. Install [pnpm](https://pnpm.io/installation) for package management
2. Install expo: `pnpm i expo -w` (this is the pattern for installing all packages with pnpm, do NOT use npm for installations in this repo)
3. Clone this GitHub repository
4. In the project root, run `pnpm install`
5. In the project root, create a `.env` file with the format shown below (missing details will be provided by someone who knows them)
```
BASE_URL = <Coaster server url i.e. http://localhost:3000>
SPOTIFY_CLIENT_ID = <secret>
SPOTIFY_CLIENT_SECRET = <secret>
SPOTIFY_REDIRECT_URI = coaster-spotify-login://callback
```
- Note: when adding new environment variables, also modify `src/types/env.d.ts` and run `pnpm start -- --reset-cache`
- Note: the dev server url may be different depending on whether you are using a simulator or a physical device
6. The nodejs version (22.1.0) is specified in `.tool-versions`, and the xcode version (15.3 (15E204a)) in `.xcode-version`. You can use runtime version managers to manage these. For example: 
```
asdf local nodejs 22.1.0
xcodes select 15.3 (15E204a)
```

### iOS Simulator (Mac only)
Note: deep-linking capabilities aren't enabled on the simulator
1. Install [XCode](https://developer.apple.com/xcode/)
2. Install iOS on XCode (takes ~1 hour): XCode > Settings > Platforms > iOS
3. In the project root, run `npx expo run:ios`
4. You can press `shift + i` in the Expo CLI to interactively select a simulator to open
5. To add additional simulator devices, see [this guide](https://developer.apple.com/documentation/safari-developer-tools/adding-additional-simulators)

### Building
1. See [this guide](https://docs.expo.dev/build/setup/) to setup Expo build tools
2. In the project root, run `eas build --profile [profile_name] --platform ios`, where `[profile_name]` can be `development`, `preview`, or `production`
3. Ask if you need Expo or Apple Developer account permissions
4. See [this guide](https://docs.expo.dev/debugging/runtime-issues/#production-errors) for debugging preview and production builds

### GraphQL Schema Sync
1. Start [Coaster-Server](https://github.com/jason-shang/Coaster-Server). Make sure the /graphql endpoint is working (should display a sandbox environment in the browser)
2. Open a seperate terminal. In the project root, run `pnpm graphql-codegen -w`
4. Changes involving graphql should be reflected in `src/gql/gql.ts` automatically

### Code Conventions
- Code Conventions generally follow [this guide](https://medium.com/@mahesh.nagpure.mailbox/react-native-coding-standard-structure-ab5c5f9e6784) and [this guide](https://gilshaan.medium.com/react-native-coding-standards-and-best-practices-5b4b5c9f4076)
- Follow existing directory structure (capitalization patterns, styling files, etc.)
- Organize imports in alphabetical order, grouped by React, npm libraries, and our own modules, separated by an empty line
- Use [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for VSCode

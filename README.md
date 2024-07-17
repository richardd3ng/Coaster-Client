# Coaster Client
## Developer Guide
### Setup
1. Install [pnpm](https://pnpm.io/installation) (faster than npm) for package management
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
Note: deep-linking capabilities aren't enabled on the simulator (i.e. opening other apps)
1. Install [XCode](https://developer.apple.com/xcode/) (takes a few hours)
2. Install iOS on XCode (takes ~1 hour): XCode > Settings > Platforms > iOS
3. In the project root, run `npx expo run:ios`
4. You can press `shift + i` in the Expo CLI to interactively select a simulator to open

### Prebuilding
1. See [Expo Prebuild](https://docs.expo.dev/workflow/prebuild/) if you need to generate native code for the project (Note: not a common workflow, ask beforehand if necessary)

### GraphQL 
1. Start [Coaster-Server](https://github.com/jason-shang/Coaster-Server). Make sure the /graphql endpoint is working (should display a sandbox environment in the browser)
2. Open a seperate terminal. In the project root, run `pnpm graphql-codegen -w`
3. Changes involving graphql should be reflected in `src/gql/gql.ts` automatically

### Code Conventions
- Code Conventions generally follow [this guide](https://medium.com/@mahesh.nagpure.mailbox/react-native-coding-standard-structure-ab5c5f9e6784) and [this guide](https://gilshaan.medium.com/react-native-coding-standards-and-best-practices-5b4b5c9f4076)
- Follow existing directory structure (capitalization patterns, styling files, etc.)
- Organize imports in alphabetical order, grouped by React, npm libraries, and our own modules, separated by an empty line
- Use [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for VSCode

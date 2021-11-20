# Quasar Serialport Test (quasar_serialport_test)

just a simple serial port test


## Status:
this *remake*
did not go so well...

to just get an fresh start i tried with:
- just start with a fresh quasar project
- `yarn add electron-rebuild`
- `yarn add serialport`
- `yarn electron-rebuild -f`
- copied over my `Serial.vue` file
- adapted router and layout for new file
- `quasar dev --mode electron`
- navigat to `Serial Test`
- got a `TypeError: SerialPort.list is not a function`
-  if i just remember what i had done else to get it working back then.... :see_no_evil:
- searched a bit and [followed](https://forum.quasar-framework.org/topic/4173/can-t-use-the-serialport-module-building-for-electron) the trace to [this SO question `Quasar Framework, Electron, and Serialport: indexOf Error`](https://stackoverflow.com/questions/62360403/quasar-framework-electron-and-serialport-indexof-error) -
 i tried to replicate this - but nothing changed..
 maybe i just had no luck this day?!

if i try to import or require the serialport in the vue file i get a bunch of import related errrors during the build -
```
App •  WAIT  • Compiling of "Renderer" in progress...
 App •  DONE  • "Renderer" compiled with errors • 415ms



 App •  ERROR  •  Renderer  in ./node_modules/@serialport/bindings/lib/darwin.js

Module not found: Can't resolve imported dependency "util"
Did you forget to install it? You can run: yarn add util
.....
```
(thsi list goes on and on and on)
seems then i try to import it in a way / context it is not meant...

- (other) things / snippets of information i found but did not manage to get combined in the correct way
    - [Electron Preload Script](https://quasar.dev/quasar-cli/developing-electron-apps/electron-preload-script)
    - [node-serialport pull request about context awareness](https://github.com/serialport/node-serialport/pull/2352)
    - [serialport install guide for electron](https://serialport.io/docs/guide-installation#electron)
    - [quasar doc: configuring-electron](https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron)


i posted this also at [how to use serialport in quasar electron? #11433](https://github.com/quasarframework/quasar/discussions/11433)






## Usage / Install the dependencies
```bash
git clone https://github.com/s-light/quasar_serialport_test.git
yarn
quasar dev --mode electron
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).


### reminders
```bash
yarn add serialport
yarn add electron-rebuild
quasar dev --mode electron
```

oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g react-native-utilities-cli
$ react-native-utilities-cli COMMAND
running command...
$ react-native-utilities-cli (--version)
react-native-utilities-cli/0.0.0 darwin-x64 node-v20.10.0
$ react-native-utilities-cli --help [COMMAND]
USAGE
  $ react-native-utilities-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`react-native-utilities-cli hello PERSON`](#react-native-utilities-cli-hello-person)
* [`react-native-utilities-cli hello world`](#react-native-utilities-cli-hello-world)
* [`react-native-utilities-cli help [COMMANDS]`](#react-native-utilities-cli-help-commands)
* [`react-native-utilities-cli plugins`](#react-native-utilities-cli-plugins)
* [`react-native-utilities-cli plugins:install PLUGIN...`](#react-native-utilities-cli-pluginsinstall-plugin)
* [`react-native-utilities-cli plugins:inspect PLUGIN...`](#react-native-utilities-cli-pluginsinspect-plugin)
* [`react-native-utilities-cli plugins:install PLUGIN...`](#react-native-utilities-cli-pluginsinstall-plugin-1)
* [`react-native-utilities-cli plugins:link PLUGIN`](#react-native-utilities-cli-pluginslink-plugin)
* [`react-native-utilities-cli plugins:uninstall PLUGIN...`](#react-native-utilities-cli-pluginsuninstall-plugin)
* [`react-native-utilities-cli plugins reset`](#react-native-utilities-cli-plugins-reset)
* [`react-native-utilities-cli plugins:uninstall PLUGIN...`](#react-native-utilities-cli-pluginsuninstall-plugin-1)
* [`react-native-utilities-cli plugins:uninstall PLUGIN...`](#react-native-utilities-cli-pluginsuninstall-plugin-2)
* [`react-native-utilities-cli plugins update`](#react-native-utilities-cli-plugins-update)

## `react-native-utilities-cli hello PERSON`

Say hello

```
USAGE
  $ react-native-utilities-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/ratatatatat/react-native-utilities-cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `react-native-utilities-cli hello world`

Say hello world

```
USAGE
  $ react-native-utilities-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ react-native-utilities-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/ratatatatat/react-native-utilities-cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `react-native-utilities-cli help [COMMANDS]`

Display help for react-native-utilities-cli.

```
USAGE
  $ react-native-utilities-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for react-native-utilities-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `react-native-utilities-cli plugins`

List installed plugins.

```
USAGE
  $ react-native-utilities-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ react-native-utilities-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/index.ts)_

## `react-native-utilities-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ react-native-utilities-cli plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ react-native-utilities-cli plugins add

EXAMPLES
  $ react-native-utilities-cli plugins add myplugin 

  $ react-native-utilities-cli plugins add https://github.com/someuser/someplugin

  $ react-native-utilities-cli plugins add someuser/someplugin
```

## `react-native-utilities-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ react-native-utilities-cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ react-native-utilities-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/inspect.ts)_

## `react-native-utilities-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ react-native-utilities-cli plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ react-native-utilities-cli plugins add

EXAMPLES
  $ react-native-utilities-cli plugins install myplugin 

  $ react-native-utilities-cli plugins install https://github.com/someuser/someplugin

  $ react-native-utilities-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/install.ts)_

## `react-native-utilities-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ react-native-utilities-cli plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ react-native-utilities-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/link.ts)_

## `react-native-utilities-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ react-native-utilities-cli plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ react-native-utilities-cli plugins unlink
  $ react-native-utilities-cli plugins remove

EXAMPLES
  $ react-native-utilities-cli plugins remove myplugin
```

## `react-native-utilities-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ react-native-utilities-cli plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/reset.ts)_

## `react-native-utilities-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ react-native-utilities-cli plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ react-native-utilities-cli plugins unlink
  $ react-native-utilities-cli plugins remove

EXAMPLES
  $ react-native-utilities-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/uninstall.ts)_

## `react-native-utilities-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ react-native-utilities-cli plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ react-native-utilities-cli plugins unlink
  $ react-native-utilities-cli plugins remove

EXAMPLES
  $ react-native-utilities-cli plugins unlink myplugin
```

## `react-native-utilities-cli plugins update`

Update installed plugins.

```
USAGE
  $ react-native-utilities-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/update.ts)_
<!-- commandsstop -->

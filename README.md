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
react-native-utilities-cli/0.0.3 darwin-x64 node-v20.10.0
$ react-native-utilities-cli --help [COMMAND]
USAGE
  $ react-native-utilities-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`react-native-utilities-cli add component DIRECTORY COMPONENTNAME`](#react-native-utilities-cli-add-component-directory-componentname)
* [`react-native-utilities-cli help [COMMANDS]`](#react-native-utilities-cli-help-commands)
* [`react-native-utilities-cli initialize DIRECTORY`](#react-native-utilities-cli-initialize-directory)

## `react-native-utilities-cli add component DIRECTORY COMPONENTNAME`

Create a component with some boilerplate

```
USAGE
  $ react-native-utilities-cli add component DIRECTORY COMPONENTNAME [-h]

ARGUMENTS
  DIRECTORY      Fullpath to react-native project directory.
  COMPONENTNAME  Name of the component to create.

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Create a component with some boilerplate

EXAMPLES
  $ oex initialize
```

_See code: [src/commands/add/component.ts](https://github.com/ratatatatat/react-native-utilities-cli/blob/v0.0.3/src/commands/add/component.ts)_

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

## `react-native-utilities-cli initialize DIRECTORY`

Initialize the project, by adding baseline screens, navigation and redux stores for the screens.

```
USAGE
  $ react-native-utilities-cli initialize DIRECTORY [-h]

ARGUMENTS
  DIRECTORY  Fullpath to react-native project directory.

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Initialize the project, by adding baseline screens, navigation and redux stores for the screens.

EXAMPLES
  $ oex initialize
```

_See code: [src/commands/initialize.ts](https://github.com/ratatatatat/react-native-utilities-cli/blob/v0.0.3/src/commands/initialize.ts)_
<!-- commandsstop -->

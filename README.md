samui-collection-starter
=================

A cli to create a NFT Collection


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/samui-collection-starter.svg)](https://npmjs.org/package/samui-collection-starter)
[![Downloads/week](https://img.shields.io/npm/dw/samui-collection-starter.svg)](https://npmjs.org/package/samui-collection-starter)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g samui-collection-starter
$ samui-collection-starter COMMAND
running command...
$ samui-collection-starter (--version)
samui-collection-starter/0.0.0 darwin-arm64 node-v22.12.0
$ samui-collection-starter --help [COMMAND]
USAGE
  $ samui-collection-starter COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`samui-collection-starter hello PERSON`](#samui-collection-starter-hello-person)
* [`samui-collection-starter hello world`](#samui-collection-starter-hello-world)
* [`samui-collection-starter help [COMMAND]`](#samui-collection-starter-help-command)
* [`samui-collection-starter plugins`](#samui-collection-starter-plugins)
* [`samui-collection-starter plugins add PLUGIN`](#samui-collection-starter-plugins-add-plugin)
* [`samui-collection-starter plugins:inspect PLUGIN...`](#samui-collection-starter-pluginsinspect-plugin)
* [`samui-collection-starter plugins install PLUGIN`](#samui-collection-starter-plugins-install-plugin)
* [`samui-collection-starter plugins link PATH`](#samui-collection-starter-plugins-link-path)
* [`samui-collection-starter plugins remove [PLUGIN]`](#samui-collection-starter-plugins-remove-plugin)
* [`samui-collection-starter plugins reset`](#samui-collection-starter-plugins-reset)
* [`samui-collection-starter plugins uninstall [PLUGIN]`](#samui-collection-starter-plugins-uninstall-plugin)
* [`samui-collection-starter plugins unlink [PLUGIN]`](#samui-collection-starter-plugins-unlink-plugin)
* [`samui-collection-starter plugins update`](#samui-collection-starter-plugins-update)

## `samui-collection-starter hello PERSON`

Say hello

```
USAGE
  $ samui-collection-starter hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ samui-collection-starter hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/samui-build/samui-collection-starter/blob/v0.0.0/src/commands/hello/index.ts)_

## `samui-collection-starter hello world`

Say hello world

```
USAGE
  $ samui-collection-starter hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ samui-collection-starter hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/samui-build/samui-collection-starter/blob/v0.0.0/src/commands/hello/world.ts)_

## `samui-collection-starter help [COMMAND]`

Display help for samui-collection-starter.

```
USAGE
  $ samui-collection-starter help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for samui-collection-starter.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.23/src/commands/help.ts)_

## `samui-collection-starter plugins`

List installed plugins.

```
USAGE
  $ samui-collection-starter plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ samui-collection-starter plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.28/src/commands/plugins/index.ts)_

## `samui-collection-starter plugins add PLUGIN`

Installs a plugin into samui-collection-starter.

```
USAGE
  $ samui-collection-starter plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into samui-collection-starter.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the SAMUI_COLLECTION_STARTER_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SAMUI_COLLECTION_STARTER_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ samui-collection-starter plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ samui-collection-starter plugins add myplugin

  Install a plugin from a github url.

    $ samui-collection-starter plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ samui-collection-starter plugins add someuser/someplugin
```

## `samui-collection-starter plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ samui-collection-starter plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ samui-collection-starter plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.28/src/commands/plugins/inspect.ts)_

## `samui-collection-starter plugins install PLUGIN`

Installs a plugin into samui-collection-starter.

```
USAGE
  $ samui-collection-starter plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into samui-collection-starter.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the SAMUI_COLLECTION_STARTER_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SAMUI_COLLECTION_STARTER_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ samui-collection-starter plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ samui-collection-starter plugins install myplugin

  Install a plugin from a github url.

    $ samui-collection-starter plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ samui-collection-starter plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.28/src/commands/plugins/install.ts)_

## `samui-collection-starter plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ samui-collection-starter plugins link PATH [-h] [--install] [-v]

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
  $ samui-collection-starter plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.28/src/commands/plugins/link.ts)_

## `samui-collection-starter plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ samui-collection-starter plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ samui-collection-starter plugins unlink
  $ samui-collection-starter plugins remove

EXAMPLES
  $ samui-collection-starter plugins remove myplugin
```

## `samui-collection-starter plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ samui-collection-starter plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.28/src/commands/plugins/reset.ts)_

## `samui-collection-starter plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ samui-collection-starter plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ samui-collection-starter plugins unlink
  $ samui-collection-starter plugins remove

EXAMPLES
  $ samui-collection-starter plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.28/src/commands/plugins/uninstall.ts)_

## `samui-collection-starter plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ samui-collection-starter plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ samui-collection-starter plugins unlink
  $ samui-collection-starter plugins remove

EXAMPLES
  $ samui-collection-starter plugins unlink myplugin
```

## `samui-collection-starter plugins update`

Update installed plugins.

```
USAGE
  $ samui-collection-starter plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.28/src/commands/plugins/update.ts)_
<!-- commandsstop -->

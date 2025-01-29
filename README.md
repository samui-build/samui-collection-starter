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
samui-collection-starter/0.0.0 linux-x64 node-v20.18.2
$ samui-collection-starter --help [COMMAND]
USAGE
  $ samui-collection-starter COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`samui-collection-starter config`](#samui-collection-starter-config)
* [`samui-collection-starter help [COMMAND]`](#samui-collection-starter-help-command)
* [`samui-collection-starter mpl-core asset burn ASSET`](#samui-collection-starter-mpl-core-asset-burn-asset)
* [`samui-collection-starter mpl-core asset create COLLECTION`](#samui-collection-starter-mpl-core-asset-create-collection)
* [`samui-collection-starter mpl-core asset get ASSET`](#samui-collection-starter-mpl-core-asset-get-asset)
* [`samui-collection-starter mpl-core asset list COLLECTION`](#samui-collection-starter-mpl-core-asset-list-collection)
* [`samui-collection-starter mpl-core collection burn COLLECTION`](#samui-collection-starter-mpl-core-collection-burn-collection)
* [`samui-collection-starter mpl-core collection create [NAME] [URI]`](#samui-collection-starter-mpl-core-collection-create-name-uri)
* [`samui-collection-starter mpl-core collection get COLLECTION`](#samui-collection-starter-mpl-core-collection-get-collection)
* [`samui-collection-starter mpl-core collection list [AUTHORITY]`](#samui-collection-starter-mpl-core-collection-list-authority)
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

## `samui-collection-starter config`

Show the configuration of the CLI

```
USAGE
  $ samui-collection-starter config [--keypair-path <value>] [--rpc-url <value>] [--rpc-url-ws <value>]

GLOBAL FLAGS
  --keypair-path=<value>  [default: ~/.config/solana/id.json] Specify the Solana keypair path.
  --rpc-url=<value>       [default: https://api.devnet.solana.com/] Specify the Solana RPC URL.
  --rpc-url-ws=<value>    Specify the Solana RPC websocket URL, default will be inferred from the RPC URL.

DESCRIPTION
  Show the configuration of the CLI
```

_See code: [src/commands/config.ts](https://github.com/samui-build/samui-collection-starter/blob/v0.0.0/src/commands/config.ts)_

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

## `samui-collection-starter mpl-core asset burn ASSET`

Burn an asset

```
USAGE
  $ samui-collection-starter mpl-core asset burn ASSET [--keypair-path <value>] [--rpc-url <value>] [--rpc-url-ws
  <value>]

ARGUMENTS
  ASSET  Asset address

GLOBAL FLAGS
  --keypair-path=<value>  [default: ~/.config/solana/id.json] Specify the Solana keypair path.
  --rpc-url=<value>       [default: https://api.devnet.solana.com/] Specify the Solana RPC URL.
  --rpc-url-ws=<value>    Specify the Solana RPC websocket URL, default will be inferred from the RPC URL.

DESCRIPTION
  Burn an asset
```

_See code: [src/commands/mpl-core/asset/burn.ts](https://github.com/samui-build/samui-collection-starter/blob/v0.0.0/src/commands/mpl-core/asset/burn.ts)_

## `samui-collection-starter mpl-core asset create COLLECTION`

Create an asset in a collection

```
USAGE
  $ samui-collection-starter mpl-core asset create COLLECTION -n <value> -u <value> [--keypair-path <value>] [--rpc-url
    <value>] [--rpc-url-ws <value>]

ARGUMENTS
  COLLECTION  Collection address

FLAGS
  -n, --name=<value>  (required) Asset name
  -u, --uri=<value>   (required) Asset Metadata URI

GLOBAL FLAGS
  --keypair-path=<value>  [default: ~/.config/solana/id.json] Specify the Solana keypair path.
  --rpc-url=<value>       [default: https://api.devnet.solana.com/] Specify the Solana RPC URL.
  --rpc-url-ws=<value>    Specify the Solana RPC websocket URL, default will be inferred from the RPC URL.

DESCRIPTION
  Create an asset in a collection
```

_See code: [src/commands/mpl-core/asset/create.ts](https://github.com/samui-build/samui-collection-starter/blob/v0.0.0/src/commands/mpl-core/asset/create.ts)_

## `samui-collection-starter mpl-core asset get ASSET`

Get an asset

```
USAGE
  $ samui-collection-starter mpl-core asset get ASSET [--keypair-path <value>] [--rpc-url <value>] [--rpc-url-ws
  <value>]

ARGUMENTS
  ASSET  Asset address

GLOBAL FLAGS
  --keypair-path=<value>  [default: ~/.config/solana/id.json] Specify the Solana keypair path.
  --rpc-url=<value>       [default: https://api.devnet.solana.com/] Specify the Solana RPC URL.
  --rpc-url-ws=<value>    Specify the Solana RPC websocket URL, default will be inferred from the RPC URL.

DESCRIPTION
  Get an asset
```

_See code: [src/commands/mpl-core/asset/get.ts](https://github.com/samui-build/samui-collection-starter/blob/v0.0.0/src/commands/mpl-core/asset/get.ts)_

## `samui-collection-starter mpl-core asset list COLLECTION`

List assets by collection

```
USAGE
  $ samui-collection-starter mpl-core asset list COLLECTION [--keypair-path <value>] [--rpc-url <value>] [--rpc-url-ws
    <value>]

ARGUMENTS
  COLLECTION  Collection address

GLOBAL FLAGS
  --keypair-path=<value>  [default: ~/.config/solana/id.json] Specify the Solana keypair path.
  --rpc-url=<value>       [default: https://api.devnet.solana.com/] Specify the Solana RPC URL.
  --rpc-url-ws=<value>    Specify the Solana RPC websocket URL, default will be inferred from the RPC URL.

DESCRIPTION
  List assets by collection
```

_See code: [src/commands/mpl-core/asset/list.ts](https://github.com/samui-build/samui-collection-starter/blob/v0.0.0/src/commands/mpl-core/asset/list.ts)_

## `samui-collection-starter mpl-core collection burn COLLECTION`

Burn a collection

```
USAGE
  $ samui-collection-starter mpl-core collection burn COLLECTION [--keypair-path <value>] [--rpc-url <value>] [--rpc-url-ws
    <value>]

ARGUMENTS
  COLLECTION  Collection address

GLOBAL FLAGS
  --keypair-path=<value>  [default: ~/.config/solana/id.json] Specify the Solana keypair path.
  --rpc-url=<value>       [default: https://api.devnet.solana.com/] Specify the Solana RPC URL.
  --rpc-url-ws=<value>    Specify the Solana RPC websocket URL, default will be inferred from the RPC URL.

DESCRIPTION
  Burn a collection
```

_See code: [src/commands/mpl-core/collection/burn.ts](https://github.com/samui-build/samui-collection-starter/blob/v0.0.0/src/commands/mpl-core/collection/burn.ts)_

## `samui-collection-starter mpl-core collection create [NAME] [URI]`

Create a collection

```
USAGE
  $ samui-collection-starter mpl-core collection create [NAME] [URI] [--keypair-path <value>] [--rpc-url <value>] [--rpc-url-ws
    <value>]

ARGUMENTS
  NAME  Collection name
  URI   Collection Metadata URI

GLOBAL FLAGS
  --keypair-path=<value>  [default: ~/.config/solana/id.json] Specify the Solana keypair path.
  --rpc-url=<value>       [default: https://api.devnet.solana.com/] Specify the Solana RPC URL.
  --rpc-url-ws=<value>    Specify the Solana RPC websocket URL, default will be inferred from the RPC URL.

DESCRIPTION
  Create a collection
```

_See code: [src/commands/mpl-core/collection/create.ts](https://github.com/samui-build/samui-collection-starter/blob/v0.0.0/src/commands/mpl-core/collection/create.ts)_

## `samui-collection-starter mpl-core collection get COLLECTION`

Get a collection

```
USAGE
  $ samui-collection-starter mpl-core collection get COLLECTION [--keypair-path <value>] [--rpc-url <value>] [--rpc-url-ws
    <value>]

ARGUMENTS
  COLLECTION  Collection address

GLOBAL FLAGS
  --keypair-path=<value>  [default: ~/.config/solana/id.json] Specify the Solana keypair path.
  --rpc-url=<value>       [default: https://api.devnet.solana.com/] Specify the Solana RPC URL.
  --rpc-url-ws=<value>    Specify the Solana RPC websocket URL, default will be inferred from the RPC URL.

DESCRIPTION
  Get a collection
```

_See code: [src/commands/mpl-core/collection/get.ts](https://github.com/samui-build/samui-collection-starter/blob/v0.0.0/src/commands/mpl-core/collection/get.ts)_

## `samui-collection-starter mpl-core collection list [AUTHORITY]`

List collections for a given authority

```
USAGE
  $ samui-collection-starter mpl-core collection list [AUTHORITY] [--keypair-path <value>] [--rpc-url <value>] [--rpc-url-ws
    <value>]

ARGUMENTS
  AUTHORITY  authority to list collections for, defaults to the signer address

GLOBAL FLAGS
  --keypair-path=<value>  [default: ~/.config/solana/id.json] Specify the Solana keypair path.
  --rpc-url=<value>       [default: https://api.devnet.solana.com/] Specify the Solana RPC URL.
  --rpc-url-ws=<value>    Specify the Solana RPC websocket URL, default will be inferred from the RPC URL.

DESCRIPTION
  List collections for a given authority
```

_See code: [src/commands/mpl-core/collection/list.ts](https://github.com/samui-build/samui-collection-starter/blob/v0.0.0/src/commands/mpl-core/collection/list.ts)_

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

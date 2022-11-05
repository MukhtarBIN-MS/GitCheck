import React from "react";
import { ScrollView } from "react-native";
import Structure from "./Structure";


const SetupAndConfig = () => {
  return (
    <ScrollView style={{ flexDirection:'column'}}>
     <Structure
        header="GIT"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git"
        text2="the stupid content tracker"
        text3="git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
        [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
        [-p|--paginate|-P|--no-pager] [--no-replace-objects] [--bare]
        [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
        [--super-prefix=<path>] [--config-env=<name>=<envvar>]
        <command> [<args>]"
     />
    <Structure
        header="CONFIG"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-config"
        text2="Get and set repository or global options"
        text3="git config [<file-option>] [--type=<type>] [--fixed-value] [--show-origin] [--show-scope] [-z|--null] <name> [<value> [<value-pattern>]]
        git config [<file-option>] [--type=<type>] --add <name> <value>
        git config [<file-option>] [--type=<type>] [--fixed-value] --replace-all <name> <value> [<value-pattern>]
        git config [<file-option>] [--type=<type>] [--show-origin] [--show-scope] [-z|--null] [--fixed-value] --get <name> [<value-pattern>]
        git config [<file-option>] [--type=<type>] [--show-origin] [--show-scope] [-z|--null] [--fixed-value] --get-all <name> [<value-pattern>]
        git config [<file-option>] [--type=<type>] [--show-origin] [--show-scope] [-z|--null] [--fixed-value] [--name-only] --get-regexp <name-regex> [<value-pattern>]
        git config [<file-option>] [--type=<type>] [-z|--null] --get-urlmatch <name> <URL>
        git config [<file-option>] [--fixed-value] --unset <name> [<value-pattern>]
        git config [<file-option>] [--fixed-value] --unset-all <name> [<value-pattern>]
        git config [<file-option>] --rename-section <old-name> <new-name>
        git config [<file-option>] --remove-section <name>
        git config [<file-option>] [--show-origin] [--show-scope] [-z|--null] [--name-only] -l | --list
        git config [<file-option>] --get-color <name> [<default>]
        git config [<file-option>] --get-colorbool <name> [<stdout-is-tty>]
        git config [<file-option>] -e | --edit"
     />
        <Structure
        header="HELP"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-help"
        text2="Display help information about Git"
        text3="git help [-a|--all] [--[no-]verbose] [--[no-]external-commands] [--[no-]aliases]
        git help [[-i|--info] [-m|--man] [-w|--web]] [<command>|<doc>]
        git help [-g|--guides]
        git help [-c|--config]
        git help [--user-interfaces]
        git help [--developer-interfaces]"
     />
        <Structure
        header="BUG REPORT"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-bugreport"
        text2=" Collect information for user to file a bug report"
        text3="git bugreport [(-o | --output-directory) <path>] [(-s | --suffix) <format>]
        [--diagnose[=<mode>]]"
     />
    </ScrollView>
  );
};
export default SetupAndConfig;



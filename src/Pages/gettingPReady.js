import React from 'react'
import { Text, ScrollView } from 'react-native';
import Structure from './Structure';

const GettingPReady =()=> {
    return (
      <ScrollView style={{ flexDirection:'column'}}>
       <Structure
        header="INIT"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-init"
        text2="Create an empty Git repository or reinitialize an existing one"
        text3="git init [-q | --quiet] [--bare] [--template=<template-directory>]
        [--separate-git-dir <git-dir>] [--object-format=<format>]
        [-b <branch-name> | --initial-branch=<branch-name>]
        [--shared[=<permissions>]] [<directory>"
     />
      <Structure
        header="CLONE"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-clone"
        text2="Clone a repository into a new directory"
        text3="git clone [--template=<template-directory>]
        [-l] [-s] [--no-hardlinks] [-q] [-n] [--bare] [--mirror]
        [-o <name>] [-b <name>] [-u <upload-pack>] [--reference <repository>]
        [--dissociate] [--separate-git-dir <git-dir>]
        [--depth <depth>] [--[no-]single-branch] [--no-tags]
        [--recurse-submodules[=<pathspec>]] [--[no-]shallow-submodules]
        [--[no-]remote-submodules] [--jobs <n>] [--sparse] [--[no-]reject-shallow]
        [--filter=<filter> [--also-filter-submodules]] [--] <repository>
        [<directory>]"
     />
      </ScrollView>
    )
}
export default GettingPReady;
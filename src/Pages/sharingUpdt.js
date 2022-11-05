import React from "react";
import { Text, ScrollView } from "react-native";
import Structure from "./Structure";

const SharingUpdt = () => {
  return (
    <ScrollView style={{ flexDirection: "column" }}>
      <Structure
        header="FETCH"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-fetch"
        text2="Download objects and refs from another repository"
        text3="git fetch [<options>] [<repository> [<refspec>…​]]
        git fetch [<options>] <group>
        git fetch --multiple [<options>] [(<repository> | <group>)…​]
        git fetch --all [<options>]"
      />
      <Structure
        header="PULL"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-pull"
        text2="Fetch from and integrate with another repository or a local branch"
        text3="git pull [<options>] [<repository> [<refspec>…​]]"
      />
      <Structure
        header="PUSH"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-push"
        text2="Update remote refs along with associated objects"
        text3="git push [--all | --mirror | --tags] [--follow-tags] [--atomic] [-n | --dry-run] [--receive-pack=<git-receive-pack>]
        [--repo=<repository>] [-f | --force] [-d | --delete] [--prune] [-v | --verbose]
        [-u | --set-upstream] [-o <string> | --push-option=<string>]
        [--[no-]signed|--signed=(true|false|if-asked)]
        [--force-with-lease[=<refname>[:<expect>]] [--force-if-includes]]
        [--no-verify] [<repository> [<refspec>…​]]"
      />
      <Structure
        header="REMOTE"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-remote"
        text2="Manage set of tracked repositories"
        text3="git remote [-v | --verbose]
        git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=(fetch|push)] <name> <URL>
        git remote rename [--[no-]progress] <old> <new>
        git remote remove <name>
        git remote set-head <name> (-a | --auto | -d | --delete | <branch>)
        git remote set-branches [--add] <name> <branch>…​
        git remote get-url [--push] [--all] <name>
        git remote set-url [--push] <name> <newurl> [<oldurl>]
        git remote set-url --add [--push] <name> <newurl>
        git remote set-url --delete [--push] <name> <URL>
        git remote [-v | --verbose] show [-n] <name>…​
        git remote prune [-n | --dry-run] <name>…​
        git remote [-v | --verbose] update [-p | --prune] [(<group> | <remote>)…​]"
      />
      <Structure
        header="SUBMODULE"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-submodule "
        text2="Initialize, update or inspect submodules"
        text3="git submodule [--quiet] [--cached]
        git submodule [--quiet] add [<options>] [--] <repository> [<path>]
        git submodule [--quiet] status [--cached] [--recursive] [--] [<path>…​]
        git submodule [--quiet] init [--] [<path>…​]
        git submodule [--quiet] deinit [-f|--force] (--all|[--] <path>…​)
        git submodule [--quiet] update [<options>] [--] [<path>…​]
        git submodule [--quiet] set-branch [<options>] [--] <path>
        git submodule [--quiet] set-url [--] <path> <newurl>
        git submodule [--quiet] summary [<options>] [--] [<path>…​]
        git submodule [--quiet] foreach [--recursive] <command>
        git submodule [--quiet] sync [--recursive] [--] [<path>…​]
        git submodule [--quiet] absorbgitdirs [--] [<path>…​]"
      />
    </ScrollView>
  );
};
export default SharingUpdt;

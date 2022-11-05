import React from "react";
import { Text, ScrollView } from "react-native";
import Structure from "./Structure";

const BranchingM = () => {
  return (
    <ScrollView style={{ flexDirection: "column" }}>
      <Structure
        header="BRANCH"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-branch"
        text2="List, create, or delete branches"
        text3="git branch [--color[=<when>] | --no-color] [--show-current]
        [-v [--abbrev=<n> | --no-abbrev]]
        [--column[=<options>] | --no-column] [--sort=<key>]
        [--merged [<commit>]] [--no-merged [<commit>]]
        [--contains [<commit>]] [--no-contains [<commit>]]
        [--points-at <object>] [--format=<format>]
        [(-r | --remotes) | (-a | --all)]
        [--list] [<pattern>…​]
      git branch [--track[=(direct|inherit)] | --no-track] [-f]
        [--recurse-submodules] <branchname> [<start-point>]
      git branch (--set-upstream-to=<upstream> | -u <upstream>) [<branchname>]
      git branch --unset-upstream [<branchname>]
      git branch (-m | -M) [<oldbranch>] <newbranch>
      git branch (-c | -C) [<oldbranch>] <newbranch>
      git branch (-d | -D) [-r] <branchname>…​
      git branch --edit-description [<branchname>]"
      />
      <Structure
        header="CHECKOUT"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-checkout"
        text2="Switch branches or restore working tree files"
        text3="git checkout [-q] [-f] [-m] [<branch>]
        git checkout [-q] [-f] [-m] --detach [<branch>]
        git checkout [-q] [-f] [-m] [--detach] <commit>
        git checkout [-q] [-f] [-m] [[-b|-B|--orphan] <new-branch>] [<start-point>]
        git checkout [-f|--ours|--theirs|-m|--conflict=<style>] [<tree-ish>] [--] <pathspec>…​
        git checkout [-f|--ours|--theirs|-m|--conflict=<style>] [<tree-ish>] --pathspec-from-file=<file> [--pathspec-file-nul]
        git checkout (-p|--patch) [<tree-ish>] [--] [<pathspec>…​]"
      />
      <Structure
        header="SWITCH"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-switch"
        text2="Switch branches"
        text3="git switch [<options>] [--no-guess] <branch>
        git switch [<options>] --detach [<start-point>]
        git switch [<options>] (-c|-C) <new-branch> [<start-point>]
        git switch [<options>] --orphan <new-branch>"
      />
      <Structure
        header="MERGE"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-merge"
        text2="Join two or more development histories together"
        text3="git merge [-n] [--stat] [--no-commit] [--squash] [--[no-]edit]
        [--no-verify] [-s <strategy>] [-X <strategy-option>] [-S[<keyid>]]
        [--[no-]allow-unrelated-histories]
        [--[no-]rerere-autoupdate] [-m <msg>] [-F <file>]
        [--into-name <branch>] [<commit>…​]
      git merge (--continue | --abort | --quit)"
      />
      <Structure
        header="MERGE TOOL"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-mergetool"
        text2="Run merge conflict resolution tools to resolve merge conflicts"
        text3="git mergetool [--tool=<tool>] [-y | --[no-]prompt] [<file>…​]"
      />
      <Structure
        header="LOG"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-log"
        text2="Show commit logs"
        text3="git log [<options>] [<revision-range>] [[--] <path>…​]"
      />
      <Structure
        header="STASH"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-stash"
        text2="Stash the changes in a dirty working directory away"
        text3="git stash list [<log-options>]
        git stash show [-u|--include-untracked|--only-untracked] [<diff-options>] [<stash>]
        git stash drop [-q|--quiet] [<stash>]
        git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
        git stash branch <branchname> [<stash>]
        git stash [push [-p|--patch] [-S|--staged] [-k|--[no-]keep-index] [-q|--quiet]
               [-u|--include-untracked] [-a|--all] [-m|--message <message>]
               [--pathspec-from-file=<file> [--pathspec-file-nul]]
               [--] [<pathspec>…​]]
        git stash clear
        git stash create [<message>]
        git stash store [-m|--message <message>] [-q|--quiet] <commit>"
      />
      <Structure
        header="TAG"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-tag"
        text2="Create, list, delete or verify a tag object signed with GPG"
        text3="git tag [-a | -s | -u <keyid>] [-f] [-m <msg> | -F <file>] [-e]
        <tagname> [<commit> | <object>]
      git tag -d <tagname>…​
      git tag [-n[<num>]] -l [--contains <commit>] [--no-contains <commit>]
        [--points-at <object>] [--column[=<options>] | --no-column]
        [--create-reflog] [--sort=<key>] [--format=<format>]
        [--merged <commit>] [--no-merged <commit>] [<pattern>…​]
      git tag -v [--format=<format>] <tagname>…​"
      />
      <Structure
        header="WORK TREE"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-worktree "
        text2="Manage multiple working trees"
        text3="git worktree add [-f] [--detach] [--checkout] [--lock [--reason <string>]] [-b <new-branch>] <path> [<commit-ish>]
        git worktree list [-v | --porcelain [-z]]
        git worktree lock [--reason <string>] <worktree>
        git worktree move <worktree> <new-path>
        git worktree prune [-n] [-v] [--expire <expire>]
        git worktree remove [-f] <worktree>
        git worktree repair [<path>…​]
        git worktree unlock <worktree>"
      />
    </ScrollView>
  );
};
export default BranchingM;

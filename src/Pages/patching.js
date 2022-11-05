import React from "react";
import { Text, ScrollView } from "react-native";
import Structure from "./Structure";

const Patching = () => {
  return (
    <ScrollView style={{ flexDirection:'column'}}>
      <Structure
        header="APPLY"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-apply"
        text2="Apply a patch to files and/or to the index"
        text3="git apply [--stat] [--numstat] [--summary] [--check] [--index | --intent-to-add] [--3way]
        [--apply] [--no-add] [--build-fake-ancestor=<file>] [-R | --reverse]
        [--allow-binary-replacement | --binary] [--reject] [-z]
        [-p<n>] [-C<n>] [--inaccurate-eof] [--recount] [--cached]
        [--ignore-space-change | --ignore-whitespace]
        [--whitespace=(nowarn|warn|fix|error|error-all)]
        [--exclude=<path>] [--include=<path>] [--directory=<root>]
        [--verbose | --quiet] [--unsafe-paths] [--allow-empty] [<patch>"
      />
      <Structure
        header="CHERRY-PICK"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-cherry-pick"
        text2="Apply the changes introduced by some existing commits"
        text3="git cherry-pick [--edit] [-n] [-m <parent-number>] [-s] [-x] [--ff]
        [-S[<keyid>]] <commit>…​
  git cherry-pick (--continue | --skip | --abort | --quit)"
      />
      <Structure
        header="DIFF"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-diff"
        text2="Show changes between commits, commit and working tree, etc"
        text3="git diff [<options>] [<commit>] [--] [<path>…​]
        git diff [<options>] --cached [--merge-base] [<commit>] [--] [<path>…​]
        git diff [<options>] [--merge-base] <commit> [<commit>…​] <commit> [--] [<path>…​]
        git diff [<options>] <commit>…​<commit> [--] [<path>…​]
        git diff [<options>] <blob> <blob>
        git diff [<options>] --no-index [--] <path> <path>"
      />
      <Structure
        header="REBASE"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-rebase"
        text2="Reapply commits on top of another base tip"
        text3="git rebase [-i | --interactive] [<options>] [--exec <cmd>]
        [--onto <newbase> | --keep-base] [<upstream> [<branch>]]
      git rebase [-i | --interactive] [<options>] [--exec <cmd>] [--onto <newbase>]
        --root [<branch>]
      git rebase (--continue | --skip | --abort | --quit | --edit-todo | --show-current-patch)"
      />
      <Structure
        header="REVERT"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-revert"
        text2="Revert some existing commits"
        text3="git revert [--[no-]edit] [-n] [-m parent-number] [-s] [-S[<keyid>]] <commit>…​
        git revert (--continue | --skip | --abort | --quit)"
      />
    </ScrollView>
  );
};
export default Patching;

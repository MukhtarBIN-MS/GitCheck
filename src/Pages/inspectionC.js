import React from "react";
import { Text, ScrollView } from "react-native";
import Structure from "./Structure";

const InspectionC = () => {
  return (
    <ScrollView style={{ flexDirection:'column'}}>
      <Structure
        header="SHOW"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-show"
        text2=" Show various types of objects"
        text3="git show [<options>] [<object>…​]"
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
        header="DIFFTOOL"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-difftool"
        text2="Show changes using common diff tools"
        text3="git difftool [<options>] [<commit> [<commit>]] [--] [<path>…​]"
      />
      <Structure
        header="RANGE-DIFF"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-range-diff"
        text2="Compare two commit ranges (e.g. two versions of a branch)"
        text3="git range-diff [--color=[<when>]] [--no-color] [<diff-options>]
        [--no-dual-color] [--creation-factor=<factor>]
        [--left-only | --right-only]
        ( <range1> <range2> | <rev1>…​<rev2> | <base> <rev1> <rev2> )
        [[--] <path>…​]"
      />
      <Structure
        header="SHORTLOG"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-shortlog"
        text2="Summarize git log output"
        text3="git shortlog [<options>] [<revision-range>] [[--] <path>…​]
        git log --pretty=short | git shortlog [<options>]"
      />
      <Structure
        header="DESCRIBE"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-describe"
        text2="Give an object a human readable name based on an available ref"
        text3="git describe [--all] [--tags] [--contains] [--abbrev=<n>] [<commit-ish>…​]
        git describe [--all] [--tags] [--contains] [--abbrev=<n>] --dirty[=<mark>]
        git describe <blob>"
      />
    </ScrollView>
  );
};
export default InspectionC;

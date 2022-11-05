import React from "react";
import { Text, ScrollView } from "react-native";
import Structure from "./Structure";

const Debug = () => {
  return (
    <ScrollView style={{ flexDirection:'column'}}>
      <Structure
        header="BISECT"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-bisect"
        text2="Use binary search to find the commit that introduced a bug"
        text3="git bisect <subcommand> <options>"
      />
      <Structure
        header="BLAME"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-blame"
        text2="Show what revision and author last modified each line of a file"
        text3="git blame [-c] [-b] [-l] [--root] [-t] [-f] [-n] [-s] [-e] [-p] [-w] [--incremental]
        [-L <range>] [-S <revs-file>] [-M] [-C] [-C] [-C] [--since=<date>]
        [--ignore-rev <rev>] [--ignore-revs-file <file>]
        [--color-lines] [--color-by-age] [--progress] [--abbrev=<n>]
        [<rev> | --contents <file> | --reverse <rev>..<rev>] [--] <file>"
      />
      <Structure
        header="GREP"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-grep"
        text2="Print lines matching a pattern"
        text3="git grep [-a | --text] [-I] [--textconv] [-i | --ignore-case] [-w | --word-regexp]
        [-v | --invert-match] [-h|-H] [--full-name]
        [-E | --extended-regexp] [-G | --basic-regexp]
        [-P | --perl-regexp]
        [-F | --fixed-strings] [-n | --line-number] [--column]
        [-l | --files-with-matches] [-L | --files-without-match]
        [(-O | --open-files-in-pager) [<pager>]]
        [-z | --null]
        [ -o | --only-matching ] [-c | --count] [--all-match] [-q | --quiet]
        [--max-depth <depth>] [--[no-]recursive]
        [--color[=<when>] | --no-color]
        [--break] [--heading] [-p | --show-function]
        [-A <post-context>] [-B <pre-context>] [-C <context>]
        [-W | --function-context]
        [(-m | --max-count) <num>]
        [--threads <num>]
        [-f <file>] [-e] <pattern>
        [--and|--or|--not|(|)|-e <pattern>…​]
        [--recurse-submodules] [--parent-basename <basename>]
        [ [--[no-]exclude-standard] [--cached | --no-index | --untracked] | <tree>…​]
        [--] [<pathspec>…​]"
      />
    </ScrollView>
  );
};
export default Debug;

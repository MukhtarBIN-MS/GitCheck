import React from 'react'
import { Text, ScrollView } from 'react-native';
import Structure from './Structure';

const BasicSnap =()=> {
    return (
    <ScrollView style={{ flexDirection:'column'}}>
     <Structure
        header="ADD"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-add"
        text2="Add file contents to the index"
        text3="git add [--verbose | -v] [--dry-run | -n] [--force | -f] [--interactive | -i] [--patch | -p]
        [--edit | -e] [--[no-]all | --[no-]ignore-removal | [--update | -u]] [--sparse]
        [--intent-to-add | -N] [--refresh] [--ignore-errors] [--ignore-missing] [--renormalize]
        [--chmod=(+|-)x] [--pathspec-from-file=<file> [--pathspec-file-nul]]
        [--] [<pathspec>…​]"
     />
      <Structure
        header="STATUS"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-status"
        text2="Show the working tree status"
        text3="git status [<options>…​] [--] [<pathspec>…​]"
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
        header="COMMIT"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-commit"
        text2="Record changes to the repository"
        text3="git commit [-a | --interactive | --patch] [-s] [-v] [-u<mode>] [--amend]
        [--dry-run] [(-c | -C | --squash) <commit> | --fixup [(amend|reword):]<commit>)]
        [-F <file> | -m <msg>] [--reset-author] [--allow-empty]
        [--allow-empty-message] [--no-verify] [-e] [--author=<author>]
        [--date=<date>] [--cleanup=<mode>] [--[no-]status]
        [-i | -o] [--pathspec-from-file=<file> [--pathspec-file-nul]]
        [(--trailer <token>[(=|:)<value>])…​] [-S[<keyid>]]
        [--] [<pathspec>…​]"
     />
      <Structure
        header="NOTES"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-notes"
        text2="Add or inspect object notes"
        text3="git notes [list [<object>]]
        git notes add [-f] [--allow-empty] [-F <file> | -m <msg> | (-c | -C) <object>] [<object>]
        git notes copy [-f] ( --stdin | <from-object> [<to-object>] )
        git notes append [--allow-empty] [-F <file> | -m <msg> | (-c | -C) <object>] [<object>]
        git notes edit [--allow-empty] [<object>]
        git notes show [<object>]
        git notes merge [-v | -q] [-s <strategy> ] <notes-ref>
        git notes merge --commit [-v | -q]
        git notes merge --abort [-v | -q]
        git notes remove [--ignore-missing] [--stdin] [<object>…​]
        git notes prune [-n] [-v]
        git notes get-ref"
     />
      <Structure
        header="RESTORE"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-restore"
        text2="Restore working tree files"
        text3="git restore [<options>] [--source=<tree>] [--staged] [--worktree] [--] <pathspec>…​
        git restore [<options>] [--source=<tree>] [--staged] [--worktree] --pathspec-from-file=<file> [--pathspec-file-nul]
        git restore (-p|--patch) [<options>] [--source=<tree>] [--staged] [--worktree] [--] [<pathspec>…​]"
     />
     <Structure
        header="RESET"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-reset"
        text2="Reset current HEAD to the specified state"
        text3="git reset [-q] [<tree-ish>] [--] <pathspec>…​
        git reset [-q] [--pathspec-from-file=<file> [--pathspec-file-nul]] [<tree-ish>]
        git reset (--patch | -p) [<tree-ish>] [--] [<pathspec>…​]
        git reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [<commit>]"
     />
      <Structure
        header="RM"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-rm"
        text2="Remove files from the working tree and from the index"
        text3="git rm [-f | --force] [-n] [-r] [--cached] [--ignore-unmatch]
        [--quiet] [--pathspec-from-file=<file> [--pathspec-file-nul]]
        [--] [<pathspec>…​]"
     />
      <Structure
        header="Mv"
        title1="NAME"
        title2="DESCRIPTION"
        title3="SYNOPSIS"
        text1="git-mv"
        text2="Move or rename a file, a directory, or a symlink"
        text3="git mv <options>…​ <args>…"
     />
      </ScrollView>
    )
}
export default BasicSnap;

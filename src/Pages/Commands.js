import React from "react";
import { Text, ScrollView } from "react-native";
import CStructure from "./CStructure";

const Commands = () => {
  const str1 = 'git add samaple.txt \ngit commit --amend \ngit push -u origin master --force';
  const str2 ='git log <file>\ngit checkout <header><file>';
  const str3 ='git log file.txt\ngit checkout 3cdkajk file.txt'
  const str4 = 'git status\ngit add filePath\ngit commit -m Message\npush -u origin myBranch';
  const str5 ='git add sampleFile.txt\ngit commit -m first commit\npush -u origin myBranch';
  const str6='git fetch\ngit checkout <branch>';
  const str7 ='git fetch\ngit checkout myBranch';
  const str8 = 'git checkout -b <branch><base-branch>\ngit push -u origin <branch>';
  const str9 ='git checkout -b newBranch myBranch\ngit push origin newBranch';
  const str10 = 'git log readME.txt\ngit log -one line';
  const str11 ='git remote add reponame repourl\ngit fetch reponame\ngit remote update\ngit cherry-pick commit id -n';
  const str12 = 'git remote add sample ssh://git@github\ngit fetch sample\ngit remote update\ngit cherry-pick 38r938r30 -n';
  const str13 ='git pull\ngit merge master';
  const str14 = 'git commit -m first commit\ngit reset HEAD~\ngit add\ngit commit -m second commit';
  const str15 ='git stash list\ngit stash show stash@{0}\ngit stash pop stash@{0}';

  return (
    <ScrollView style={{ flexDirection: "column" }}>
      <CStructure
        header="Amend the last commit"
        title1="Syntax"
        title2="Example"
        text1="git commit --amend"
        text2={str1}
      />
      <CStructure
        header="Cancel pushed commit"
        title1="Syntax"
        title2="Example"
        text1={str2}
        text2={str3}
      />
      <CStructure
        header="Checkout remote branch"
        title1="Syntax"
        title2="Example"
        text1={str6}
        text2={str7}
      />
      <CStructure
        header="Commit branch"
        title1="Syntax"
        title2="Example"
        text1={str4}
        text2={str5}
      />
      <CStructure
        header="Create new branch"
        title1="Syntax"
        title2="Example"
        text1={str8}
        text2={str9}
      />
      <CStructure
        header="Display the commit history"
        title1="Syntax"
        title2="Example"
        text1="git log"
        text2={str10}
      />
      <CStructure
        header="Get commit from another repo"
        title1="Syntax"
        title2="Example"
        text1={str11}
        text2={str12}
      />
      <CStructure
        header="Git check branch"
        title1="Syntax"
        title2="Example"
        text1="git branch"
        text2="git branch"
      />
      <CStructure
        header="Git clone a specific branch"
        title1="Syntax"
        title2="Example"
        text1="git clone -b <branch><repo>"
        text2="git clone -b master repourl"
      />
      <CStructure
        header="Initialize a directory as a repository"
        title1="Syntax"
        title2="Example"
        text1="git init <directory>"
        text2="cd/path/project/ git init"
      />
      <CStructure
        header="Merge into the current branch"
        title1="Syntax"
        title2="Example"
        text1="git merge <branch>"
        text2={str13}
      />
      <CStructure
        header="Move umcommitted work to a new branch"
        title1="Syntax"
        title2="Example"
        text1="git switch -c <new-branch>"
        text2="git switch -c myBranch"
      />
      <CStructure
        header="Stash a specific file"
        title1="Syntax"
        title2="Example"
        text1="git stash push -m 'ignored' <file>"
        text2="git stash push -m 'ignored' sample.txt"
      />
      <CStructure
        header="Undo a local commit"
        title1="Syntax"
        title2="Example"
        text1="git reset HEAD~"
        text2={str14}
      />
      <CStructure
        header="Untash specific file"
        title1="Syntax"
        title2="Example"
        text1="git stash pop [<logOptions>]"
        text2={str15}
      />
      <CStructure
        header="Update a local branch"
        title1="Syntax"
        title2="Example"
        text1="git pull origin <branch>"
        text2="git pull origin myBranch"
      />
      <CStructure
        header="Viewing unpushed git commits"
        title1="Syntax"
        title2="Example"
        text1="git log origin/master..HEAD"
        text2="git log origin/master..HEAD"
      />
    </ScrollView>
  );
};
export default Commands;

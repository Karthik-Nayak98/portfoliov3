---
title: Bare git repository. What? Why? and How?
slug: bare-git-repository-what-why-and-how
date: Feb 04, 2022
author: Karthik Nayak
excerpt: Everyone has heard about Git repository, but only few know about what a bare git repository is. In this post I will explain what a bare git repository is, how to create it and also the advantages of it.
---
## Introduction
All developers generally know how git works and how to use it, but only a few developers have an idea about a bare git repository.
A few days back I did not know what it was, and when I heard this term I thought of doing a little exploration about it.
## What does a git repository contain?
When I opened a git repository I could find 2 things in it.
 - A __workspace__
    - A Workspace contains all the working files where we generally write our code. A workspace will have all the files usually pointed by the last commit hash.
- A __.git__ folder
  - .git folder contains all information that is necessary for the project and all information relating to commits, and the remote repository address and also contains a log that stores commit history.
Now we have some basic idea about the git repository, we can define what a bare git repository is.
## What is a bare git repository?
A bare git repository does not contain any workspace but only a .git folder. In this repository, none of the git commands like git status, git commit, etc. will work because we do not have any workspace. These commands are workspace-specific.
Now, you might get a doubt, then what is the use of this bare repository?
## Uses of Bare repository
A Bare repository is used when a few people are working on a project and they don't want to use third-party code hosting platforms for version control such as __GitHub__, __Bitbucket__, etc.
Instead, they can use a shared drive and place this bare repository so other developers can use it.
Remote repositories are always bare, so they don't need to have the overhead of storing the working files.
## Commands related to the Bare repository
### Creating a bare repository
If you want to create a new bare git repository, you can use the command.
```bash
git init --bare <folder-name>
```
### Cloning a repository as bare repository from GitHub
You can just clone a bare repository from GitHub instead of cloning everything. Just use the command.
```bash
git clone --bare <repo-url>
```
### Convert a non-bare repository into a bare repository
If you want to convert a non-bare git repository into a bare repository you can do so. You can follow the steps below.
1. First, delete all the workspace files and only keep the __.git__ folder.
1. Now change the configuration by using the command.
```bash
git config --bool core.bare true
```
This will convert non-bare to bare repository.
### Cloning a bare repository into a non-bare repository.
Once you get a bare repository, you can store it anywhere then it works similarly to a cloud hosting service for version control but hosted in some network. It is like your own version of GitHub.
You can now clone from that repository.
```bash
git clone <bare-repo-folder>
```
After this, you will be getting a non-bare repository to which you can push or pull using the normal git commands.
## Summary
In this article, we have just learned about what a bare git repository is and its uses, and also what are its uses. We also have seen how to create and convert a non-bare repository into a bare repository.
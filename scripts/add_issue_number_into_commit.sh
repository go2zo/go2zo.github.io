#!/usr/bin/env bash

COMMIT_MSG_FILE=$1

branch_name=`git rev-parse --abbrev-ref HEAD`
cut_number=`echo ${branch_name} | cut -d '-' -f1`
first_line=`head -n1 ${COMMIT_MSG_FILE}`

NUM_COMMITS=5
FORMAT="# %h %s [%an]"
COMMITS="$(git log --pretty="${FORMAT}" -${NUM_COMMITS})"
HEADER="#
# Last ${NUM_COMMITS} commits
# ----------------------"

recent_commits() {
  echo "${HEADER}"
  echo "${COMMITS}"
}

GH_CLI_PATH=`command -v gh 2>&1 >/dev/null`
COMMIT_MSG=""
if [ -z "${GH_CLI_PATH}" ]; then
  COMMIT_MSG=`gh issue view ${cut_number} | sed -n $'s/^title:[ \t]*//p'`
fi
# if commit_msg_file's first line is empty,
# add branch name in commit_msg
if [ -z "${first_line}" ]; then
  recent_commits >> $1
  sed -i ".bak" "1s/^/[#${cut_number}] ${COMMIT_MSG}/" $1
fi

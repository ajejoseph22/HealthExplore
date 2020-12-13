# fullstack-candidate-testing

https://clipboard-health-challenge.vercel.app/

## Pre-requirements

yarn install

## Run dev server

yarn dev

## Run tests

yarn tests

## Unstable network solution

Throttled filter and sorting to 500ms which is a very common pattern to reduce load on the server

In case we care about response speed, we can add a timestamp for every request and not update the list if we get a second request but it has an older timestamp

## Filtering/Sorting

Implemented search in .name and .job_title. Can easily be extended to search in more fields
Implemented sorting for location and experience - I'm not sure how to implement it for the rest of the fields?

The filters on the left don't do anything - not sure if they should have been functional or not

## State management

React state and reduxjs toolkit

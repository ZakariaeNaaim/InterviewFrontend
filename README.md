# InterviewApp

This is a minimal Angular 15 frontend for the Orders module. It connects to the backend via HttpClient and displays order summaries in a simple table.

## Tech Stack

- Angular 15
- TypeScript
- HttpClient
- Reactive Forms

## Features

- Table to display OrderSummary
- Async/await for API calls

## Trade-offs & Design Decisions

- Using Modules instead of Standalone to ensure compatibility with older devices and team practices — the team mentioned they sometimes use old Angular versions

## Next Steps

1. Add error handling service with toast notifications
2. Add loading indicators for API calls
3. Add pagination and filtering to OrderSummary table
4. Remove Modules and use of Standalone Components
5. migrate to Angular 19

## Setup

1. Run `npm install`
2. Update API base URL in `environment.ts`
3. Run `ng serve`

# Next.js 15 App Router: Unexpected Client-Side Routing Behavior with Dynamic Segments

This repository demonstrates an unexpected behavior in Next.js 15's App Router when using client-side routing with dynamic segments.  The issue occurs when navigating between routes containing dynamic segments.  The expected behavior is smooth client-side navigation, but instead, a full page reload is observed.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate between the routes `/posts/1` and `/posts/2`. Observe a full page reload instead of client-side navigation.

## Expected Behavior

Client-side navigation between `/posts/1` and `/posts/2` without a full page reload.

## Actual Behavior

A full page reload occurs when navigating between these routes.

## Solution

Refer to the `bugSolution.js` file for a potential solution involving the use of the `next/navigation` API. This solution is not universally applicable, as the root cause may depend on various factors within your application.

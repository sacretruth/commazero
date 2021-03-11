# Senior Engineer - Technical Challenge

Spend a maximum of 1.5 hours on this challenge.

Your time is valuable, so DO FOCUS ON:

- Demonstrating clarity of thought
- Demonstrating mastery of your chosen language
- Making sure your solution is easy to run, easy to understand, and has a well-tested core

We are NOT LOOKING FOR:

- Extensive configuration/boilerplate code
- Production-readiness
- Enterprise-readiness

## Background

Commazero is a platform that helps companies get paid and make it easier to pay their bills.
From the platform a user can see the list of supplier and for each supplier a list of invoices.

## Available data

We have provided a json file containing a list of suppliers and a list of invoices.

Suppliers:

| **id** | **name**    |
| ------ | ----------- |
| ABC    | Goodwin ltd |
| DEF    | Dibbert ltd |
| `...`  |             |

Invoices:

| **id** | **supplierId** | **amount** | **due date** |
| ------ | -------------- | ---------- | ------------ |
| 123    | ABC            | 100.00     | 2021-04-30   |
| 456    | ABC            | 70.00      | 2021-03-30   |
| 789    | DEF            | 30.00      | 2021-04-01   |
| `...`  |                |            |              |

## Task

Our real-world end-users want a tool to query the invoices for a specific supplier and given a amount of money available on a bank account find a suggested list of invoices that should be paid.

However this is a tech challenge so we're ok with a basic command-line interface or a really simple web client (the UI does not have to be elaborate or very time-consuming) with in-memory data structures.

You are tasked with writing a small application that exposes two functions:

- one function that given the name of the supplier returns all the invoices
- one function that given an amount of money returns an optimal list of invoices that can be paid with that amount of money

Please note that the order in which the suppliers and invoices are served or aggregated is irrelevant and functionality/display options are open to your interpretation if you wish.

It's ok to make assumptions, but please explain why you went in a particular direction.
If you have any questions you can email us - engineering@commazero.com).

These instructions are deliberately left vague as we are interested as much in your architecture decisions as your coding skills.

Ideally this will be delivered as a link to a git repository but a zip file is also acceptable.

# ASP.NET Core - App Building Workshop

## Setup

### .NET Core SDK 2.0 Preview 1 build 005977
Follow instructions from step 1 here: https://www.microsoft.com/net/core/preview

### Visual Studio 2017 Preview (Version 15.3.0 Preview 2.0)
If you're using Windows, you'll want to install Visual Studio 2017 Preview. You can install multiple versions of Visual Studio 2017 side by side, so you won't need to modify your existing Visual Studio 2017 install if you don't want.

#### Web Based Installer
1. Download the installer from the link at the bottom of this page: https://www.microsoft.com/net/core/preview
1. Select **only** `.NET Core` and `Web Development` workloads

#### (if available) Offline Installer
> Since conference wifi can be a little slow, we'll try to have some USB sticks with an offline installer.
1. Run vs_community.exe in vs2017 folder
1. Select **only** `.NET Core` and `Web Development` workloads

### VS Code (on USB drive)
1. Install VS Code from USB drive or http://code.visualstudio.com.

## What you'll be building
In this workshop, you'll learn by building a full-featured ASP.NET Core application from scratch. We'll start from File/ New and build up to an API back-end application, a web front-end application, and a common library for shared data transfer objects using .NET Standard.

![Architecture Diagram](https://rawgit.com/jongalloway/aspnetcore-app-workshop/master/docs/architecture-diagram.svg)

## Sessions

| Session | Topics |
| ----- | ---- |
| [Session #1](/docs/1.%20Create%20BackEnd%20API%20project.md) | Get bits installed, build the back-end application with basic EF model |
| [Session #2](/docs/2.%20Build%20out%20BackEnd%20and%20Refactor.md) | Build out back-end, extract EF model |  |
| [Session #3](/docs/3.%20Add%20front-end%2C%20render%20agenda%2C%20set%20up%20front-end%20models.md) | Add front-end, render agenda, set up front-end models |
| [Session #4](/docs/4.%20Add%20auth%20features.md) | Add authentication, add admin policy, allow editing sessions, users can sign-in with Twitter and Google, custom auth tag helper |
| [Session #5](/docs/5.%20Add%20personal%20agenda.md) | Add user association and personal agenda |
| [Session #6](docs/6.%20Deployment.md) | Deployment, Azure and other production environments, configuring environments, diagnostics |
| [Session #7](/docs/7.%20Challenges.md) | Challenges |

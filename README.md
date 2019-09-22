# EbayK Fullstack coding challenge - Marketplace application

Congratulations! You made it to the eBay Kleinanzeigen remote Full Stack coding challenge. Here, we want to get a taste of your hands-on coding skills.

## Introduction

All tasks will be related to a marketplace application that you will develop more or less from scratch. There are 2 independent required tasks and one optional task that should be solved. You can adapt everything, add libraries, layers and other tools if this makes your life easier.

## Preparation (~15m)

1. Make sure that the following is installed and ready to be used:
    
    - Java Development Kit version >=8
    - Maven
    - Node >= 6
    - Your preferred IDE/editor
    
    
2. Check if your backend service can properly run

    ```
    cd server
    mvn spring-boot:run
    ```

    Your backend runs if you get a valid response from [http://localhost:8080/ad-list](http://localhost:8080/ad-list). Alternatively, you can also start the main class `com.ebayk.Application` in your preferred IDE.

3. Check if your frontend can properly run

    ```
    cd client
    npm install
    npm start
    ```

    Your frontend runs if you get a valid response from [http://localhost:3000/](http://localhost:3000/).

Before you start, keep in mind that you can skip parts of the challenge if you are stuck. If you have anything to comment then feel free to add comments at certain places. You can also add comments at the end of this file about general things, problems and remarks. If the time is short it's also useful to describe quickly what you would have done in a required task that was not completely implemented.

After **4 hours** you have to upload the result as .zip file to a public file hoster like [https://filebin.net/](https://filebin.net/). There are time estimates that is required to solve an exercise that sums up to 3h but you have 
up to 4 hours. Therefore, there should be time for a coffee between exercises. 

No need to be hyper-punctual (e.g. 10 minutes earlier or sooner won't make a difference).

Coding guidance: 
 - Combine "clean code" with "working software",
 - Apply a basic architecture for your frontend and backend,
 - Usability and the basic design should be state of the art. The usage of component frameworks is allowed but not mandatory.
 - Old browser support is nice to have

## Tasks

### 1. Basic marketplace application (~120m)

This task is about a fundamental marketplace application that consists of an ad-listing page and detail page. To visualize the flow here are some sketches:

- [List of ad](./mockups/ad-listing.png)
- [Detail page](./mockups/detail-page.png)
- [Detail page contact form](./mockups/detail-page-contact-form.png)
- [Detail page contact form confirmation](./mockups/detail-page-contact-form-confirmation.png)


It's not mandatory to build it exactly like sketched. It's only for inspiration.

#### 1.1 Implement an ad-listing page

- [ ] Provide a styled list of ad results under the following url: [http://localhost:3000/ad-list](http://localhost:3000/ad-list)
- [ ] On ad click the user should be directed to the detail page of an ad

#### 1.2 Implement a detail page

- [ ] Show details about the item that was clicked: 
    - title
    - image
    - description
    
- [ ] Provide a contact-button to contact the seller of the listing on the details page
- [ ] On contact-button click an overlay should be opened that contains a contact form. The contact form should contain:
  - Message field
  - Email address field
  - A send-button

- [ ] On send-button click the content of the form should be sent to the backend.
- [ ] Add basic validation.
- [ ] The backend should receive the data and print the form-data to the console.
- [ ] After sending the message, a success message should be displayed in the UI.

### 2. Refactor a legacy functionality (~30m)

Start the server and open [http://localhost:8080/users/3/rated-users](http://localhost:8080/users/3/rated-users). There, you see a list of all users that were rated by the user with id `3`. The functionality is implemented in `com.ebayk.service.RatingAnalyzer`.
Target of this exercise is to keep its working functionality as it is. Do your best to fix (potential) bugs and improve its readability, reliability, performance and testability.

### 3. (Optional) Create two deployable units (~30m)

*Only tackle this if you are happy with your previous tasks.*

Nowadays, applications are containerized to deploy and scale them easily. Take your client and server, put them
in a container and make them portable. One possible solution can be to use docker-compose to start them with a single command `docker-compose up`.

## Your comments / remarks

What would you do if you had more time? Which trade-offs did you take? What architecture-layers did you create and why?

* FILL-ME 1
* FILL-ME 2


Have fun!




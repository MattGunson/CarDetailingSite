# CarDetailingSite
### Elevator Pitch
Small business owners face two significant issues, creating an effective and efficient 
order/fulfillment tracking process and creating a digital platform that establishes trust with the
end user and serves as a landing for any web generated leads. This product is a customizable website
for small business owners/hustlers that provides a subscription service platform to hook into our
website. As a proof of concept this website will be designed to cater to a small business that 
provides detailing services to professionals who commute to the office and leave their car in the
parking lot while they're working. Features will include a live update of the technicians location
just before and during time of service displayed on a map, as well as scheduling, pricing, and 
account creation.

## Design
### Landing Page
![Landing Page](resources/readme/HomePage_mock.jpeg)
The home page will serve as an informational page for anyone landing on our website.
Key focuses of this page are to provide trustworthy branding and imaging and to communicate
our business model and competitive advantages.

### Pricing
![Pricing Page](resources/readme/PricingPage_mock.jpeg)
This page will communicate the pricing of our services and allow users to leanr about the
how we structure our payments and services.

### Schedule a Clean
![Schedule Page](resources/readme/SchedulePage_mock.jpeg)
This page is a dynamic process card that sequentially collects the information necessary to 
schedule a clean as a customer.

### My Account
![Account Page](resources/readme/AccountPage_mock.jpeg)
This page is the account management page and displays to the user the information we have
collected about them and gives them the ability to change it. It will also display scheduled
services

### Service Progress
![Service Progress Page](resources/readme/ServiceProgressPage_mock.jpeg)
This page displays the progress of a service and the location of the assigned technician 1 hour
before and during the fulfilling of the service. It also contains the details of the requested
service. On completion photos of the results will be viewable on this page.

## HTML Deliverables
I talked with the professor and he said I could use my java script files for this. I built out the general structure of my application using HTML/tsx.

* HTML - I added 5 pages for each of the key pages
Links - There is a navbar with navigation between pages and a link to the service details page in the profile page
* Text - I'm not actually sure what I was supposed to put here? I have a client I'm making this site for so I haven't talked to them about what text they want where yet
* Images - I'm not sure if I'll use that many images, but I added one on the main landing page.
* Login - I'm going to use email/SSO so I'm going to tackle that when we get to the more complicated js stuff
* Database - The database section will explain what data storage and what I'm using it for
* WebSocket - The location of the tech fulfilling the service will be live updated in the service progress page.

## Technologies
### Authentication
I want to implement Google sign-in as well as native sign in. Usernames aren't really necessary
for this service so a unique identifier like a phone number or email will probably be substituted
here. The My Account and Service Progress pages will both be blocked by authentication.

### Websocket
The live location feed for the technician will require a websocket that feeds the web page with 
the technician's locaiton. I believe this could be provided by a mobile I could also simulate this
for testing.

### Database
This app will require many different data models. The apparent necessary models right now as
I see them are
* Service
* User
* Order

#### Service
Contains data describing each of the available services.

#### Order
Contains information about what orders a User has made and what the status of those order is

#### User
Contains all of the information about a user and any other relevant information related to their
account.
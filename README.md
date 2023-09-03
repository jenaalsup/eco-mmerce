## Inspiration

The inspiration for this project was to simplify and encourage sustainable consumer choices by creating a marketplace for vetted, eco-friendly products.

## What it does

The website provides a user-friendly interface for sellers to list their eco-friendly products and enables users to easily search for and purchase these items. Google Authentication allows for quick login. There is also hashtag-based searching, and the ability to look at other user profiles.

## How we built it

We built this app using Next.js. We used API Routes for creating and updating listings. Next-auth was used for Google Authentication, and mongoDB was used to store product listings and users, and to manage website activity. Our coding structure is based on the react framework. We have components that make up the reusable parts of the website, like the listing cards, and we have pages that implement these components, like the page for updating a listing. We used this Youtube video (https://youtu.be/wm5gMKuwSYk?si=-T-70suRtQSNxx0s) for learning Next.js from scratch, and for some of the styling. We added to the CSS styling, and we added functionality for images that was not present in the video.

## Challenges we ran into

One challenge we faced was saving image data to display for a listing. This was difficult because our server expected a JSON response. This was easy to do with the product listing and with the tags because they are strings, which are easily convertible to JSON objects, but this was unclear with a file upload. The way we did this was by encoding the image to Base64 to send it as a JSON field.

## Accomplishments that we're proud of

We are proud to see a project like this through to the end. We (Jena and Ava) had talked a lot during school about sustainability on our campus, and ways we could make a difference, so we were so excited to bring one of our ideas to fruition.

## What we learned

This was our first time using Next.js, so we learned jsx and were introduced to client-side/server-side functionality. We learned through the process of debugging and became better programmers by following online forums and videos.

## What's next for Eco-Commerce

We would like to implement additional features like a vetting process for the products, the ability to leave reviews, and in-app purchases.

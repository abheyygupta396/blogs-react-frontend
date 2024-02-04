# react-blog-app-assignment

A project for Blog Application which includes all CRUD operations... Make sure you have Node.js and npm/yarn installed before getting started.

## Installation

To install the project dependencies, run the following command:

`yarn`

## Usage

To start the project, use the following command:

`yarn start`

The application will be accessible at http://localhost:3000 in your web browser.

## This repo contains assigment based task.

Repo Link: https://github.com/abheyygupta396/blogs-react-frontend.git

## Check whole code on Branch

Branch: master

Important Points about application:

    Entry Point: index.tsx is the entry point for the application. It is followed by App.tsx, which is its child component. Both files are located in the src folder at the root of the application.

    Folder Structure:
    src (root folder)

    assets: Contains CSS files.

    common: Holds commonly used components.

    components: Contains DisplayAllPost, Add/Edit Blog, ViewBlogDetails, NoDataFound, SinglePostCard components.
        These components had all CRUD operations performed with all use-cases handled.

        Sure, let's briefly explain each component for your README:

    # 1. DisplayAllPost Component:

        This component is responsible for displaying a list of all blog posts. It likely includes a UI that lists the titles or summaries of each post, along with any relevant actions such as deleting a post.

    # 2. Add/Edit Blog Component:

        This component is used for both adding a new blog post and editing an existing one. It includes form elements for the user to input the title and body of the blog post. Additionally, it should handle the submission of the form to perform the corresponding CRUD operation.

    # 3. ViewBlogDetails Component:

        This component focuses on displaying the details of a single blog post. It likely includes the full title, body, and any additional information about the post. This component could be used when a user clicks on a specific blog post to view its details.

    # 4. NoDataFound Component:

        This component is typically used when there is no data to display, such as an empty list of blog posts. It provides a user-friendly message or illustration indicating that no data is available.

    ### 5. SinglePostCard Component:

        This component represents the visual representation of a single blog post within a list. It likely includes the post's title and a summary or snippet of the post's body. It could also include actions for editing or deleting the post.


    Api-integration: Handles API calls to get and post data from server side. It uses axios for making HTTP requests.

    Webpack and tsConfig:
        The application uses Webpack for bundling and tsConfig for TypeScript configuration.

## Build Command

To create the project build, run the following command:

`yarn run build`

## Application deployed on Render.com

Deployed Url: https://react-blogs-app.onrender.com/

## Steps to deploy on render:

Sure, here are the steps to deploy a React app on Render.com:

1. **Create a Render Account:**

   - If you don't have an account on Render.com, sign up for a free account.

2. **Create a New Static Site:**

   - Log in to your Render dashboard.
   - Click on the "Create" button to create a new Static Site.

3. **Select Repository:**

   - Connect your repository where the React app code is hosted (e.g., GitHub, GitLab, Bitbucket).

4. **Configure Build Settings:**

   - Choose the repository and branch to deploy.
   - Set the build command (e.g., `yarn run build`).
   - Specify the build directory (e.g., `build`).

5. **Configure Environment Variables (Optional):**

   - If your React app requires environment variables, you can add them in the "Environment" section.

6. **Configure Domains (Optional):**

   - Set up custom domains if needed.

7. **Review Configuration:**

   - Review all the configuration settings for your static site.

8. **Deploy:**

   - Click the "Create" button to deploy React app.

9. **Monitor Deployment:**

   - Render will automatically build and deploy your React app. Monitor the deployment process in the dashboard.

10. **Access Your App:**
    - Once the deployment is successful, access your React app using the provided Render URL.

Make sure to explore Render's documentation for advanced configurations and features based on your project requirements.

Screenshots attached for application:

![image](https://drive.google.com/uc?id=1sJpzoquVGmSdppjSwNbfDX2hBXbZdXnH)

# Backend Repository Url:

[Repository Url](https://github.com/abheyygupta396/blogs-fastapi-backend.git)



# MultiFactor-to-Web

**Automate two-step verification code retrieval and display it in a user-friendly web interface.**

This project combines Python for email processing, a Node.js backend, and a React frontend to seamlessly retrieve and present two-step verification codes from a Gmail inbox.

**How it Works:**

1. **Python Script**: The Python script uses the "simplegmail" library to access a Gmail inbox and extract two-step verification codes.

2. **Node.js Backend**: A Node.js backend server runs the Python script, captures the output, and serves it to the React frontend.

3. **React Frontend**: The React-based frontend communicates with the backend using Axios to fetch and display two-step verification codes in real-time.

**Usage:**

1. Clone this repository.
2. Set up Gmail API Access:
   - Create a project in the Google Cloud Console.
   - Enable the Gmail API for your project.
   - Generate a custom `client_secret.json` via the Google Cloud Console.
   - Place the `client_secret.json` in the backend directory.
3. Install the necessary dependencies for the Python script, Node.js backend, and React frontend.
4. Run the Node.js server to execute the Python script and serve results.
5. Start the React frontend to access the user interface and view retrieved codes.


**Note:** Properly configure Gmail API access using the `client_secret.json` file and adhere to security best practices.

Feel free to contribute or customize this project to meet your specific needs. We welcome your feedback and contributions!


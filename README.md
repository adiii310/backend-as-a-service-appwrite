# AuthService Documentation

## Constructor
- Sets up the Appwrite client with the endpoint and project ID from the configuration.
- Initializes the `Account` service for user account management.

## createAccount
- Creates a new user account with the provided email, password, and name.
- If the account is successfully created, it logs the user in and returns the login response.

## login
- Logs in a user with the provided email and password.
- Returns the session details if successful.

## getCurrentUser
- Retrieves the details of the currently logged-in user.

## logout
- Deletes all active sessions for the current user, effectively logging them out.

# Service Documentation

## Constructor
- Sets up the Appwrite client with the endpoint and project ID from the configuration.
- Initializes the `Databases` and `Storage` services for data management and file handling.

## createPost
- Creates a new post with the provided title, content, featured image, status, user ID, and slug.
- Returns the created document's details.

## updatePost
- Updates an existing post with the provided slug and new data.
- Returns the updated document's details.

## deletePost
- Deletes a post with the provided slug.
- Returns `true` if successful, `false` otherwise.

## getPost
- Retrieves a post with the provided slug.
- Returns the document's details.

## getPosts
- Retrieves posts based on the provided queries.
- By default, it retrieves active posts.

## uploadFile
- Uploads a file to the Appwrite storage with a unique ID.
- Returns the file's details.

## deleteFile
- Deletes a file with the provided file ID from the Appwrite storage.
- Returns `true` if successful, `false` otherwise.

## previewFile
- Retrieves a preview of a file with the provided file ID from the Appwrite storage.
- Returns the file preview URL.

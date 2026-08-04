## Milestones 1–2 Reflection

AI guided me through cleaning the default Vite project before adding application features. Instead of immediately generating the final application, it explained why removing the starter code creates a cleaner and more maintainable foundation.

AI then helped me build the initial layout by creating a page structure containing a heading, search input, search button, and placeholder area for movie results. Each React element and CSS rule was explained before implementation, helping me understand the purpose of the code instead of simply copying it.

### Manual Review and Improvements

* Verified that the application still compiled successfully after removing the default Vite files.
* Reviewed the generated JSX structure to understand the purpose of each section.
* Confirmed that the layout displayed correctly in the browser before continuing.
* Kept the CSS simple to provide a clean foundation for future features.

## Milestone 3 Reflection

AI introduced React's useState hook and explained how state allows React to remember data between renders. Instead of only providing code, the explanation focused on why controlled components are commonly used for form inputs.

The search input was connected to React state using the value and onChange properties. A temporary text output was added to verify that the state updated correctly as the user typed.

### Manual Review and Improvements

* Confirmed that the input remained editable after connecting it to state.
* Verified that the displayed search text updated in real time.
* Reviewed the relationship between the state variable and the state update function to better understand React's data flow.

## Milestone 4 Reflection

AI helped me implement a reusable search handler instead of duplicating logic for different user interactions. The same function is now used for both the Search button and the Enter key, making the code easier to maintain.

Basic validation was added to prevent empty searches, and the implementation was tested using console output before integrating the TMDB API.

### Manual Review and Improvements

* Verified that both clicking the Search button and pressing Enter triggered the same function.
* Tested empty input validation to ensure invalid searches were blocked.
* Confirmed the console output matched the entered movie title before moving to API integration.

## Milestone 5 Reflection

AI guided me through connecting the application to the TMDB API using the Fetch API and a Vite environment variable. The implementation included validating the search input, making an asynchronous API request, and displaying the returned movie data.

### Manual Review and Improvements

* Verified that the API key was stored in a `.env` file instead of being hardcoded.
* Tested several movie titles to confirm the API returned correct results.
* Reviewed the returned JSON data and confirmed the displayed title, release date, and rating matched the response.

## Milestone 6 Reflection

AI helped refactor the application by moving the movie display into a reusable MovieCard component. This improved code organization and made the application easier to maintain and extend.

### Manual Review and Improvements

* Verified that movie posters, titles, release dates, ratings, and overviews displayed correctly.
* Confirmed the component received data through props.
* Reviewed the layout to ensure it remained responsive and reusable.

## Milestone 7 Reflection

AI helped implement a Favorites feature using React state and localStorage. Movies can now be added to or removed from a favorites list, and the data persists after refreshing the browser.

### Manual Review and Improvements

* Verified that favorites were saved correctly in localStorage.
* Confirmed that duplicate favorites were prevented.
* Tested adding, removing, and reloading the page to ensure persistence worked as expected.

## Milestone 8 Reflection

AI helped improve the application's user experience by introducing loading and error states for API requests. This provides users with immediate feedback while data is being fetched and when an error occurs.

### Manual Review and Improvements

* Verified that the loading message appeared during searches.
* Confirmed that errors were handled gracefully without crashing the application.
* Tested that existing Favorites functionality continued to work after the changes.

## Milestone 9 Reflection

AI helped improve the application's visual design by applying a modern dark theme, responsive layout, and cleaner styling for movie cards and buttons. The functionality remained unchanged while the overall user experience became more polished.

### Manual Review and Improvements

* Verified that the responsive layout worked on different screen sizes.
* Reviewed spacing, colors, and typography for consistency.
* Confirmed that all existing features continued to function after the styling changes.

## Milestone 10 Reflection

AI helped polish the final application by improving user feedback for different states, including the initial empty screen and searches that returned no results. These refinements improved the overall usability without changing the application's core functionality.

### Manual Review and Improvements

* Tested all primary features from start to finish.
* Verified that each application state displayed the correct message.
* Reviewed the overall user experience and corrected minor interface issues before finalizing the project.

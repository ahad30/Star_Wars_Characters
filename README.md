

# 1. Technical Documentation

Star Wars Character Explorer

System Architecture:
```
Client (React) ←→ Node.js Middleware
```

Components:
1. Frontend (React):
   - Home: Main view with character listing and search
   - Characters: Component for displaying character cards
   - CharacterDetails: Component for detailed character view
   - Skeleton: Loading state components

2. Backend (Node.js with Express using Rest API):
   - /characters: Proxy endpoint for character listing
   - /characters/:id: Proxy endpoint for character details
   - /planets/:id: Proxy endpoint for planet information

Data Flow:
1. User interacts with React UI
2. Requests are sent to Node.js middleware
3. Data is transformed and returned to React
4. React updates the UI

API Endpoints:
- GET /characters?page=1&search=luke
- GET /characters/1
- GET /planets/1

# 2. Installation Guide

Prerequisites:
- Node.js v16+
- npm v8+
- Git (optional)

Installation Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/star-wars-explorer.git
   cd star-wars-explorer
   ```

2. Install dependencies:
   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd ../frontend
   npm install
   ```

3. Environment Setup:
   Create `.env` file in frontend:
   ```env
   VITE_BACKEND_URL=http://localhost:5000/api
   ```

4. Run the application:
   ```bash
   # In one terminal (backend)
   cd backend
   npm start

   # In another terminal (frontend)
   cd ../frontend
   npm run dev
   ```

5. Access the application:
   Open `http://localhost:5173` in your browser

# 3. QA/Test Plan

Test Cases:

1. Functional Testing:
   - Verify character list loads on initial page load
   - Test pagination functionality
   - Verify search returns correct results
   - Test character detail view
   - Verify homeworld information displays
   - Test error handling for API failures

2. UI Testing:
   - Verify responsive design on different devices
   - Test loading states
   - Verify error messages display correctly
   - Check color contrast for accessibility

3. Performance Testing:
   - Measure page load time
   - Test with slow network conditions
   - Verify caching works for repeated requests

4. Security Testing:
   - Verify no sensitive data in client-side code
   - Test for XSS vulnerabilities
   - Verify CORS is properly configured

Test Environment:
- Chrome, Firefox, Safari latest versions
- Mobile devices (iOS/Android)

# 4. Design Rationale Document

Architecture Decisions:

1. React Frontend:
   - Chosen for component-based architecture
   - Excellent state management capabilities
   - Strong ecosystem for UI development
   - Enables fast, interactive user experience

2. Node.js Middleware:
   - Provides API abstraction layer
   - Handles CORS issues

3. State Management:
   - Used React hooks (useState, useEffect) for simplicity
   - Avoided Redux as it was unnecessary for this scale
   - Implemented loading states for better UX

4. UI Design Choices:
   - Card-based layout for character listing
   - Skeleton loading states for perceived performance

5. Technical Implementation:
   - Debounced search to reduce API calls
   - Error boundaries for graceful failure
   - Prop drilling for simple data flow
   - PrimeReact for consistent UI components

Trade-offs Considered:
1. Direct API vs Middleware:
   - Choose middleware for better control
   - Enables future enhancements like caching

2. Pagination Implementation:
   - Used client-side pagination control
   - Considered server-side but kept simple

3. State Management:
   - Could have used Context API
   - Chose local state for simplicity

Future Improvements:
1. Implement client-side caching
2. Add Redux for complex state management
3. Implement unit and integration tests
4. Add more character attributes
5. Implement image loading from alternative sources


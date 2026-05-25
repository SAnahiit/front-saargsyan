# Fashion & Lifestyle Portal

A responsive React/Vite frontend featuring dynamic navigation and real-time content filtering.

##  Features

*   **Navigation**: Sticky desktop header with CSS dropdowns and a mobile drawer with an accordion submenu system.
*   **Search**: Real-time filtering engine using `useMemo` for performance.
    *   Real-time search and filtering engine using `useMemo` for optimized performance.
    *   Async data fetching from localized API services.
    *   Interactive `PostModal` view for detailed content reading.
*   **Architecture**:
    *   Functional component structure with modern React Hooks (`useState`, `useEffect`, `useMemo`).
    *   Modular CSS using the **BEM (Block Element Modifier)** methodology for maintainable and scoped styling.
    *   Optimized asset loading with `srcSet` for high-density (2x) displays.

##  Tech Stack

*   **Framework**: React 18+
*   **Build Tool**: Vite
*   **Styling**: Vanilla CSS (BEM)
*   **Icons/Assets**: Custom PNG/SVG integration

##  Installation & Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

##  Project Structure

*   `src/components/`: Modular UI components (Header, Menus, PostCard, etc.).
*   `src/services/`: API interaction logic.
*   `src/data/`: Static configurations and menu definitions.
*   `src/styles/`: Global variables and base styles.
*   `src/assets/`: Branding and iconography.

##  License

This project is developed as a technical assessment for Front-End engineering capabilities.
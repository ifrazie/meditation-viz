# Meditation Viz

Meditation Viz is a React-based web application designed to visualize meditation-related data. It includes performance monitoring using `reportWebVitals` to measure and log key web vitals metrics.

## Features

- React-based frontend
- Performance monitoring with `reportWebVitals`
- Metrics logging to the console or an analytics endpoint

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/meditation-viz.git
   cd meditation-viz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm start
```

The app will be available at `http://localhost:3000`.

### Performance Monitoring

The app uses `reportWebVitals` to measure key performance metrics such as CLS, FID, FCP, LCP, and TTFB. By default, these metrics are logged to the console. To customize this behavior, modify the `reportWebVitals` function in `src/index.js` or `src/reportWebVitals.js`.

#### Sending Metrics to a Backend

If you want to save metrics to a backend (e.g., SQLite database), follow these steps:

1. Set up a backend server.
2. Update `reportWebVitals.js` to send metrics to the backend using `fetch`.

### Folder Structure

```
src/
├── App.js          # Main application component
├── index.js        # Entry point of the app
├── reportWebVitals.js # Performance monitoring setup
├── index.css       # Global styles
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

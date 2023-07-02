import { React, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./components/fallback";
import AppRoutes from "./routes";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <AppRoutes />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

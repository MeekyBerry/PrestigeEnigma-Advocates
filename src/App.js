import { React, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./components/fallback";
import Nav from "./layout/nav";
import AppRoutes from "./routes";
import Loader from "./assets/image/indicator.gif";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Suspense fallback={<div style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}><img src={Loader} alt="Loading GIF" /></div>}>
        <div className="App">
          <Nav />
          <AppRoutes />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

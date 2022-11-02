import UserProvider from "./context/UserContext";
import { AllRoutes } from "./routes/routes";
import "./styles/globalStyles";

function App() {
  return (
    <UserProvider>
      <AllRoutes />;
    </UserProvider>
  );
}

export default App;

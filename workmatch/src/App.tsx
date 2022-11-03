import UserProvider from "./context/UserContext";
import { AllRoutes } from "./routes/routes";
import "./styles/globalStyles";
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <>
    <UserProvider>
      <AllRoutes />
    </UserProvider>
    <GlobalStyles/>
    </>
  );
}

export default App;

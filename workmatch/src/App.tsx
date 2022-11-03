import UserProvider from "./context/UserContext";
import { AllRoutes } from "./routes/routes";
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <AllRoutes />
      </UserProvider>
    </>
  );
}

export default App;

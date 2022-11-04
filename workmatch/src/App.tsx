import ProjectProvider from "./context/ProjectContext";
import UserProvider from "./context/UserContext";
import { AllRoutes } from "./routes/routes";
import "./styles/globalStyles";
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <>
      <UserProvider>
        <ProjectProvider>
          <AllRoutes />
        </ProjectProvider>
      </UserProvider>
      <GlobalStyles />
    </>
  );
}

export default App;

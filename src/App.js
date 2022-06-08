import RestOfApp from "./components/RestOfApp";
import FirebaseProvider, { FirebaseContext } from "./providers/FirebaseProvider";

function App() {
  return (
  <FirebaseProvider>
  <RestOfApp />;
 </FirebaseProvider>
  )
}

export default App;

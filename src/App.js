import "./App.css";
import Body from "./Body";
import { Provider } from "react-redux";
import appStore, { persistor } from "./redux/appStore";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <Body />
      </PersistGate>
    </Provider>
  );
}

export default App;

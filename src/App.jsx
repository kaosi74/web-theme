import { createContext } from "react";
import useLocalStorage from "use-local-storage";
import MyComponent from "./components/FormComponent";
import ReactSwitch from "react-switch";
import { MoonOutline, SunnyOutline } from "react-ionicons";

export const ThemeState = createContext(null);

function App() {
  const [theme, setTheme] = useLocalStorage(false);

  const toggleThemeMode = () => {
    setTheme(!theme);
  };

  return (
    <ThemeState.Provider value={{ theme, toggleThemeMode }}>
      <ReactSwitch
        onHandleColor="#fff"
        offColor="#808080"
        onColor="#808080"
        uncheckedIcon={<SunnyOutline color={"yellow"} />}
        checkedIcon={<MoonOutline width={30} color={"black"} />}
        onChange={toggleThemeMode}
        checked={theme}
      />
      <MyComponent />
    </ThemeState.Provider>
  );
}

export default App;

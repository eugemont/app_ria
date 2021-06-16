import React, { useState, useRef } from "react";
//import de Home
import { Home, Calories, Recipes, About } from "./pages";

import { ThemeProvider } from "styled-components";
import { MenuItem } from "./components/menu";
import { useOnClickOutside } from "./hooks";
import { GlobalStyles } from "./Globals";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import FocusLock from "react-focus-lock";

function App() {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(<Home />);

  const node = useRef();
  const menuId = "main-menu";
  let itemList = [
    {
      name: "Inicio",
      image: "🏠",
      page: <Home />,
    },
    {
      name: "Calcular Nutrientes",
      image: "📊",
      page: <Calories />,
    },
    ,
    {
      name: "Recetas",
      image: "👨‍🍳",
      page: <Recipes menu={setSelection} />,
    },
    {
      name: "Información",
      image: "📩",
      page: <About />,
    },
  ];
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {selection}
      <div ref={node}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu
            open={open}
            setOpen={setOpen}
            id={menuId}
            setSelection={setSelection}
            items={itemList}
          />
        </FocusLock>
      </div>
    </ThemeProvider>
  );
}

export default App;

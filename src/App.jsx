import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Catalog } from "./pages/Catalog/Catalog";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<div>favorites page</div>} />
          <Route path="*" element={<div>not found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

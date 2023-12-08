import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<div>main 1243</div>} />
          <Route path="catalog" element={<div>catalog page</div>} />
          <Route path="favorites" element={<div>favorites page</div>} />
          <Route path="*" element={<div>not found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

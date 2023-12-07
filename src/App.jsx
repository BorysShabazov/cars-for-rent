import { NavLink, Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavLink to="/">home</NavLink>
              <NavLink to="catalog">catalog</NavLink>
              <NavLink to="favorites">favorites</NavLink>
              {<Outlet />}
            </div>
          }
        >
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

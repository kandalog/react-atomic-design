import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "../components/Pages/Top";
import { Users } from "../components/Pages/Users";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

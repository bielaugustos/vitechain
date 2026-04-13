import { Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Buttons from "@/pages/Buttons"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buttons" element={<Buttons />} />
    </Routes>
  )
}
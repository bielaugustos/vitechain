import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/hooks/useTheme"
import { ResponsiveLayout } from "@/components/ResponsiveLayout"
import Home from "./pages/Home"
import Neobrutalism from "./pages/Neobrutalism"
import Today from "./pages/Today"
import Habits from "./pages/Habits"
import Finances from "./pages/Finances"
import Settings from "./pages/Settings"

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        {/* Rotas públicas - SEM sidebar e navegação */}
        <Route path="/" element={<Home />} />
        <Route path="/neobrutalism" element={<Neobrutalism />} />
        
        {/* Rotas autenticadas - COM sidebar e navegação */}
        <Route element={<ResponsiveLayout />}>
          <Route path="/today" element={<Today />} />
          <Route path="/today/*" element={<Today />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/habits/*" element={<Habits />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/finances/*" element={<Finances />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/*" element={<Settings />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

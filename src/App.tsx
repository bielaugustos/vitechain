import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/hooks/useTheme"
import { ResponsiveLayout } from "@/components/ResponsiveLayout"
import { MobileNavigation } from "@/components/MobileNavigation"
import Home from "./pages/Home"
import Neobrutalism from "./pages/Neobrutalism"
import Today from "./pages/Today"
import Habits from "./pages/Habits"
import Finances from "./pages/Finances"
import Settings from "./pages/Settings"

export default function App() {
  return (
    <ThemeProvider>
      <MobileNavigation />
      <ResponsiveLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/neobrutalism" element={<Neobrutalism />} />
          <Route path="/today" element={<Today />} />
          <Route path="/today/*" element={<Today />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/habits/*" element={<Habits />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/finances/*" element={<Finances />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/*" element={<Settings />} />
        </Routes>
      </ResponsiveLayout>
    </ThemeProvider>
  )
}
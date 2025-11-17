import { Link, NavLink, useNavigate } from 'react-router-dom'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-medium px-3 py-2 rounded-md hover:bg-gray-100 ${isActive ? 'text-gray-900' : 'text-gray-600'}`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Layout({ children }) {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f6]">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="text-base font-extrabold tracking-tight text-gray-900">LV1 Group</button>
          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/brands">Brands</NavItem>
            <NavItem to="/characters">Characters</NavItem>
            <NavItem to="/showroom">Showroom</NavItem>
            <NavItem to="/capabilities">Capabilities</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/press">Press</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-3 text-sm">
          <div>
            <div className="font-semibold text-gray-900">LV1 Group</div>
            <p className="text-gray-600">New Jersey, USA • Family business since 1983</p>
          </div>
          <div className="text-gray-600">General inbox: hello@lv1group.com</div>
          <div className="text-gray-500">Logos/marks shown are owned by their respective owners and used with permission.</div>
        </div>
      </footer>
    </div>
  )
}

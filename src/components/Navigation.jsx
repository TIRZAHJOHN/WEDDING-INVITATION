import { CalendarHeart, MapPin, UsersRound } from 'lucide-react';

const links = [
  { href: '#invitation', label: 'Invitation', icon: CalendarHeart },
  { href: '#venues', label: 'Venues', icon: MapPin },
  { href: '#family', label: 'Family', icon: UsersRound }
];

export default function Navigation() {
  return (
    <nav className="fixed inset-x-0 top-4 z-[60] mx-auto flex w-[min(94vw,900px)] items-center justify-between rounded-full border border-white/35 bg-white/35 px-3 py-2 shadow-rose backdrop-blur-xl">
      <a className="flex items-center gap-2 rounded-full px-3 py-2 font-display text-lg font-semibold text-dusk" href="#home">
        <span className="grid size-8 place-items-center rounded-full bg-dusk text-sm text-champagne shadow-glow">S</span>
        <span className="hidden sm:inline">Sharon & Sam</span>
      </a>

      <div className="flex items-center gap-1">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a className="nav-link" href={link.href} key={link.href}>
              <Icon size={17} aria-hidden="true" />
              <span className="hidden md:inline">{link.label}</span>
            </a>
          );
        })}
        
      </div>
    </nav>
  );
}

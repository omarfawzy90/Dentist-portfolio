interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-13 h-13 flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                <img src="\My logo black transparent-01-01.png" />
              </span>
            </div>
            <span className="font-light text-xl text-slate-800">Dr. Omar</span>
          </button>

          <nav className="flex flex-row items-center gap-x-9">
            <button
              onClick={() => onNavigate("home")}
              className={`text-sm font-medium p-5 transition-colors hover:text-blue-600 ${
                currentPage === "home"
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-slate-600"
              } `}
            >
              Home
            </button>

            <button
              onClick={() => onNavigate("case-studies")}
              className={`text-sm  font-medium p-5 transition-colors hover:text-blue-600 ${
                currentPage === "case-studies"
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-slate-600"
              }`}
            >
              Case Studies
            </button>
            <button>Contact</button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-4">
        {/* Animated logo */}
        <img
          className="h-10 w-10 animate-bounce"
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="Paw Logo"
        />
        <span className="text-2xl font-bold text-indigo-600">DogZone</span>
      </div>

      <nav className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-6">
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-indigo-600"
          >
            Dogs
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-indigo-600"
          >
            Gallery
          </a>
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-indigo-600"
          >
            Adopt
          </a>
        </div>
      </nav>
    </header>
  );
}

// components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-lighter border-t border-gray-200 mt-8">
      <div className="container mx-auto p-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-neutral-light text-sm mb-4 sm:mb-0">
          &copy; {currentYear} My Portfolio.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-neutral-light hover:text-primary">GitHub</a>
          <a href="#" className="text-neutral-light hover:text-primary">LinkedIn</a>
          <a href="#" className="text-neutral-light hover:text-primary">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

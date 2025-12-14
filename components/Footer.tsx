// components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} My Portfolio.</p>
        {/* Add social media links or other footer content here */}
      </div>
    </footer>
  );
}

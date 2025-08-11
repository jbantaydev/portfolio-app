/**
 * Footer component.
 * @returns {JSX.Element} - The rendered component.
 */
export default function Footer() {
  return (
    <footer style={{ padding: '2rem 0', fontSize: '0.9rem' }}>
      <p>© {new Date().getFullYear()} Jaymar Bantay. All rights reserved.</p>
    </footer>
  );
}

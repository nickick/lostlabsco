const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} Lost Labs. All rights reserved.
      </p>
    </footer>
  );
};

export { Footer };

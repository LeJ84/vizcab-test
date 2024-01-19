interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <main className="min-w-dvw min-h-dvh bg-neutral-100 p-4 md:p-10">
      <div className="bg-vizcab-100 p-4 md:p-10 max-w-4xl rounded">
        {children}
      </div>
    </main>
  );
}

export default Layout;

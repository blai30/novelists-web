import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <main>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <div className="mx-auto">
            {children}
          </div>
        </div>
        <Footer />
      </div>

    {/* Scroll top component */}
    </main>
  )
}

export default Layout

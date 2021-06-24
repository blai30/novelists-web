import { NextPage } from "next";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <main id="layout">
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

export const getLayout = (page: NextPage) => <Layout>{page}</Layout>

export default Layout

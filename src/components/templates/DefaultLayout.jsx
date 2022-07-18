import { Footer } from "../atoms/layout.jsx/Footer";
import { Header } from "../atoms/layout.jsx/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

import "../styles/globals.css";
import Sidebar from '../components/modules/sideBar/SideBar'
import Header from '../components/modules/header/Header'
import Container from '../components/modules/container/Container'
export const metadata = {
  title: "Exit Lag",
};
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <main id="_next" >
          <div className="side-bar__wrapper" ><Sidebar/></div>
          <div className="content__wrapper" >
            <Container>
            <Header/>
            {children}
            </Container>
            </div>
        </main>
      </body>
    </html>
  );
}

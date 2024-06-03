
import { ThemeProvider } from "@ui5/webcomponents-react";
import LoginPage from "./Login/page";
import HomeMain from "./components/homeMain/page";
export default function Home() {
  return (
    <main>
      <ThemeProvider>
      
        {/* <Login/> */}
       <HomeMain/>
       {/* <LoginPage/> */}
        </ThemeProvider> 
 
    </main>
  );
}

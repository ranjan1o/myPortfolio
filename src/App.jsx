
import './App.css';
import { Navbar } from './components/Navbar';
import { Header } from './components/header';
import { Project } from './components/Project';
import { Skills } from './components/Skiill';
import { About } from './components/AboutMe';
import { Contact } from './components/Contact';
import { ScrollTo, ScrollArea } from "react-scroll-to";
import { ContactForm } from './components/ContactForm';
function App() {
  return (
    <div className="App">
       <ScrollTo>
                {
                  (scroll) => (
                      <ScrollArea>
                     <Navbar></Navbar>
                      <Header />
                      <About />
                        <Skills />
      <Project />
    
     
   
                      <ContactForm />
                         <Contact />
                      </ScrollArea>
                  )
                }
            </ScrollTo>
      
    </div>
  );
}

export default App;

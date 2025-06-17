import Landing from '../sections/Landing'
import About from '../sections/About'
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';


const Home = () => {
  return (
    <div className="relative hide-scrollbar overflow-y-scroll h-screen">
      <Landing />
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;

import Load from "../sections/Load";
import Header from "../sections/Header";

const Landing = () => {
  return (
    <div className="relative w-full h-screen bg-black/85 overflow-hidden">
      <Load />
      <Header />
    </div>
  );
};

export default Landing;

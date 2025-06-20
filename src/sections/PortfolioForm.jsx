import { motion } from "framer-motion";
import BigButton from "../components/BigButton";
import RedWord from "../components/RedWord";

const PortfolioForm = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black p-6">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        
        {/* Left Section */}
        <motion.div 
          className="flex-1 p-8 flex flex-col justify-center items-center bg-red-600 text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Connect with Me</h2>
          <button className="w-54 py-3 text-sm font-semibold rounded border-2 border-red-600 cursor-pointer bg-black border-white">
          Company <RedWord text="soon" />
        </button>
        </motion.div>

        {/* Right Section (Form) */}
        <motion.form 
          className="flex-1 p-8 space-y-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full p-3 border-2 border-black text-black rounded-lg"
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 border-2 border-black text-black rounded-lg"
            required
          />
          <input 
            type="tel" 
            placeholder="Mobile" 
            className="w-full p-3 border-2 border-black text-black rounded-lg"
          />
          <textarea 
            placeholder="Describe your message..." 
            rows="4"
            className="w-full p-3 border-2 border-black text-black rounded-lg"
          />
          

        <BigButton design="w-full bg-red-600 border-red-600" text="Explore Me" />
        </motion.form>
      </div>
    </div>
  );
};

export default PortfolioForm;

import { useState } from "react";
import portfolio from '../assets/projects/portfolio.png'

const ProjectSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    `${portfolio}`,
    'https://img.freepik.com/free-psd/company-landing-page-template_23-2148709865.jpg?uid=R197250717&ga=GA1.1.145892529.1744959225&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-vector/construction-landing-page_23-2148183146.jpg?uid=R197250717&ga=GA1.1.145892529.1744959225&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-vector/organic-flat-design-motiongraphics-landing-page_23-2148887092.jpg?uid=R197250717&ga=GA1.1.145892529.1744959225&semt=ais_hybrid&w=740',
    'https://img.freepik.com/premium-psd/3d-ui-ux-design-banner-landing-page-template-with-social-media-icon_530669-389.jpg?uid=R197250717&ga=GA1.1.145892529.1744959225&semt=ais_hybrid&w=740'
  ] 

  return (
    <div className="flex items-center lg:absolute lg:bottom-2 lg:right-10 gap-1">
      {cards.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveIndex(index)}
          className={`
            h-52 rounded-2xl shadow-xs overflow-hidden shadow-red-600 transition-all duration-300 ease-in-out
            ${activeIndex === index ? "w-64" : "w-20"}
            cursor-pointer
          `}
        >
          <img className="w-full h-full object-center object-cover" src={item} alt="projects" />
        </div>
      ))}
    </div>
  );
};

export default ProjectSlider;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Load = () => {
  const parentLoadRef = useRef(null);
  const childLoadRef = useRef(null);

  const loadTime = gsap.timeline();

  useGSAP(() => {
    loadTime.to(childLoadRef.current, {
      width: "100%",
      duration: 1.2,
      delay: 1,
    });

    loadTime.to(parentLoadRef.current, {
        y: '-100%',
        duration: .7,
    })
  }, { scope: parentLoadRef });

  return (
    <div ref={parentLoadRef} className="fixed w-full h-full bg-black z-50">
      <div className="w-full h-1 bg-transparent">
        <div ref={childLoadRef} className="w-0 h-full bg-red-600"></div>
      </div>
    </div>
  );
};

export default Load;

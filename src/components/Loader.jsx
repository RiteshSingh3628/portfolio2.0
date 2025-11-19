import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import anime from 'animejs';
import '../styles/Loader.css';

const Loader = ({ onLoadComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: onLoadComplete
        });
      }
    });

    // Animate counter
    let counter = { value: 0 };
    anime({
      targets: counter,
      value: 100,
      duration: 2500,
      easing: 'easeInOutQuad',
      update: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.floor(counter.value) + '%';
        }
      }
    });

    // Animate progress bar
    tl.to(progressRef.current, {
      width: '100%',
      duration: 2.5,
      ease: 'power2.inOut'
    });

    // Animate text
    tl.from(textRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0.2);

    // Stagger animation for loader bars
    anime({
      targets: '.loader-bar',
      scaleY: [
        { value: 1, duration: 500 },
        { value: 0.5, duration: 500 }
      ],
      opacity: [
        { value: 1, duration: 500 },
        { value: 0.3, duration: 500 }
      ],
      delay: anime.stagger(100),
      loop: true,
      easing: 'easeInOutQuad'
    });

  }, [onLoadComplete]);

  return (
    <div className="loader-container" ref={loaderRef}>
      <div className="loader-content">
        <div className="loader-bars">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="loader-bar"></div>
          ))}
        </div>
        <h2 ref={textRef} className="loader-text">Loading Portfolio</h2>
        <div className="progress-container">
          <div className="progress-bar" ref={progressRef}></div>
        </div>
        <div className="counter" ref={counterRef}>0%</div>
      </div>
    </div>
  );
};

export default Loader;

import React from 'react';
import anime from 'animejs';

const Loading = () => {
  React.useEffect(() => {
    anime({
      targets: '.loading-dot',
      translateY: [-20, 0],
      delay: anime.stagger(100),
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-dots">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .loading-dots {
          display: flex;
          gap: 10px;
        }
        .loading-dot {
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default Loading;
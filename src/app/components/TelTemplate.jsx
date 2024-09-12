import { useEffect, useRef } from 'react';

export default function TelTemplate({entry}){
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'your-template-image-url.jpg';
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.font = '30px Lora';
      ctx.fillStyle = 'white';
      ctx.fillText(entry, 50, 50);
    };
  }, []);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'telefonoPK.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div>
      <canvas ref={canvasRef} width="1080" height="1920"></canvas>
      <button onClick={downloadImage}>Descargar Teléfono</button>
    </div>
  );
};
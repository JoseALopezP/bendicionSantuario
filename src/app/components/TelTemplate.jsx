'use client';

import { useEffect, useRef, useState } from 'react';
import { telRandom } from '@/utils/telUtils';
import styles from './TelTemplate.module.css'
import Link from 'next/link';

export default function TelTemplate() {
  const canvasRef = useRef(null);
  const offscreenCanvasRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(1080);

  useEffect(() => {
    const updateScreenWidth = () => {
      if (typeof window !== 'undefined') {
        setScreenWidth(window.innerWidth);
      }
    };

    updateScreenWidth(); // Initial setup
    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const offscreenCanvas = offscreenCanvasRef.current;
    if (!canvas || !offscreenCanvas) return;

    const ctx = canvas.getContext('2d');
    const offscreenCtx = offscreenCanvas.getContext('2d');

    const img = new Image();
    img.src = '/telimg.png';

    // Function to wrap text
    const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
      const words = text.split(' ');
      let line = '';
      let lines = [];
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && i > 0) {
          lines.push(line);
          line = words[i] + ' ';
        } else {
          line = testLine;
        }
      }
      lines.push(line);
      lines.forEach((line, index) => {
        context.fillText(line, x, y + index * lineHeight);
      });
    };

    img.onload = () => {
      // High-resolution offscreen canvas
      offscreenCtx.drawImage(img, 0, 0, offscreenCanvas.width, offscreenCanvas.height);
      offscreenCtx.font = 'bold italic 84px Lora';
      offscreenCtx.fillStyle = 'white';
      offscreenCtx.textAlign = 'center';
      wrapText(offscreenCtx, telRandom(), offscreenCanvas.width / 2, 220, offscreenCanvas.width - 100, 84);

      // Scale down for display on screen
      ctx.drawImage(offscreenCanvas, 0, 0, canvas.width, canvas.height);
    };

    img.onerror = () => {
      console.error('Failed to load the image');
    };

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      offscreenCtx.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
    };
  }, [screenWidth]);

  const downloadImage = () => {
    const offscreenCanvas = offscreenCanvasRef.current;
    if (!offscreenCanvas) return;

    const link = document.createElement('a');
    link.download = 'telefonoPK.png';
    link.href = offscreenCanvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div>
      <Link className={styles.backButton} href="/bendicionsj">&nbsp;&nbsp;&lt;</Link>
      {/* Visible canvas, sized according to screen width */}
      <canvas ref={canvasRef} width={screenWidth} height={(screenWidth / 1080) * 1920}></canvas>

      {/* Offscreen high-quality canvas */}
      <canvas ref={offscreenCanvasRef} width="1080" height="1920" style={{ display: 'none' }}></canvas>

      <button className={`${styles.download}`} onClick={downloadImage}>Descargar</button>
    </div>
  );
}

import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './ValentineECard.css';

function ValentineECard({ recipientName, senderName, message }) {
  const cardRef = useRef(null);

  const downloadAsPdf = async () => {
    if (!cardRef.current) return;

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'px', [canvas.width, canvas.height]);
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('valentine-ecard-2026.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="valentine-ecard-wrapper">
      <div className="valentine-ecard" ref={cardRef}>
        <div className="ecard-hearts-top">
          <span>❤️</span>
          <span>💕</span>
          <span>❤️</span>
        </div>

        <div className="ecard-content">
          <h2 className="ecard-to">To: {recipientName || 'My Valentine'}</h2>

          <div className="ecard-message">
            <p>{message || 'Will you be my Valentine?'}</p>
          </div>

          <div className="ecard-from">
            <p>Best,</p>
            <h3>{senderName || 'Your Secret Admirer'}</h3>
          </div>
        </div>

        <div className="ecard-hearts-bottom">
          <span>💗</span>
          <span>❤️</span>
          <span>💗</span>
        </div>

        <div className="ecard-year">2/14/2026</div>
      </div>

      <button className="download-button" onClick={downloadAsPdf}>
        Download E-Card (PDF)
      </button>
    </div>
  );
}

export default ValentineECard;

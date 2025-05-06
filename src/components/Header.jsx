import React from 'react';
import '../styles/Header.css';

function Header({ total, advancePayment, remainingToPay }) {
  return (
    <header className="header">
      <h1 className="header-title">Gestion de Factures</h1>
      <div className="summary-container">
        <div className="summary-item">
          <span className="summary-label">Montant Total</span>
          <span className="summary-value">{total.toFixed(2)} DH</span>
        </div>
        
        <div className="summary-item">
          <span className="summary-label">Avance Versée</span>
          <span className="summary-value">{Number(advancePayment).toFixed(2)} DH</span>
        </div>
        
        <div className="summary-item">
          <span className="summary-label">Reste à Payer</span>
          <span className="summary-value">{remainingToPay.toFixed(2)} DH</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
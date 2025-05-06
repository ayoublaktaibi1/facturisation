import React from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';
import '../styles/Sidebar.css';

function Sidebar({
  currentItem,
  setCurrentItem,
  advancePayment,
  setAdvancePayment,
  handleSubmit,
  isEditing,
  handleCancel,
  formErrors,
  handleClearStorage
}) {
  return (
    <aside className="sidebar">
      <h2 className="form-title">
        {isEditing ? 'Modifier l\'article' : 'Ajouter un article'}
      </h2>
     
      <div>
        <div className="input-group">
          <label className="form-label" htmlFor="name">
            Nom de l'article
          </label>
          <input
            id="name"
            type="text"
            className="form-input"
            value={currentItem.name}
            onChange={(e) => setCurrentItem({...currentItem, name: e.target.value})}
          />
          {formErrors.name && <p className="error-message">{formErrors.name}</p>}
        </div>
       
        <div className="input-group">
          <label className="form-label" htmlFor="quantity">
            Quantité
          </label>
          <input
            id="quantity"
            type="number"
            className="form-input"
            value={currentItem.quantity}
            onChange={(e) => setCurrentItem({...currentItem, quantity: e.target.value})}
            min="1"
            step="0.01"
          />
          {formErrors.quantity && <p className="error-message">{formErrors.quantity}</p>}
        </div>
       
        <div className="input-group">
          <label className="form-label" htmlFor="unitPrice">
            Prix unitaire (DH)
          </label>
          <input
            id="unitPrice"
            type="number"
            className="form-input"
            value={currentItem.unitPrice}
            onChange={(e) => setCurrentItem({...currentItem, unitPrice: e.target.value})}
            min="0"
            step="0.01"
          />
          {formErrors.unitPrice && <p className="error-message">{formErrors.unitPrice}</p>}
        </div>
       
        <div className="button-container">
          <button type="button" onClick={handleSubmit} className="primary-button">
            {isEditing ? (
              <>
                <Save size={18} className="button-icon" /> Enregistrer
              </>
            ) : (
              <>
                <Plus size={18} className="button-icon" /> Ajouter
              </>
            )}
          </button>
         
          {isEditing && (
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >
              Annuler
            </button>
          )}
        </div>
       
        <div className="payment-section">
          <h3 className="payment-title">Paiement</h3>
          <div className="input-group">
            <label className="form-label" htmlFor="advancePayment">
              Avance versée (DH)
            </label>
            <input
              id="advancePayment"
              type="number"
              className="form-input"
              value={advancePayment}
              onChange={(e) => setAdvancePayment(e.target.value)}
              min="0"
              step="0.01"
            />
          </div>
        </div>
        
        {/* Bouton pour vider le localStorage */}
        <div className="clear-storage-section">
          <button
            type="button"
            className="clear-storage-button"
            onClick={handleClearStorage}
          >
            <Trash2 size={18} className="button-icon" /> Effacer toutes les données
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
import React from 'react';
import ItemsTable from './ItemsTable';
import '../styles/MainContent.css';

function MainContent({ items, handleEdit, handleDelete }) {
  return (
    <main className="main-content">
      <h2 className="content-title">Articles de la facture</h2>
      
      {items.length > 0 ? (
        <ItemsTable 
          items={items} 
          handleEdit={handleEdit} 
          handleDelete={handleDelete} 
        />
      ) : (
        <div className="empty-state">
          <p>Aucun article ajouté à la facture</p>
          <p className="empty-state-subtitle">Utilisez le formulaire pour ajouter des articles</p>
        </div>
      )}
    </main>
  );
}

export default MainContent;
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './styles/App.css';

function App() {
  // Charger les données depuis localStorage
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('invoiceItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [advancePayment, setAdvancePayment] = useState(() => {
    const savedAdvance = localStorage.getItem('invoiceAdvance');
    return savedAdvance ? Number(savedAdvance) : '';
  });

  // Sauvegarder les données dans localStorage
  useEffect(() => {
    localStorage.setItem('invoiceItems', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('invoiceAdvance', advancePayment);
  }, [advancePayment]);

  const [currentItem, setCurrentItem] = useState({
    id: null,
    name: '',
    quantity: '',
    unitPrice: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // Calcul des totaux
  const total = items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  const remainingToPay = Math.max(0, total - advancePayment);

  // Validation du formulaire
  const validateForm = () => {
    const errors = {};
    if (!currentItem.name.trim()) errors.name = 'Le nom est requis';
    if (currentItem.quantity <= 0) errors.quantity = 'La quantité doit être > 0';
    if (currentItem.unitPrice <= 0) errors.unitPrice = 'Le prix unitaire doit être > 0';
   
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Ajout ou modification d'un article
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
   
    if (!validateForm()) return;
   
    if (isEditing) {
      setItems(items.map(item =>
        item.id === currentItem.id ? { ...currentItem } : item
      ));
      setIsEditing(false);
    } else {
      const newItem = {
        ...currentItem,
        id: Date.now(),
      };
      setItems([...items, newItem]);
    }
   
    // Réinitialisation du formulaire
    setCurrentItem({
      id: null,
      name: '',
      quantity: '',
      unitPrice: '',
    });
  };

  // Modification d'un article existant
  const handleEdit = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
  };

  // Suppression d'un article
  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Annulation de l'édition
  const handleCancel = () => {
    setCurrentItem({
      id: null,
      name: '',
      quantity: '',
      unitPrice: '',
    });
    setIsEditing(false);
    setFormErrors({});
  };

  // Fonction pour vider le localStorage
  const handleClearStorage = () => {
    // Supprimer les données du localStorage
    localStorage.removeItem('invoiceItems');
    localStorage.removeItem('invoiceAdvance');
    
    // Réinitialiser l'état
    setItems([]);
    setAdvancePayment('');
    setCurrentItem({
      id: null,
      name: '',
      quantity: '',
      unitPrice: '',
    });
    setIsEditing(false);
    setFormErrors({});
  };

  return (
    <div className="app-container">
      {/* Header avec les totaux */}
      <Header
        total={total}
        advancePayment={advancePayment}
        remainingToPay={remainingToPay}
      />
     
      <div className="main-container">
        {/* Sidebar avec le formulaire */}
        <Sidebar
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          advancePayment={advancePayment}
          setAdvancePayment={setAdvancePayment}
          handleSubmit={handleSubmit}
          isEditing={isEditing}
          handleCancel={handleCancel}
          formErrors={formErrors}
          handleClearStorage={handleClearStorage}
        />
       
        {/* Zone principale avec tableau des articles */}
        <MainContent
          items={items}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
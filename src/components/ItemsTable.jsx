import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import '../styles/ItemsTable.css';

function ItemsTable({ items, handleEdit, handleDelete }) {
  const totalAmount = items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  
  return (
    <table className="items-table">
      <thead className="table-header">
        <tr>
          <th className="table-th">Article</th>
          <th className="table-th">Quantité</th>
          <th className="table-th">Prix unitaire</th>
          <th className="table-th">Sous-total</th>
          <th className="table-th">Actions</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {items.map((item) => (
          <tr key={item.id}>
            <td className="table-td">{item.name}</td>
            <td className="table-td">{item.quantity}</td>
            <td className="table-td">{Number(item.unitPrice).toFixed(2)} DH</td>
            <td className="table-td">{(Number(item.quantity) * Number(item.unitPrice)).toFixed(2)} DH</td>
            <td className="table-td">
              <div className="action-buttons">
                <button 
                  className="action-button"
                  onClick={() => handleEdit(item)}
                  title="Modifier"
                >
                  <Edit size={16} color="#3b82f6" />
                </button>
                <button 
                  className="action-button"
                  onClick={() => handleDelete(item.id)}
                  title="Supprimer"
                >
                  <Trash2 size={16} color="#ef4444" />
                </button>
              </div>
            </td>
          </tr>
        ))}
        <tr className="total-row">
          <td colSpan="3" className="table-td text-right">Total</td>
          <td className="table-td">{totalAmount.toFixed(2)} DH</td>
          <td className="table-td"></td>
        </tr>
      </tbody>
    </table>
  );
}

export default ItemsTable;
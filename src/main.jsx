import React from 'react';import{createRoot}from'react-dom/client';import App from './App';import{CartProvider}from'./context/CartContext';import{AccessibilityProvider}from'./context/AccessibilityContext';import './styles.css';
createRoot(document.getElementById('root')).render(<AccessibilityProvider><CartProvider><App/></CartProvider></AccessibilityProvider>);

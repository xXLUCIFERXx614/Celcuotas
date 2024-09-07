// RequisitosCredito.js
import React from "react";
import './styles/RequisitosCredito.css'; // Ajusta la ruta según la ubicación de tus estilos

const RequisitosCredito = () => {
    return (
        <div className="requisitos-container">
            <h1>Requisitos para Obtener un Crédito</h1>
            <ul>
                <li>Historial crediticio limpio</li>
                <li>Ingresos mínimos requeridos</li>
                <li>Documento de identificación válido</li>
                <li>Edad mínima (generalmente 18 años)</li>
                <li>Estabilidad laboral</li>
                <li>Garantías adicionales (dependiendo del tipo de crédito)</li>
            </ul>
        </div>
    );
};

export default RequisitosCredito;

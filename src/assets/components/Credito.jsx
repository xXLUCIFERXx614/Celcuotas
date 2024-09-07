import React, { useState } from "react";
import './styles/Credito.css';

const Credito = () => {
    const [capital, setCapital] = useState('');
    const [cuotas, setCuotas] = useState('');
    const [tasaInteres, setTasaInteres] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularPrestamo = () => {
        const p = parseFloat(capital);
        const n = parseInt(cuotas);
        const tasaInteresMensual = parseFloat(tasaInteres) / 100; // Tasa de interés mensual
        const cuota = (p * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -n)); // Fórmula de cuota fija

        const cuotasArray = [];
        let saldoCapital = p;
        let totalCuota = 0;
        let totalInteres = 0;
        let totalAmortizacion = 0;

        for (let i = 1; i <= n; i++) {
            const interes = saldoCapital * tasaInteresMensual;
            const amortizacion = cuota - interes;
            saldoCapital -= amortizacion;

            cuotasArray.push({
                numeroCuota: i,
                cuota: cuota.toFixed(2),
                interes: interes.toFixed(2),
                amortizacion: amortizacion.toFixed(2),
                saldoCapital: saldoCapital.toFixed(2)
            });

            totalCuota += cuota;
            totalInteres += interes;
            totalAmortizacion += amortizacion;
        }

        setResultado({
            cuotaMensual: cuota.toFixed(2),
            totalAPagar: (cuota * n).toFixed(2),
            cuotas: cuotasArray,
            totales: {
                totalCuota: totalCuota.toFixed(2),
                totalInteres: totalInteres.toFixed(2),
                totalAmortizacion: totalAmortizacion.toFixed(2)
            }
        });
    };

    return (
        <div className="credito-form">
            <h1>SIMULADOR DE CRÉDITO</h1>
            <div>
                <label htmlFor="capital">Monto del Préstamo:</label>
                <input type="number" id="capital" value={capital} onChange={e => setCapital(e.target.value)} />
            </div>
            <div>
                <label htmlFor="cuotas">Número de Cuotas:</label>
                <input type="number" id="cuotas" value={cuotas} onChange={e => setCuotas(e.target.value)} />
            </div>
            <div>
                <label htmlFor="tasaInteres">Tasa de Interés Mensual (%):</label>
                <input type="number" id="tasaInteres" value={tasaInteres} onChange={e => setTasaInteres(e.target.value)} />
            </div>
            <button onClick={calcularPrestamo}>Calcular</button>
            {resultado && (
                <div className="resultados">
                    <h2>Resultados</h2>
                    <p>Cuota Mensual: {resultado.cuotaMensual}</p>
                    <p>Total a Pagar: {resultado.totalAPagar}</p>
                    <table className="tab">
                        <thead>
                            <tr>
                                <th>Nro. Cuota</th>
                                <th>Cuota</th>
                                <th>Interés</th>
                                <th>Abono Capital</th>
                                <th>Saldo Capital</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultado.cuotas.map(cuota => (
                                <tr key={cuota.numeroCuota}>
                                    <td>{cuota.numeroCuota}</td>
                                    <td>{cuota.cuota}</td>
                                    <td>{cuota.interes}</td>
                                    <td>{cuota.amortizacion}</td>
                                    <td>{cuota.saldoCapital}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="1">Total</td>
                                <td>{resultado.totales.totalCuota}</td>
                                <td>{resultado.totales.totalInteres}</td>
                                <td>{resultado.totales.totalAmortizacion}</td>
                                <td></td> {/* Ajusta el número de columnas según la estructura de tu tabla */}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Credito;

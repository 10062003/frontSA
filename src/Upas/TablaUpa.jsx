import React, { useState } from 'react';
import { Download, Search, FileText, FileJson, ScrollText, Sheet } from 'lucide-react';
import './TablaUpa.css';

const TablaUpa = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState({ column: null, asc: true });

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleSort = (index) => {
        setSortBy({
            column: index,
            asc: sortBy.column === index ? !sortBy.asc : true,
        });
    };

    // Datos de ejemplo para las filas de la tabla
    const data = [
        { id: 1, nombre: 'Lestoma', ubicacion: 'Facatativá', estado: 'Activo', descripcion: 'Texto descriptivo' },
        { id: 2, nombre: 'HydroDomusLab', ubicacion: 'Soacha', estado: 'En preparación', descripcion: 'Texto descriptivo' },
        { id: 3, nombre: 'EcoAquaInnovación', ubicacion: 'Girardot', estado: 'En preparación', descripcion: 'Texto descriptivo' },
        { id: 4, nombre: 'AquaTechLab', ubicacion: 'Chía', estado: 'Inactivo', descripcion: 'Texto descriptivo' },
        // Agrega más datos de ejemplo si es necesario
    ];

    // Ordena las filas según el ID de manera ascendente
    const sortedRows = data.sort((a, b) => {
        return sortBy.asc ? a.id - b.id : b.id - a.id;
    });

    // Filtra las filas según el término de búsqueda
    const filteredRows = sortedRows.filter(row => {
        return (
            row.nombre.toLowerCase().includes(searchTerm) ||
            row.ubicacion.toLowerCase().includes(searchTerm) ||
            row.estado.toLowerCase().includes(searchTerm) ||
            row.descripcion.toLowerCase().includes(searchTerm)
        );
    });

    return (
        <div className='bodystyle'>
            <main className="table" id="customers_table">
                <section className="table__header">
                    <h1><strong>Listado de Upas</strong></h1>
                    <div className="input-group">
                        <input type="search" placeholder="Buscar Upa" onChange={handleSearch} value={searchTerm} />
                        <Search />
                    </div>
                    <div className="export__file">
                        <label htmlFor="export-file" className="export__file-btn" title="Export File">
                            <Download />
                        </label>
                        <input type="checkbox" id="export-file" />
                        <div className="export__file-options">
                            <label>Export As &nbsp; &#10140;</label>
                            <label htmlFor="export-file" id="toPDF">
                                PDF <ScrollText />
                            </label>
                            <label htmlFor="export-file" id="toJSON">
                                JSON <FileJson />
                            </label>
                            <label htmlFor="export-file" id="toCSV">
                                CSV <FileText />
                            </label>
                            <label htmlFor="export-file" id="toEXCEL">
                                EXCEL <Sheet />
                            </label>
                        </div>
                    </div>
                </section>
                <section className="table__body">
                    <table>
                        <thead>
                            <tr>
                                <th onClick={() => handleSort(0)}> Id </th>
                                <th onClick={() => handleSort(1)}> Nombre </th>
                                <th onClick={() => handleSort(2)}> Ubicación </th>
                                <th onClick={() => handleSort(3)}> Estado </th>
                                <th onClick={() => handleSort(4)}> Descripción </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRows.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.id}</td>
                                    <td>{row.nombre}</td>
                                    <td>{row.ubicacion}</td>
                                    <td>{row.estado}</td>
                                    <td>{row.descripcion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default TablaUpa;

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rutaDB = path.join(__dirname,'dataInfo.json');

function dbConnect(){
    
    // Leer toda la base
    function getAll() {
    const data = fs.readFileSync(rutaDB, 'utf-8');
    return JSON.parse(data);
    }

    // Buscar por ID
    function getById(id) {
    const data = getAll();
    return data.find(item => item.id === id);
    }

    // Agregar un nuevo producto
    function addProduct(producto) {
    const data = getAll();
    const nuevo = { id: Date.now(), ...producto }; 
    data.push(nuevo);
    fs.writeFileSync(rutaDB, JSON.stringify(data, null, 2));
    return nuevo;
    }

    // Actualizar producto
    function updateProduct(id, nuevosDatos) {
    const data = getAll();
    const index = data.findIndex(p => p.id === id);
    if (index === -1) return null;

    data[index] = { ...data[index], ...nuevosDatos };
    fs.writeFileSync(rutaDB, JSON.stringify(data, null, 2));
    return data[index];
    }

    // Eliminar producto
    function deleteProduct(id) {
    let data = getAll();
    const originalLength = data.length;
    data = data.filter(p => p.id !== id);
    fs.writeFileSync(rutaDB, JSON.stringify(data, null, 2));
    return data.length < originalLength;
    }

     
  return {
    getAll,
    getById,
    addProduct,
    updateProduct,
    deleteProduct,
  };

}

export default dbConnect;
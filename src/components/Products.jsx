import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { showAlert } from './functions';

const Products = () => {
    const url = 'http://localhost:3123/';
    const [products, setProducts] = useState([]);
    const [id, setId] = useState('');
    const [provider, setProvider] = useState('');
    const [type, setType] = useState('');
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [availability, setaAvailability] = useState('');

    useEffect(() => {
        (async () => {
            var respuesta = await axios.get(url);

            console.log(respuesta)

            respuesta.catch((error) => {
                throw console.log(error);
            })

            // setProducts(response.data)
        })();
    }, [url]);

    return (
        <main>

        </main>
    );
}

export default Products;

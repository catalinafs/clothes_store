import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const showAlert = (message, icono, focus) => {
    onfocus(focus);

    // const MySwal = withReactContent(Swal);
    Swal.fire(
        message,
        icono
    );
}

function onfocus(focus) {
    if (focus !== '') document.getElementById(focus).focus();
}
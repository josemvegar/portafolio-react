import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(({pagina = 1}) => {


    const [empleados, setEmpleados] = useState([]);
    

    const conseguirEmpleados = async (p) => {
        const url = "https://reqres.in/api/users?page=" + p;
        const peticion = await fetch(url);
        const {data} = await peticion.json();

        setEmpleados(data);
    }

    useEffect(() => {
        conseguirEmpleados(pagina);
    }, [pagina]);

    useEffect(() => {
        console.log("Se ha vuelto a renderizar empleados.");
    }, [empleados]);

  return (
    <div>
        <p>Mostrnado la página: {pagina}</p>
        <ul className='empleados'>
            {empleados.map(empleado => {
                return <li key={empleado.id}>{empleado.first_name + " " + empleado.last_name}</li>
            })}
        </ul>   
    </div>
  )
}
);
import React from "react";

import "./styles.css";

const Registro = () => {
  const [vista, setVista] = React.useState(1);

  const [user, setUser] = React.useState({
    name: "",
    apellido: "",
    edad: "",
    telefono: "",
    especialidad: "",
    id: 0,
    discordUser: "",
    githubUser: "",
  });

  const [reload, setReload] = React.useState(false);

  React.useEffect(() => {
    const getUserInfo = async () => {
      /*  const { data } = await axios.get("alksdjfalksjdflakds/42"); */
      //obtener la información del usuario

      const data = {
        name: "Jesús",
        apellido: "García",
        edad: 21,
        telefono: "6683953921",
        especialidad: "front end",
        id: 341,
        discordUser: "jesus#3424",
        githubUser: "JesusfGarcia",
      };

      setUser(data);
    };

    getUserInfo();
  }, [reload]);

  const sendInfo = async () => {
    try {
      /*      const response = await axios.put(`/url/${user.id}`, user); */
    } catch (error) {}
  };

  const userTextChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  const cancelar = () => {
    setReload(!reload);
  };

  return (
    <div className="container">
      <div className="tab-container">
        <button onClick={() => setVista(1)}>Información General</button>
        <button onClick={() => setVista(2)}>Información de estudiante</button>
        <button onClick={() => setVista(3)}>Extra</button>
      </div>

      <div className="form-container">
        Formulario
        {vista === 1 && (
          <div>
            <label htmlFor="name">Nombre</label>
            <input id="name" value={user.name} onChange={userTextChange} />
            <label htmlFor="apellido">Apellidos</label>
            <input
              id="apellido"
              value={user.apellido}
              onChange={userTextChange}
            />
            <label htmlFor="edad">Edad</label>
            <input id="edad" value={user.edad} onChange={userTextChange} />
            <label htmlFor="telefono">Telefono</label>
            <input
              id="telefono"
              value={user.telefono}
              onChange={userTextChange}
            />
          </div>
        )}
        {vista === 2 && (
          <div>
            <input value={user.especialidad} />
          </div>
        )}
        {vista === 3 && (
          <div>
            <input value={user.discordUser} />
            <input value={user.githubUser} />
          </div>
        )}
        <button onClick={cancelar}>Cancelar</button>
      </div>
    </div>
  );
};

export default Registro;

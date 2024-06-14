import React, { useState, useEffect, useRef } from "react";
import { validarToken } from "../../auth/auth";
import Swal from "sweetalert2";
import Axios from "axios";
import MaterialTable from 'material-table';
import { ThemeProvider} from '@mui/material';
import { createTheme } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CircularProgress } from "@material-ui/core";
import {
  Row,
  Form,
} from "react-bootstrap";

function LoadingSpinner() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <CircularProgress />
      </div>
    );
  }

export default function ListaEstado () {
  const [originalValues, setOriginalValues] = useState({});
  const [mEstados, setEstados] = useState([]);

  const [mEtdEstado, setNombre] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  

  const [mEstadoId, setEstado] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formRef = useRef(null);
  useEffect(() => {


    const token = sessionStorage.getItem("Token");
    if (!token) {
      // El token no existe en la sesión, redirigir al usuario a la página de inicio de sesión
      Swal.fire({
        icon: "error",
        title: "Error de autenticación",
        text: "Debe iniciar sesión para acceder a esta página",
        showConfirmButton: false,
        timer: 5500,
        iconColor: "#F7931E",
        backdrop: `
      rgba(255,255,255,1)
    `,
      });
      window.location.href = "/#/login";
      return;
    }
    const Token = token ? token.slice(1, -1) : "";

   
    
    setTimeout(() => {
        
        setIsLoading(false);
  
    }, 1000);
    obtenerEstados();

  }, []);


const obtenerEstados = async () => {
      const token = sessionStorage.getItem("Token");
      const Token = token.slice(1, -1);
      const respuesta = await Axios.get("/GetListarEstado", {
        headers: {
          Authorization: "Bearer " + Token,
        },
      });
      setEstados(respuesta.data);
    
     
}

const obtenerEstado = async (mEstadoId) => {
  
  setShow(true);
  console.log("el id que envio es: "+mEstadoId);
  const MEstadoId = mEstadoId;
  const token = sessionStorage.getItem("Token");
  const Token = token.slice(1, -1);
  const respuesta = await Axios.post("/PostListarEstadoId/",{MEstadoId},{
    headers: {
      Authorization: "Bearer " + Token,
      "Content-Type": "application/json"
    },
  });

  const data = respuesta.data[0];
  setOriginalValues(data);
  console.log("la data que traigo es: "+JSON.stringify(data));

  setEstado(data.mEstadoId);
  setNombre(data.mEtdEstado);
  
 
    
}
const actualizarEstado = async (e) => {
  e.preventDefault();
  const estadoId = mEstadoId;
 
  const token = sessionStorage.getItem("Token");
  const Token = token.slice(1, -1);
const usuarioOriginal = originalValues;

const estadoo = {
    EtdId: estadoId,
  EtdEstado: mEtdEstado !== usuarioOriginal.mEtdEstado ? mEtdEstado : undefined,
  
};



const EstadoDuplicado = mEstados.some(
  (estado) => estado.mEtdEstado === mEtdEstado && estado.mEtdEstado !== usuarioOriginal.mEtdEstado
);
if (EstadoDuplicado) {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Ya existe un Documento con ese nombre",
    showConfirmButton: false,
    timer: 5500,
    iconColor: "#F7931E",
  });
} else {
  

  const respuesta = await Axios.put("PutEditarEstado/",estadoo,{
    headers: {
      Authorization: "Bearer " + Token,
      "Content-Type": "application/json"
    },
   
  });
  console.log(respuesta);
  console.log("LA INFORMACION QUE ENVIO: "+JSON.stringify(respuesta.data));
  obtenerEstados();
  Swal.fire({
    icon: "success",
    title: "Estado Actualizado",
    showConfirmButton: false,
    timer: 5500,
    iconColor: "#00A99D",
  });
  setShow(false);
}
}

const data =
mEstados.map((estado) => ({
    mEstadoId : estado.mEstadoId,
    mEtdEstado: estado.mEtdEstado,
   
   
    
  
  }));
 

      const columns = [
        { title: "Nombre", field: "mEtdEstado" },
       
  
       
      ];
      const mytheme =  createTheme({
      });

      const options = {
        actionsColumnIndex: -1, // Índice de la columna de acciones
        search: true, // Puedes desactivar la opción de búsqueda si lo deseas
        headerStyle: {
          textTransform: 'capitalize', // Aplica el estilo de capitalización a los encabezados de columna
        },
      };
      
      const localization = {
        header: {
          actions: 'Editar', // Cambia el título de la columna de acciones
        },
        body: {
          emptyDataSourceMessage: 'No hay registros para mostrar',
          addTooltip: 'Agregar',
          deleteTooltip: 'Eliminar',
          editTooltip: 'Editar',
          editRow: {
            cancelTooltip: 'Cancelar',
            saveTooltip: 'Guardar',
            deleteText: '¿Está seguro que desea eliminar este registro?',
          },
        },
        toolbar: {
          searchTooltip: 'Buscar',
          searchPlaceholder: 'Buscar',
        },
        pagination: {
          labelRowsSelect: 'filas',
          labelDisplayedRows: '{from}-{to} de {count}',
          firstTooltip: 'Primera página',
          previousTooltip: 'Página anterior',
          nextTooltip: 'Siguiente página',
          lastTooltip: 'Última página',
          labelRowsPerPage: 'Filas por página:',
        },
      };
    return (
        
        <div  style={{width: "95%",margin: "0 auto"}}  >
          <br/>
          {isLoading ? (
            <LoadingSpinner />    
          ) : (
        <ThemeProvider theme={mytheme}>
        <MaterialTable title="Tipos de Estados" columns={columns} data={data}
        
          actions={[
            {
            icon: 'edit',
            tooltip: 'Editar Estado',
            onClick: (event, rowData) => obtenerEstado(rowData.mEstadoId),
          }]}
          options ={options}
          localization={localization}
        />
        </ThemeProvider>
          )}
        <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <div className="container max-height-75  vh-100  ">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="card">
            <div className="container text-center "></div>
            <div
              id="colorAceptar"
              className="card-header color-aceptar text-center"
            >
              <h5>Editar Estado</h5>
            </div>
            <form className="container mt-3 mb-3">
            <Row className="mb-3">
                <Form.Group controlId="formBasicEmail" className="col col-sm-13">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="name"
                    name="Nombre"
                    onChange={(e) => setNombre(e.target.value)} value={mEtdEstado}
                 
                    required
                  />
                </Form.Group>
                </Row>                
                
            </form>
          </div>
        </div>
      </div>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={actualizarEstado}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
        </div>      
      );
}
  
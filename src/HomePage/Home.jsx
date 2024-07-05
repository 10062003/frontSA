import Card from "../components/ui/Card";

const HomePage = () => {
  return (
    <div className="flex flex-wrap gap-5 m-4 justify-center">
      <Card
        title="Módulo Lombricultivo"
        description="Aprende a utilizar lombrices para convertir residuos orgánicos en abono rico en nutrientes."
        imgSrc="/public/imgs/lombricultivo.jpg"
      />
      <Card
        title="Módulo Biodigestor"
        description="Descubre cómo generar biogás a partir de residuos orgánicos utilizando un biodigestor."
        imgSrc="/public/imgs/biodigestor.jpg"
      />
      <Card
        title="Módulo Cultivos"
        description="Explora técnicas avanzadas de cultivo que maximizan la producción agrícola en espacios reducidos."
        imgSrc="/public/imgs/cultivos.jpg"
      />
      <Card
        title="Módulo Estación meteorológica"
        description="Conoce cómo una estación meteorológica automática puede ayudarte a monitorear el clima local."
        imgSrc="/public/imgs/estacion.jpg"
      />
      <Card
        title="Módulo Hidroponía"
        description="Aprende los principios de la hidroponía para cultivar plantas sin tierra, utilizando soluciones nutritivas."
        imgSrc="/public/imgs/hidroponia.jpg"
      />
      <Card
        title="Módulo Tanques"
        description="Descubre cómo implementar sistemas de tanques para almacenamiento de agua y soluciones nutritivas."
        imgSrc="/public/imgs/tanques.jpg"
      />
    </div>
  );
};
export default HomePage;

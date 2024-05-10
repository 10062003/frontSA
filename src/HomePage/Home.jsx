import Card from "../components/ui/Card";

const HomePage = () => {
  return (
      <div className="flex flex-wrap gap-5 m-4">
        <Card
          title="Módulo Lombricultivo"
          description="Aquí va una breve descripción sobre el módulo."
          imgSrc="/public/imgs/lombricultivo.jpg"
        />
        <Card
          title="Módulo Biodigestor"
          description="Aquí va una breve descripción sobre el módulo."
          imgSrc="/public/imgs/biodigestor.jpg"
        />
        <Card
          title="Módulo Cultivos"
          description="Aquí va una breve descripción sobre el módulo."
          imgSrc="/public/imgs/cultivos.jpg"
        />
        <Card
          title="Módulo Estación meteorologica"
          description="Aquí va una breve descripción sobre el módulo."
          imgSrc="/public/imgs/estacion.jpg"
        />
        <Card
          title="Módulo Hidroponía"
          description="Aquí va una breve descripción sobre el módulo."
          imgSrc="/public/imgs/hidroponia.jpg"
        />
        <Card
          title="Módulo Tanques"
          description="Aquí va una breve descripción sobre el módulo."
          imgSrc="/public/imgs/tanques.jpg"
        />
      </div>
  );
};
export default HomePage;

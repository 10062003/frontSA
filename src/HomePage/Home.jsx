import Card from "../components/ui/Card";

const HomePage = () => {
  return (
    <div className="flex gap-5">
      <Card
        title="Módulo Lombricultivo"
        description="Aquí va una breve descripción sobre el módulo."
        imgSrc="/public/imgs/lombricultivo.jpg"
      />
      <Card
        title="Módulo Agricultura"
        description="Aquí va una breve descripción sobre el módulo de agricultura."
        imgSrc="/public/imgs/Lombricultivo.jpg"
      />
    </div>
  );
};
export default HomePage;

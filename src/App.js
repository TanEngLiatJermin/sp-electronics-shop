const App = () => {
  const [entities, setEntities] = useState([
    { id: "a1b2c3d4e5", category: "Laptops", name: "Dell Inspiron 15" },
    { id: "f6g7h8i9j0", category: "Smartphones", name: "iPhone 14" },
  ]);

  // Handler to add a new entity
  const handleAddEntity = (newEntity) => {
    setEntities((prevEntities) => [...prevEntities, newEntity]);
  };

  // Handler to delete one or multiple entities by IDs
  const handleDeleteEntity = (ids) => {
    setEntities((prevEntities) => prevEntities.filter((entity) => !ids.includes(entity.id)));
  };

  return (
    <div>
      <h1>SP Electronics Shop</h1>
      <AddEntityForm onAddEntity={handleAddEntity} />
      <EntitiesList entities={entities} onDeleteEntity={handleDeleteEntity} />
    </div>
  );
};

export default App;

const InfoSection = () => {
    return (
      <div className="  text-white py-16">
        <div className="container mx-auto flex items-center justify-between">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Genius School est un site de support pédagogique</h2>
            <p className="mb-4">Nous proposons une sélection de contenus pédagogiques conformes aux programmes officiels.</p>
            <ul className="list-disc list-inside">
              <li>Des cours complets</li>
              <li>Des exercices corrigés</li>
              <li>Des examens</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full z-0"></div>
            <img src="/khetna2.png" alt="Student" className="w-64 h-80 object-cover rounded-lg z-10 relative" />
          </div>
        </div>
      </div>
    );
  };
  
  export default InfoSection;
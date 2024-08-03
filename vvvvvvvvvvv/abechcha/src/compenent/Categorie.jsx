
const Allcolors = [
  {first_c : '#161052', second_c : '#8077D9'},
  {first_c : '#391B5A', second_c : '#B178EF'},
  {first_c : '#2A4C53', second_c : '#82C8D5'},
  {first_c : '#63494C', second_c : '#DDADB2'}
]
const CategoryCard = ({ind, title, icon}) => (
  <div   
  style={{
    background: `linear-gradient(to top, ${Allcolors[ind].first_c}, ${Allcolors[ind].second_c})`,
    
  }} 
  className={`rounded-lg p-6 text-center text-white`}>
    <img src={icon} alt={title} className="w-auto h-23 mx-auto mb-10" />
    <h3 className="font-semibold">{title}</h3>
    <button className="mt-4 bg-white text-indigo-700 px-4 py-2 rounded-full">Show</button>
  </div>
);

const CategoriesSection = () => {
  const categories = [
    { title: 'Primary', icon: '/cat3.png'},
    { title: 'College', icon: '/cat2.png'},
    { title: 'High School', icon: '/cat1.png'},
    { title: 'Concours', icon: '/cat4.png'},
  ];


  return (
    <div className="py-16 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white">Explore Our Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} ind={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
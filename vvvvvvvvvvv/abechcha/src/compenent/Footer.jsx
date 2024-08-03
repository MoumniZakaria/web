const Footer = () => {
  return (
    <footer className="  text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="hover:text-yellow-400">Contact Us</a>
          </div>
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <form className="flex flex-col space-y-2">
              <input 
                type="text" 
                placeholder="Name" 
                className="p-2 rounded-lg text-gray-900" 
              />
              <textarea 
                placeholder="Feedback" 
                className="p-2 rounded-lg text-gray-900" 
                rows="3"
              ></textarea>
              <button 
                type="submit" 
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
          <div className="text-center md:text-right">
            <p>© 2024 GeniusSchool. TOUS DROITS RÉSERVÉS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
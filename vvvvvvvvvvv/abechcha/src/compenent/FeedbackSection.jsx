import { useState } from 'react';

const FeedbackCard = ({ name, content, rating }) => (
  <div className="bg-indigo-700 rounded-lg p-6 text-white">
    <h3 className="font-semibold mb-2">{name}</h3>
    <p className="mb-4">{content}</p>
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </div>
);

const FeedbackSection = () => {
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const feedbacks = [
    { name: 'Younes', content: 'The website has a user-friendly interface and a wide range of courses.', rating: 5 },
    { name: 'Khadija', content: 'The courses are well-structured and easy to follow. Great learning experience!', rating: 4 },
    { name: 'Khadija', content: 'The website has a clear interface and offers a variety of interesting courses.', rating: 5 },
    { name: 'aberaouf', content: 'hahahaha.', rating: 1 },
    { name: 'abdelmoughit', content: 'The website has a clear interface and offers a variety of interesting courses.', rating: 0 },
  ];

  const displayFeedbacks = () => {
    const smallScreen = (
      <div className="relative w-auto ">
        <FeedbackCard {...feedbacks[currentFeedback]} />
        {/* <button onClick={() => setCurrentFeedback((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1))} > */}
          {/* &lt; */}
        {/* </button> */}
        {/* <button onClick={() => setCurrentFeedback((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1))} className=""> */}
          {/* &gt; */}
        {/* </button> */}
      </div>
    );

    const largeScreen = (
      <div className="grid grid-cols-3 gap-6">
        {feedbacks.slice(currentFeedback, currentFeedback + 3).map((feedback, index) => (
          <FeedbackCard key={index} {...feedback} />
        ))}
      </div>
    );

    return (
      <>
        <div className="md:hidden">{smallScreen}</div>
        <div className="hidden md:block">{largeScreen}</div>
      </>
    );
  };

  return (
    <div className="text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">GeniusSchool's Feedbacks</h2>
        {displayFeedbacks()}
        <div className="flex justify-center mt-6 md:mt-8">
          <button onClick={() => setCurrentFeedback((prev) => (prev === 0 ? feedbacks.length - 3 : prev - 1))} className="bg-white text-gray-900 p-2 rounded-full mx-2">
            &lt;
          </button>
          <button onClick={() => setCurrentFeedback((prev) => (prev === feedbacks.length - 3 ? 0 : prev + 1))} className="bg-white text-gray-900 p-2 rounded-full mx-2">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
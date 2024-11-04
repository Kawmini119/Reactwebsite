import { useState } from "react";
import newsletterImage from "../assets/my.jpg"; // Replace with the path to your image

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="w-full max-w-lg p-6 md:p-10 text-center relative bg-white shadow-lg rounded-lg">
        <button className="absolute top-4 right-4 text-gray-500 text-xl hover:text-black focus:outline-none">
          &times;
        </button>

        <img
          src={newsletterImage}
          alt="Become a better frontend developer"
          className="w-full mb-6 rounded-lg"
        />

        <h2 className="text-xl md:text-3xl font-bold text-gray-800">
          Frontend Practice Newsletter
        </h2>

        <p className="text-gray-600 mt-4 text-sm md:text-base px-4 md:px-0">
          Get the latest Frontend Practice updates and recommendations for
          websites, articles, and videos worth checking out. Stay informed and
          inspired with us.
        </p>

        <p className="text-gray-800 font-semibold mt-4 text-sm md:text-base">
          Over 1,000 subscribers
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-2 w-full px-4 md:px-0">
          <input
            type="email"
            placeholder="Type your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 px-4 py-2 w-full md:w-3/4 rounded-md md:rounded-l-lg focus:outline-none"
          />
          <button
            onClick={handleSubscribe}
            className="bg-black text-white px-6 py-2 w-full md:w-auto rounded-md md:rounded-r-lg font-semibold hover:bg-gray-800 focus:outline-none"
          >
            Subscribe
          </button>
        </div>

        <div className="mt-4">
          <a href="/" className="text-gray-600 hover:underline text-sm md:text-base">
            No thanks &rarr;
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-8 px-4 md:px-0">
          By registering you agree to Substack’s{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>
          , our{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          , and our{" "}
          <a href="#" className="underline">
            Information Collection Notice
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NewsletterSubscription;

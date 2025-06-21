import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-peach-100 to-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 md:px-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Feel Stronger. Move Better. Start Now.</h1>
        <p className="text-lg md:text-2xl mb-8">Free 7-Day Challenge · No Equipment Needed · 10 Minutes a Day</p>
        <div className="flex justify-center gap-4">
          <a href="#challenge" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold">Start the Free Challenge</a>
          <a href="https://youtube.com/@startnowfitness" target="_blank" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-100 px-6 py-3 rounded-2xl text-lg font-semibold">Watch on YouTube</a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-orange-50 py-16 px-6 md:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Start Now Fitness</h2>
        <p className="text-lg max-w-2xl mx-auto">Hi, I’m Pat — creator of Start Now Fitness. I believe fitness should be simple, accessible, and kind to your body. That’s why I created this space for beginners and beyond.</p>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Strong with My 7-Day Beginner Workout Plan</h2>
        <p className="text-lg mb-6">✔ No equipment · ✔ Low impact · ✔ Daily PDF Plan</p>
        <form className="flex flex-col items-center gap-4 max-w-xl mx-auto">
          <input type="text" placeholder="First name" className="w-full px-4 py-3 rounded-xl border border-gray-300" />
          <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border border-gray-300" />
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-semibold">Send Me the Free Plan</button>
        </form>
      </section>

      {/* YouTube Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Moving with Pat on YouTube</h2>
        <p className="text-lg mb-8">Find beginner workouts, quick HIIT sessions, and 7-day challenges.</p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <iframe className="w-full md:w-96 h-56 rounded-xl" src="https://www.youtube.com/embed/videoseries?list=PLYOURPLAYLISTID" title="YouTube Playlist" allowFullScreen></iframe>
          <iframe className="w-full md:w-96 h-56 rounded-xl" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Latest Workout" allowFullScreen></iframe>
        </div>
        <a href="https://youtube.com/@startnowfitness" target="_blank" className="inline-block mt-8 text-orange-500 underline text-lg">Subscribe on YouTube</a>
      </section>

      {/* Footer */}
      <footer className="bg-orange-100 py-10 px-6 md:px-24 text-center text-sm text-gray-700">
        <p>Movement is for everyone. Start now.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="#challenge" className="hover:underline">Challenge</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <p className="mt-4">© 2025 Start Now Fitness · Pat Ouedraogo</p>
      </footer>
    </main>
  );
}


export default function Achievements() {
  return (
    <section className="py-10 md:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Achievements</h2>

      <div className="relative border-l-4 border-gray-300">
        <div className="mb-10 ml-6">
          <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5"></div>
          <h3 className="text-lg font-semibold">
            Juara 2 Hackathon Web Development
          </h3>
          <p className="text-gray-600 text-sm">XYZ Tech Community, 2024</p>
        </div>

        <div className="mb-10 ml-6">
          <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-2.5"></div>
          <h3 className="text-lg font-semibold">
            Dicoding React Developer Certification
          </h3>
          <p className="text-gray-600 text-sm">Dicoding Indonesia, 2023</p>
        </div>

        <div className="mb-10 ml-6">
          <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-2.5"></div>
          <h3 className="text-lg font-semibold">Open Source Contributor</h3>
          <p className="text-gray-600 text-sm">GitHub Community, 2022</p>
        </div>
        <div>
          
        </div>
      </div>
    </section>
  );
}

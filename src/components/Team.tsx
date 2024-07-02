export default function Team() {
    return (
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg mb-8">The talented individuals behind Skill Bazaar.</p>
          <div className="flex justify-around">
            <div className="w-1/4 p-4 bg-gray-200 rounded">Team Member 1</div>
            <div className="w-1/4 p-4 bg-gray-200 rounded">Team Member 2</div>
            <div className="w-1/4 p-4 bg-gray-200 rounded">Team Member 3</div>
          </div>
        </div>
      </section>
    );
  }
  
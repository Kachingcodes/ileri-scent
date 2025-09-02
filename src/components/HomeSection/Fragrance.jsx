import React from "react";

export default function FragranceNotesExplorer() {
  const notes = [
    {
      type: "Top Notes",
      description: "The first impression of the fragrance, light and refreshing.",
      examples: ["Citrus", "Bergamot", "Lavender"],
      image: "/img/bottles/cherry.png",
    },
    {
      type: "Heart Notes",
      description: "The heart of the perfume, adding depth and character.",
      examples: ["Rose", "Jasmine", "Spice"],
      image: "/notes/heart.jpg",
    },
    {
      type: "Base Notes",
      description: "The lasting foundation, rich and memorable.",
      examples: ["Vanilla", "Amber", "Sandalwood"],
      image: "/notes/base.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-serif text-gray-900">
          Fragrance Notes Explorer
        </h2>
        <p className="text-gray-600 mt-4">
          Dive into the artistry of perfumery. Discover the layers that make each
          scent unforgettable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {notes.map((note, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={note.image}
              alt={note.type}
              className="w-full h-46 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                {note.type}
              </h3>
              <p className="text-gray-600 mt-2">{note.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-800">
                  Examples:
                </h4>
                <ul className="flex gap-2 flex-wrap mt-2">
                  {note.examples.map((example, i) => (
                    <li
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const About = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-4">Marcio Javier Mass García</h1>
                    <p className="text-lg font-light">
                        Desarrollador Web | Innovador | Apasionado por la Tecnología
                    </p>
                    <a
                        href="#contact"
                        className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-medium shadow-md hover:bg-gray-100 transition"
                    >
                        Contáctame
                    </a>
                </div>
            </section>

            {/* About Me Section */}
            <section className="container mx-auto py-16 px-6">
                <h2 className="text-4xl font-semibold text-center mb-8">Sobre Mí</h2>
                <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed">
                    ¡Hola! Soy Marcio Javier Mass, un desarrollador web con experiencia en la creación de aplicaciones modernas, 
                    intuitivas y funcionales. Me especializo en tecnologías como React, Node.js y Tailwind CSS. Mi objetivo es 
                    transformar ideas en soluciones digitales que impacten positivamente a las personas.
                </p>
            </section>

            {/* Skills Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-semibold text-center mb-8">Habilidades</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind CSS", "Git", "MongoDB"].map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md text-center font-medium text-gray-700 w-32"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-16 px-6">
                <h2 className="text-4xl font-semibold text-center mb-8">Proyectos Destacados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((project) => (
                        <div
                            key={project}
                            className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
                        >
                            <img
                                src={`https://picsum.photos/400/300`}
                                alt={`Proyecto ${project}`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">Proyecto {project}</h3>
                                <p className="text-gray-600">
                                    Este es un proyecto destacado que demuestra mis habilidades en desarrollo web. Incluye tecnologías modernas y un diseño atractivo.
                                </p>
                                <a
                                    href="#"
                                    className="text-blue-600 font-medium hover:underline mt-4 inline-block"
                                >
                                    Ver más
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
};

export default About;
import React, { useState, useEffect } from "react";
import { fronttools, backtools, otherTools, LOGO } from '../assets/assets';


const Technologies = () => {
    const [visibleElements, setVisibleElements] = useState(new Set());

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleElements(prev => new Set([...prev, entry.target.id]));
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section className="py-20 px-5 bg-white" id="technologies">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-4xl text-center mb-5 text-blue-900 relative fade-in ${visibleElements.has('tech-title') ? 'visible' : ''}`} id="tech-title">
                        التقنيات والأدوات
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
                    </h2>
                    <p className={`text-center text-lg text-gray-600 mb-16 fade-in ${visibleElements.has('tech-subtitle') ? 'visible' : ''}`} id="tech-subtitle">
                        نستخدم أحدث التقنيات العالمية لضمان جودة المنتج
                    </p>

                    <div className="space-y-12">
                        <div className={`fade-in ${visibleElements.has('frontend-tech') ? 'visible' : ''}`} id="frontend-tech">
                            <h3 className="text-2xl text-blue-900 mb-8 text-center relative">
                                Frontend
                                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                                {fronttools.map((tech, index) => (
                                    <div key={index} className="bg-white p-5 rounded-2xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-yellow-400 border-2 border-transparent">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`fade-in ${visibleElements.has('backend-tech') ? 'visible' : ''}`} id="backend-tech">
                            <h3 className="text-2xl text-blue-900 mb-8 text-center relative">
                                Backend
                                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                                {backtools.map((tech, index) => (
                                    <div key={index} className="bg-white p-5 rounded-2xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-yellow-400 border-2 border-transparent">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`fade-in ${visibleElements.has('db-tech') ? 'visible' : ''}`} id="db-tech">
                            <h3 className="text-2xl text-blue-900 mb-8 text-center relative">
                                Other Tools
                                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                                {otherTools.map((tech, index) => (
                                    <div key={index} className="bg-white p-5 rounded-2xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-yellow-400 border-2 border-transparent">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Technologies;
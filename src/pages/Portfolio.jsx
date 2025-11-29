import React, { useState, useEffect } from "react";


const Portfolio = () => {
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
            <section className="py-20 px-5 bg-slate-50" id="portfolio">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-4xl text-center mb-5 text-blue-900 relative fade-in ${visibleElements.has('portfolio-title') ? 'visible' : ''}`} id="portfolio-title">
                        أعمالنا
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
                    </h2>
                    <p className={`text-center text-lg text-gray-600 mb-16 fade-in ${visibleElements.has('portfolio-subtitle') ? 'visible' : ''}`} id="portfolio-subtitle">
                        مشاريع نفخر بإنجازها
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className={`bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2 fade-in ${visibleElements.has('portfolio1') ? 'visible' : ''}`} id="portfolio1">
                            <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-5xl text-white">
                                💼
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-purple-900">مواقع لملفك الشخصي</h3>
                                <p className="text-gray-600 mb-4">عرض أعمالك ومهاراتك بطريقة احترافية وجذابة للعملاء</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-200 text-blue-900 px-3 py-1 rounded-full text-xs font-medium">HTML5</span>
                                    <span className="bg-gray-200 text-blue-900 px-3 py-1 rounded-full text-xs font-medium">CSS3</span>
                                    <span className="bg-gray-200 text-blue-900 px-3 py-1 rounded-full text-xs font-medium">JavaScript</span>
                                </div>
                            </div>
                        </div>

                        <div className={`bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2 fade-in ${visibleElements.has('portfolio2') ? 'visible' : ''}`} id="portfolio2">
                            <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-5xl text-white">
                                🛒
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-blue-900">متجر إلكتروني متكامل</h3>
                                <p className="text-gray-600 mb-4">منصة تجارة إلكترونية شاملة مع نظام إدارة مخزون</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-200 text-blue-900 px-3 py-1 rounded-full text-xs font-medium">Vue.js</span>
                                    <span className="bg-gray-200 text-blue-900 px-3 py-1 rounded-full text-xs font-medium">Laravel</span>
                                    <span className="bg-gray-200 text-blue-900 px-3 py-1 rounded-full text-xs font-medium">MySQL</span>
                                </div>
                            </div>
                        </div>

                        <div className={`bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2 fade-in ${visibleElements.has('portfolio3') ? 'visible' : ''}`} id="portfolio3">
                            <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-5xl text-white">
                                🏢
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-blue-900">مواقع تعريفية للشركات</h3>
                                <p className="text-gray-600 mb-4">تصميم وتطوير مواقع احترافية تعكس هوية شركتك وتجذب العملاء</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-200 text-blue-900 px-3 py-1 rounded-full text-xs font-medium">React</span>
                                    <span className="bg-gray-200 text-blue-900 px-3 py-1 rounded-full text-xs font-medium">Node.js</span>
                                    <span className="bg-gray-200 text-blue-900 px-3 py-1 rounded-full text-xs font-medium">Tailwind</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;
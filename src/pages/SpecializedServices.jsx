import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function SpecializedServices() {

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
            <section className="py-20 px-5 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-4xl text-center mb-5 text-blue-900 relative fade-in ${visibleElements.has('specialized-title') ? 'visible' : ''}`} id="specialized-title">
                        خدماتنا المتخصصة
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-full"></span>
                    </h2>
                    <p className={`text-center text-lg text-gray-600 mb-16 fade-in ${visibleElements.has('specialized-subtitle') ? 'visible' : ''}`} id="specialized-subtitle">
                        حلول تقنية متقدمة للقطاعات المختلفة
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className={`service-shimmer bg-white rounded-3xl p-10 text-center shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl relative overflow-hidden fade-in ${visibleElements.has('specialized1') ? 'visible' : ''}`} id="specialized1">
                            <div className="text-5xl mb-5">🏥</div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-5">القطاع الطبي</h3>
                            <ul className="list-none text-right mb-8 space-y-2">
                                <li className="text-gray-600 text-sm relative pr-5">
                                    <span className="absolute right-0 text-yellow-400 font-bold">✓</span>
                                    أنظمة إدارة المستشفيات (HMS)
                                </li>
                                <li className="text-gray-600 text-sm relative pr-5">
                                    <span className="absolute right-0 text-yellow-400 font-bold">✓</span>
                                    سجلات المرضى الإلكترونية
                                </li>
                                <li className="text-gray-600 text-sm relative pr-5">
                                    <span className="absolute right-0 text-yellow-400 font-bold">✓</span>
                                    أنظمة حجز المواعيد
                                </li>
                                <li className="text-gray-600 text-sm relative pr-5">
                                    <span className="absolute right-0 text-yellow-400 font-bold">✓</span>
                                    صيدليات إلكترونية
                                </li>
                            </ul>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="w-full px-6 py-3 bg-transparent text-blue-900 border-2 border-yellow-400 font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                استفسر الآن
                            </button>
                        </div>

                        <div className={`service-shimmer bg-white rounded-3xl p-10 text-center shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl relative overflow-hidden fade-in ${visibleElements.has('specialized2') ? 'visible' : ''}`} id="specialized2">
                            <div className="text-5xl mb-5">🎓</div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-5">القطاع التعليمي</h3>
                            <ul className="list-none text-right mb-8 space-y-2">
                                <li className="text-gray-600 text-sm relative pr-5">
                                    <span className="absolute right-0 text-yellow-400 font-bold">✓</span>
                                    أنظمة إدارة التعلم (LMS)
                                </li>
                                <li className="text-gray-600 text-sm relative pr-5">
                                    <span className="absolute right-0 text-yellow-400 font-bold">✓</span>
                                    منصات التعليم الإلكتروني
                                </li>
                                <li className="text-gray-600 text-sm relative pr-5">
                                    <span className="absolute right-0 text-yellow-400 font-bold">✓</span>
                                    أنظمة إدارة المدارس
                                </li>
                                <li className="text-gray-600 text-sm relative pr-5">
                                    <span className="absolute right-0 text-yellow-400 font-bold">✓</span>
                                    بوابات الطلاب الإلكترونية
                                </li>
                            </ul>
                            <button
                                
                                className="w-full px-6 py-3 bg-transparent text-blue-900 border-2 border-yellow-400 font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <Link to="/contact">
                                استفسر الآن
                                </Link>
                            </button>
                        </div>

                        <div className={`service-shimmer bg-white rounded-3xl p-10 text-center shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-3xl relative overflow-hidden fade-in ${visibleElements.has('specialized3') ? 'visible' : ''}`} id="specialized3">
                            <div className="text-5xl mb-5">🏪</div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-5">القطاع التجاري</h3>
                            <ul className="list-none text-right mb-8 space-y-2">
                                <li className="text-gray-600 text-sm relative pr-5">
                                    <span className="absolute right-0 text-yellow-400 font-bold">✓</span>
                                    أنظمة نقاط البيع (POS)
                                </li>
                                <li className="text-gray-600 text-sm relative pr-5">
                                    <span className="absolute right-0 text-yellow-400 font-bold">✓</span>
                                    إدارة المخازن والمخزون
                                </li>
                                <li className="text-gray-600 text-sm relative pr-5">
                                    <span className="absolute right-0 text-yellow-400 font-bold">✓</span>
                                    منصات B2B و B2C
                                </li>
                            </ul>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="w-full px-6 py-3 bg-transparent text-blue-900 border-2 border-yellow-400 font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                استفسر الآن
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SpecializedServices;
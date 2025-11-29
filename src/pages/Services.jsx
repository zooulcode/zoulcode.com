import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";


const Services = () => {
    const [visibleElements, setVisibleElements] = useState(new Set());


    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);



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
            <section className="py-20 px-5 bg-slate-50" >
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-4xl text-center mb-5 text-blue-900 relative fade-in ${visibleElements.has('services-title') ? 'visible' : ''}`} id="services-title">
                        خدماتنا
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-full"></span>
                    </h2>
                    <p className={`text-center text-lg text-gray-600 mb-16 fade-in ${visibleElements.has('services-subtitle') ? 'visible' : ''}`} id="services-subtitle">
                        نحول أفكارك إلى حلول رقمية متطورة
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className={`service-shimmer bg-white rounded-2xl p-10 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden fade-in ${visibleElements.has('web') ? 'visible' : ''}`} id="web">
                            <div className="text-5xl mb-5 w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white mx-auto">
                                🌐
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-900">تطوير مواقع الويب</h3>
                            <p className="text-gray-600 leading-relaxed">تصميم وبرمجة مواقع احترافية متجاوبة وسريعة.</p>
                        </div>

                        <div className={`service-shimmer bg-white rounded-2xl p-10 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden fade-in ${visibleElements.has('ecommerce') ? 'visible' : ''}`} id="ecommerce">
                            <div className="text-5xl mb-5 w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white mx-auto">
                                🛒
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-900">متاجر إلكترونية</h3>
                            <p className="text-gray-600 leading-relaxed">بناء متاجر أونلاين متكاملة مع أنظمة دفع آمنة.</p>
                        </div>

                        <div className={`service-shimmer bg-white rounded-2xl p-10 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden fade-in ${visibleElements.has('web-apps') ? 'visible' : ''}`} id="web-apps">
                            <div className="text-5xl mb-5 w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white mx-auto">
                                📱
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-900">تطبيقات ويب</h3>
                            <p className="text-gray-600 leading-relaxed">تطوير تطبيقات ويب تفاعلية لإدارة الأعمال.</p>
                        </div>

                        <div className={`service-shimmer bg-white rounded-2xl p-10 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden fade-in ${visibleElements.has('crm') ? 'visible' : ''}`} id="crm">
                            <div className="text-5xl mb-5 w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white mx-auto">
                                ⚙️
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-900">أنظمة إدارة</h3>
                            <p className="text-gray-600 leading-relaxed">تطوير نظم تعليمية، إدارية وCRM مخصصة.</p>
                        </div>

                        <div className={`service-shimmer bg-white rounded-2xl p-10 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden fade-in ${visibleElements.has('support') ? 'visible' : ''}`} id="support">
                            <div className="text-5xl mb-5 w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white mx-auto">
                                🔧
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-900">الصيانة والدعم</h3>
                            <p className="text-gray-600 leading-relaxed">صيانة مستمرة وتطوير دوري للمواقع.</p>
                        </div>

                        <div className={`service-shimmer bg-white rounded-2xl p-10 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden fade-in ${visibleElements.has('security') ? 'visible' : ''}`} id="security">
                            <div className="text-5xl mb-5 w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white mx-auto">
                                📊
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-blue-900">أمن المواقع</h3>
                            <p className="text-gray-600 leading-relaxed">تأمين المواقع ضد الهجمات والاختراقات.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;
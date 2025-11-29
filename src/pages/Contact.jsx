import React, { useState, useEffect } from "react";
import InfoForm from "../components/layout/InfoForm";

const Contact = () => {

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
            <section className="py-20 px-5 bg-gradient-to-br from-blue-900 to-blue-700 text-white" id="contact">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-4xl text-center mb-5 text-white relative fade-in ${visibleElements.has('contact-title') ? 'visible' : ''}`} id="contact-title">
                        تواصل معنا
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-full"></span>
                    </h2>
                    <p className={`text-center text-lg text-blue-200 mb-16 fade-in ${visibleElements.has('contact-subtitle') ? 'visible' : ''}`} id="contact-subtitle">
                        ابدأ رحلتك الرقمية اليوم
                    </p>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div className={`fade-in ${visibleElements.has('contact-info') ? 'visible' : ''}`} id="contact-info">
                            <h3 className="text-2xl font-semibold mb-8 text-yellow-400">معلومات التواصل</h3>

                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center text-yellow-400 text-lg">
                                    📱
                                </div>
                                <div>
                                    <strong>الهاتف</strong><br />
                                    <a dir="ltr" href="tel:+201143315966" className="text-blue-200 hover:text-yellow-400 transition-colors">
                                        +20 114 331 5966
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center text-yellow-400 text-lg">
                                    ✉️
                                </div>
                                <div>
                                    <strong>البريد الإلكتروني</strong><br />
                                    <a href="mailto:zoul.code@gmail.com" className="text-blue-200 hover:text-yellow-400 transition-colors">
                                        zoul.code@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center text-yellow-400 text-lg">
                  🌐
                </div>
                <div>
                  <strong>الموقع الإلكتروني</strong><br />
                  <span className="text-blue-200">www.zoulcode.com</span>
                </div>
              </div> */}

                            {/* <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center text-yellow-400 text-lg">
                  📍
                </div>
                <div>
                  <strong>العنوان</strong><br />
                  <span className="text-blue-200">الخرطوم، السودان</span>
                </div>
              </div> */}

                            <a
                                className="inline-block m-2 px-8 py-4 m bg-yellow-400 text-blue-900 font-bold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-400/40"
                                href="https://www.facebook.com/ZoulCode"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                صفحتنا على الفيسبوك
                            </a>
                            <a
                                className="inline-block m-2 px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-400/40"
                                href="https://www.instagram.com/zoulcode/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                صفحتنا على إنستغرام
                            </a>
                            <a
                                className="inline-block m-2 px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-400/40"
                                href="https://www.tiktok.com/@zoulcode"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                صفحتنا على تيك توك
                            </a>
                            <a
                                className="inline-block m-2 px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-400/40"
                                href="https://wa.me/249960142542"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                تواصل عبر واتساب
                            </a>
                        </div>

                        <InfoForm />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
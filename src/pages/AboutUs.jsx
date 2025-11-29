import React, { useEffect, useState} from "react";


function AboutUs() {

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
            <section className="py-20 px-5" id="about">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-4xl text-center mb-5 text-blue-900 relative fade-in ${visibleElements.has('about-title') ? 'visible' : ''}`} id="about-title">
                        من نحن
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-full"></span>
                    </h2>
                    <p className={`text-center text-lg text-gray-600 mb-16 fade-in ${visibleElements.has('about-subtitle') ? 'visible' : ''}`} id="about-subtitle">
                        شركة ناشئة في مجال تطوير الويب والحلول الرقمية
                    </p>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className={`space-y-6 fade-in ${visibleElements.has('about-text') ? 'visible' : ''}`} id="about-text">
                            <p className="text-gray-600 leading-relaxed">
                                زول كود هي شركة سودانية ناشئة في تطوير المواقع الالكترونية وتطبيقات الويب. نؤمن بأن كل فكرة لها القدرة على
                                التحول إلى حل تقني مبتكر يساعد الشركات على النمو والازدهار.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                نسعى لتقديم حلول مبتكرة في تصميم وتطوير المواقع. فريقنا صغير لكنه شغوف وملتزم بتقديم أفضل تجربة لعملائنا.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                نحن لسنا مجرد شركة برمجة ناشئة، بل شريككم في النجاح الرقمي.
                            </p>
                        </div>

                        <div className={`grid grid-cols-2 gap-5 fade-in ${visibleElements.has('stats') ? 'visible' : ''}`} id="stats">
                            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-2xl text-center">
                                <span className="text-4xl font-bold text-yellow-400 block">3+</span>
                                <span className="text-sm mt-2 block">مشروع منجز</span>
                            </div>
                            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-2xl text-center">
                                <span className="text-4xl font-bold text-yellow-400 block">98%</span>
                                <span className="text-sm mt-2 block">رضا العملاء</span>
                            </div>
                            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-2xl text-center">
                                <span className="text-4xl font-bold text-yellow-400 block">24/7</span>
                                <span className="text-sm mt-2 block">دعم فني</span>
                            </div>
                            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-2xl text-center">
                                <span className="text-4xl font-bold text-yellow-400 block">100%</span>
                                <span className="text-sm mt-2 block">حلول مخصصة</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;
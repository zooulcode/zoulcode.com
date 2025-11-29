import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <footer className="bg-blue-900 text-white py-16 px-5">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
                        <div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-5">زول كود</h3>
                            <p className="text-blue-200 leading-relaxed">
                                شركة سودانية ناشئة تعمل في تطوير المواقع الإلكترونية والحلول الرقمية. نحول أفكاركم إلى كود احترافي يحقق أهدافكم.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-5">خدماتنا</h3>
                            <div className="space-y-3">
                                <button
                                    className="block text-blue-200 hover:text-yellow-400 transition-colors"
                                >
                                <Link to ="/services#web">
                                    تطوير المواقع
                                </Link>
                                </button>
                                <button
                                    className="block text-blue-200 hover:text-yellow-400 transition-colors"
                                >
                                <Link to ="/services#ecommerce">
                                    التجارة الإلكترونية
                                </Link>
                                </button>
                                <button
                                    className="block text-blue-200 hover:text-yellow-400 transition-colors"
                                >
                                <Link to ="/services#crm">
                                    تطبيقات الويب
                                </Link>
                                </button>
                                <button
                                    className="block text-blue-200 hover:text-yellow-400 transition-colors"
                                >
                                <Link to ="/services#security">
                                    الصيانة والدعم
                                </Link>
                                </button>
                                <button
                                    className="block text-blue-200 hover:text-yellow-400 transition-colors"
                                >
                                <Link to ="/services#security">
                                    الأمان
                                </Link>
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-5">روابط سريعة</h3>
                            <div className="space-y-3">
                                <button
                                    className="block text-blue-200 hover:text-yellow-400 transition-colors"
                                >
                                    <Link to ="/">
                                    الرئيسية
                                    </Link>
                                </button>
                                <button
                                    className="block text-blue-200 hover:text-yellow-400 transition-colors"
                                >
                                    <Link to ="/about">
                                    من نحن
                                    </Link>
                                </button>
                                <button
                                    className="block text-blue-200 hover:text-yellow-400 transition-colors"
                                >
                                    <Link to ="/portfolio">
                                    أعمالنا
                                    </Link>
                                </button>
                                <button
                                    
                                    className="block text-blue-200 hover:text-yellow-400 transition-colors"
                                >
                                    <Link to ="/contact">
                                    تواصل معنا
                                     </Link>
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-5">تواصل معنا</h3>
                            <div className="space-y-3">
                                <a 
                                    href="tel:+201143315966"
                                    className="flex items-center gap-2 text-blue-200 hover:text-yellow-400 transition-colors"
                                >
                                    📱 <span dir="ltr">+249 960 142 542</span>
                                </a>
                                <a 
                                    href="tel:+201143315966"
                                    className="flex items-center gap-2 text-blue-200 hover:text-yellow-400 transition-colors"
                                >
                                    📱 <span dir="ltr">+20 114 331 5966</span>
                                </a>
                                <a
                                    href="mailto:zoulcode.2025@gmail.com"
                                    className="flex items-center gap-2 text-blue-200 hover:text-yellow-400 transition-colors"
                                >
                                    ✉️ zoul.code@gmail.com
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="border-t border-yellow-700 pt-8 text-center">
                        <p className="text-blue-200">
                            &copy; 2025 زول كود - جميع الحقوق محفوظة | من فكرة لي كود إحترافي
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
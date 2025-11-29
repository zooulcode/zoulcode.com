import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const InfoForm = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements((prev) => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const message = `
      البريد الإلكتروني: ${e.target.email.value}\n
      رقم الهاتف: ${e.target.phone.value}\n`

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      project: e.target.project.value,
      message: message,
      to_email: "zooul.code@gmail.com",
    };

    try {
      await emailjs.send(
        "service_zhttivl",
        "template_br44epn",
        formData,
        "NtxhLJVj9qOkagOkl"
      );

      setSubmitStatus("success");
      e.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 4000);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {submitStatus === "success" && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
          ✅ تم إرسال الرسالة بنجاح
        </div>
      )}
      {submitStatus === "error" && (
        <div className="fixed bottom-5 right-5 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
          ❌ حصل خطأ أثناء الإرسال
        </div>
      )}

      <form
        className={`bg-white/10 p-10 rounded-2xl backdrop-blur-lg fade-in ${
          visibleElements.has("contact-form") ? "visible" : ""
        }`}
        id="contact-form"
        onSubmit={handleFormSubmit}
      >
        <h3 className="text-2xl font-semibold mb-8 text-yellow-400">
          احصل على استشارة مجانية
        </h3>

        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-blue-200">
            الاسم
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="اسمكم الكريم"
            required
            className="w-full p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-blue-200">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
            required
            className="w-full p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="phone" className="block mb-2 text-blue-200">
            رقم الهاتف
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+249 xxx xxx xxx"
            className="w-full p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="project" className="block mb-2 text-blue-200">
            نوع المشروع
          </label>
          <select
            id="project"
            name="project"
            className="w-full p-3 border border-white/30 rounded-lg bg-blue-900 text-white focus:outline-none focus:border-yellow-400"
          >
            <option value="">اختر نوع المشروع</option>
            <option value="portfolio">موقع شخصي</option>
            <option value="website">موقع إلكتروني</option>
            <option value="ecommerce">متجر إلكتروني</option>
            <option value="webapp">تطبيق ويب</option>
            <option value="crm">نظام CRM</option>
            <option value="other">أخرى</option>
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="block mb-2 text-blue-200">
            تفاصيل المشروع
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="أخبرنا عن فكرتك ومتطلباتك..."
            required
            className="w-full p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-400/40"
          disabled={isSubmitting}
        >
          {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
        </button>
      </form>
    </>
  );
};

export default InfoForm;

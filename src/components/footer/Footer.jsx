import React from "react";
import { Link } from "react-router-dom";
import footer from "./Footer.module.css";

export default function Footer() {
  return <div className="bg-black py-5  border-top">
    <div className="container">
      <div className="row g-2">
        <div className="col-12 col-md-6 col-lg-3 p-4">
          <div className="item">
            <div className="d-flex align-items-center gap-2 fw-bold text-white ">
              <span className="logo bg-main d-flex align-items-center justify-content-center rounded-2  ">
                ع
              </span>
              <span>عدسة</span>
            </div>
            <p className="text-secondary text-end">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className=" d-flex gap-2 text-secondary">
              <span className="logo border border-secondary-subtle d-flex align-items-center justify-content-center rounded-2">
                <i className="fa-brands fa-x-twitter"></i>
              </span>
              <span className="logo border border-secondary-subtle d-flex align-items-center justify-content-center rounded-2">
                <i className="fa-brands fa-github"></i>
              </span>

              <span className="logo border border-secondary-subtle d-flex align-items-center justify-content-center rounded-2">
                <i className="fa-brands fa-linkedin"></i>
              </span>

              <span className="logo border border-secondary-subtle d-flex align-items-center justify-content-center rounded-2">
                <i className="fa-brands fa-youtube"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 p-4">
          <div className="item">
            <div className="d-flex gap-2 fw-bold text-white ">
              <span className={footer.line}>ـــــــــ</span>
              <span>استكشف</span>
            </div>
            <div className="d-flex flex-column align-items-start gap-2">
              <Link className="text-decoration-none text-secondary" to="/home">
                الرئيسية
              </Link>
              <Link className="text-decoration-none text-secondary" to="/blog">
                المدونة
              </Link>
              <Link
                className="text-decoration-none text-secondary"
                to="/who-we-are"
              >
                من نحن
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 p-4">
          <div className="item">
            <div className="d-flex gap-2 fw-bold text-white ">
              <span className={footer.line}>ـــــــــ</span>
              <span>التصنيفات</span>
            </div>
            <div className="d-flex flex-column align-items-start gap-2">
              <Link className="text-decoration-none text-secondary" to="/home">
                إضاءة
              </Link>
              <Link className="text-decoration-none text-secondary" to="/blog">
                بورتورية
              </Link>
              <Link
                className="text-decoration-none text-secondary"
                to="/who-we-are"
              >
                مناظر طبيعية
              </Link>
              <Link
                className="text-decoration-none text-secondary"
                to="/who-we-are"
              >
                تقنيات
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 p-4">
          <div className="item">
            <div className="d-flex gap-2 fw-bold text-white ">
              <span className={footer.line}>ـــــــــ</span>
              <span>بقى على اطلاع</span>
            </div>
            <p className="text-secondary text-end">اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <div className="mb-3">
              <input
                type="email"
                className="form-control bg-secondary border-secondary-subtle"
                id="exampleFormControlInput1"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>
            <button type="button" className="btn  btn-outline-light bg-main rounded-4 text-white form-control">اشتراك</button>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

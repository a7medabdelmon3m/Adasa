import React, { useState } from "react";
import homeStyle from "./home.module.css";
import kofta from "../../assets/image/kofta.png";
import data from "../../assets/data/posts.json";
import { Link } from "react-router-dom";

const categoryIcons = {
  إضاءة: "fa-solid fa-sun",
  بورتريه: "fa-solid fa-user",
  "مناظر طبيعية": "fa-solid fa-mountain-sun",
  تقنيات: "fa-solid fa-sliders",
  معدات: "fa-solid fa-gear",
};
function sortPosts(){
  let posts = data.posts ; 
  let sortedPosts = posts.sort((a,b) =>{
    return new Date(b.date) -  new Date(a.date)
  } ) 
  return sortedPosts ;

}
// console.log(sortPosts()) ; 

export default function Home() {
  const [article, setArticle] = useState(sortPosts());
  const [cat, setCat] = useState(data.categories);
  // console.log(article.slice(3,6))

  return (
    <div className="bg-black min-vh-100 text-white pb-5">
      <section className={homeStyle.margin20}>
        <div className="container text-center">
          <h1 className="fw-bold display-3">
            اكتشف <span className="text-main">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>
          <p className="text-secondary">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className=" my-5 d-flex justify-content-center flex-column flex-md-row gap-3 ">
            <div className="btn bg-main rounded-5 px-5 py-3 text-white">
              <span className="ms-2 fw-bold">استكشف المقلات</span>
              <span>
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </div>
            <div className="btn border-main  rounded-5 px-5 py-3 text-white">
              <span className="ms-2">
                <i className="fa-solid fa-exclamation-circle"></i>
              </span>
              <span className="ms-2 fw-bold">اعرف المزيد</span>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-6 col-lg-3">
              <div className="item d-flex flex-column fw-bold fs-3 justify-content-center rounded-4 p-3 bg-second border border-secondary-subtle">
                <span>
                  <i className="fa-solid fa-newspaper text-main"></i>
                </span>
                <span className="text-main">+50</span>
                <span className="text-secondary">مقالة</span>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="item d-flex flex-column fw-bold fs-3 justify-content-center rounded-4 p-3 bg-second border border-secondary-subtle">
                <span>
                  <i className="fa-solid fa-users text-main"></i>
                </span>
                <span className="text-main">+10ألف</span>
                <span className="text-secondary">قارئ</span>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="item d-flex flex-column fw-bold fs-3 justify-content-center rounded-4 p-3 bg-second border border-secondary-subtle">
                <span>
                  <i className="fa-solid fa-folder-open text-main"></i>
                </span>
                <span className="text-main">4</span>
                <span className="text-secondary">تصنيفات</span>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="item d-flex flex-column fw-bold fs-3 justify-content-center rounded-4 p-3 bg-second border border-secondary-subtle">
                <span>
                  <i className="fa-solid fa-pen-nib text-main"></i>
                </span>
                <span className="text-main">6</span>
                <span className="text-secondary">كاتب</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container text-center">
          <div className="d-flex  flex-column flex-lg-row gap-2 align-items-start align-lg-items-start  justify-content-between mb-5">
            <div>
              <h2 className="display-5 fw-bold">مقالات مختارة</h2>
              <p className="text-secondary">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
            <div>
              <div className="btn bg-main rounded-3 text-white">
                <span className="ms-2 fw-bold">استكشف المقلات</span>
                <span>
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
              </div>
            </div>
          </div>
          <div className=" d-flex flex-column gap-4">
            {article.map((post) => {
              return (
                post.featured && (
                  <Link
                    className=" card d-flex text-end text-decoration-none flex-column flex-lg-row gap-3 rounded-4 bg-second position-relative overflow-hidden"
                    state={{ myId: post.id }}
                    to={`/blog/${post.slug}`}
                  >
                    <div className=" col-12 col-lg-6  nded-4 overflow-hidden">
                      <img
                        className=" main-img w-100 h-100 "
                        src={post.image}
                        alt={post.title}
                      />
                      {post.featured && (
                        <span className=" type rounded-5 border border-secondary bg-main-subtle py-2 px-4 text-black fw-bold position-absolute  ">
                          مميز
                        </span>
                      )}
                    </div>
                    <div className="col-12 col-lg-6 p-4 d-flex flex-column justify-content-between text-white">
                      <div>
                        <div className="d-flex align-items-center gap-3 text-secondary mb-3">
                          <span className=" rounded-5 border border-secondary bg-main-subtle py-2 px-4 text-black fw-bold ">
                            {post.category}
                          </span>
                          <i className="fa-regular fa-clock text-secondary"></i>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="mb-3 display-6 fw-bold">{post.title}</h3>
                        <p className="mb-4 fw-bold">"{post.excerpt}"</p>
                      </div>

                      <div className="d-flex justify-content-between ">
                        <div className="d-flex gap-3 align-items-center">
                          <div className="profile-img overflow-hidden rounded-circle logo">
                            <img
                              className=" w-100 h-100 object-fit-cover"
                              src={post.author.avatar}
                              alt={post.author.name}
                            />
                          </div>
                          <div>
                            <p className="fw-bold">{post.author.name}</p>
                            <p className="fs-6 text-secondary">{post.date}</p>
                          </div>
                        </div>
                        <div>
                          <div className="btn rounded-3 text-main">
                            <span className="read ms-2 fw-bold">
                              أقراء المقال{" "}
                            </span>
                            <span>
                              <i className="fa-solid fa-arrow-left"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-second">
        <div className="container text-center ">
          <div className="mb-5">
            <h1 className="fw-bold display-3">استكشف حسب الموضوع</h1>
            <p>اعثر على محتوى مصمم حسب اهتماماتك</p>
          </div>
          <div className="row g-4">
            {cat.map((c) => (
              <Link to='/blog' className=" text-decoration-none text-secondary col-6 col-lg-3">
                <div className="rounded-4 position-relative border  border-secondary-subtle p-4">
                  <div className="profile-img mb-4 d-flex align-items-center justify-content-center  border-main bg-main-subtle text-danger rounded-3 ">
                    <i className={categoryIcons[c.name] || 'fa-solid fa-file'}></i>
                  </div>
                  <div className="text-end">
                    <h3>{c.name}</h3>
                    <p className="fs-6 text-secondary">{c.count} مقالة</p>
                  </div>
                  <div className="arrow text-white d-flex align-items-center justify-content-center p-2 rounded-circle bg-secondary position-absolute">
                    <i className="fa-solid fa-angle-left"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="mb-5 text-end d-flex justify-content-between">
            <div>
              <h1 className="fw-bold display-3">أحدث المقالات</h1>
              <p>محتوى جديد طازج من المطبعة</p>
            </div>

            <div className="btn rounded-3 text-main d-flex  align-items-end">
              <span className="read ms-2 fw-bold">أقراء المقال </span>
              <span>
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </div>
          </div>
          <div className="row g-4">
            {article.slice(3,6).map(post =>
              <Link to={`/blog/${post.slug}`} className="col-12 text-decoration-none text-white col-md-6 col-lg-4" state={{ myId: post.id }}>
              <div className="overflow-hidden rounded-3">
                <div className="position-relative overflow-hidden">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={post.image}
                    alt={post.title}
                  />
                  <span className="type px-2 py-1 rounded-4 bg-black text-whaite border-main position-absolute">
                    {post.category}
                  </span>
                </div>
                <div className="bg-second text-end p-4">
                  <div className="text-secondary fs-6 ">
                    <span>
                      <i className="fa-solid fa-clock"></i>
                    </span>
                    <span>{post.readTime}</span>
                    <span className="dot mx-1 bg-secondary rounded-circle d-inline-block"></span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="fs-5 mt-3"> {post.title} </h3>
                  <p className="text-secondary">
                    "{post.excerpt}"
                  </p>
                  <hr className="my-3" />
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap3">
                      <div className="profile-img">
                        <img
                          className="w-100 h-100 rounded-circle object-fit-fill"
                          src={post.author.avatar}
                          alt={post.author.name}
                        />
                      </div>
                      <div>
                        <p>{post.author.name}</p>
                        <p className="text-secondary">{post.author.role}</p>
                      </div>
                    </div>
                    <div className=" arrow2 text-white d-flex align-items-center justify-content-center  rounded-circle bg-secondary ">
                      <i className="fa-solid fa-angle-left"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            )}
          </div>
        </div>
      </section>
      <section>
        <div className="margin20 bg-second rounded-5 ">
          <div className="profile-img ms-auto me-auto mb-3 bg-main d-flex align-items-center justify-content-center rounded-3">
            <i className="fa-regular fa-envelope fa-xl"></i>
          </div>
          <h3>
            اشترك في <span className="text-main">نشرتنا الإخبارية</span>
          </h3>
          <p>
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>
          <form action="" className="row g-4 mt-4">
            <div className="col-12 col-md-9">
              <input
                type="email"
                className="place-holder input-focus text-white form-control py-3 bg-black"
                placeholder="أدخل بريدك الالكروني"
              ></input>
            </div>
            <div className="col-12 col-md-3">
              <button
                type="button"
                className="btn col-4 py-3 bg-main rounded-4 text-white form-control"
              >
                أشترك الان
              </button>
            </div>
          </form>
          <div className="d-flex flex-wrap justify-content-between mt-2 text-secondary">
            <div className="d-flex gap-1">
              <div className="logo rounded-circle overflow-hidden translate-middle-x z-0 border border-black">
                <img
                  className="w-100 h-100 object-fit-fill"
                  src={kofta}
                  alt=""
                />
              </div>
              <div className="logo rounded-circle overflow-hidden z-1 border border-black ">
                <img
                  className="w-100 h-100 object-fit-fill"
                  src={kofta}
                  alt=""
                />
              </div>
              <div className="logo rounded-circle overflow-hidden border border-black ">
                <img
                  className="w-100 h-100 object-fit-fill"
                  src={kofta}
                  alt=""
                />
              </div>
            </div>
            <span>
              انضم <span className="text-white">+10,000</span>مصور
            </span>
            <span>بدون إزعاج</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useEffect } from "react";
// import veiw from "../../assets/image/view.png";
import ReactMarkdown from 'react-markdown'
import elwan from "../../assets/image/elwan.png";
import { Link, NavLink ,useLocation } from "react-router-dom";
import data from "../../assets/data/posts.json";
import BlogDetailsStyle from './blog-details.module.css'


// import data from '../../assets/data/posts.json'

// const sora = data.posts[0].image ;
export default function BlogDetails() {
const location = useLocation();
const blogId = location.state?.myId;
// console.log(blogId)
const article = data.posts.find(p =>
  p.id === blogId
) ; 
// console.log(article);
function getHeadings (){
  if(!article) return []
  return article.content.split('\n')
  .filter(line => line.trim().startsWith('## '))
  .map(line => line.replace(/^##\s+/, '').trim());
}
function formatDate(){
  const date = new Date(article.date) ; 
 const  options = {
    day : 'numeric',
    month :'long'
  };
  return date.toLocaleDateString('ar-EG' ,options)
}
const reltedArticles =  ()=>{
  return data.posts.filter( r =>
    r.category === article.category && r.id !== article.id
  )
}
// console.log(reltedArticles());


const headings =  getHeadings() ; 
const date =  formatDate() ; 
useEffect( ()=>{
  window.scrollTo({
    top:0,
    left:0,
    behavior: 'smooth'
  })
} , [blogId])

  return (
    <>
      <section className="position-relative blog-details-img-parent  overflow-hidden ">
        <img
          className="position-absolute  object-fit-cover blog-details-img top-0 start-0 end-0 z-0 "
          src={article.image}
          alt={article.title}
        />
        <div className="d-flex gap-3 position-absolute z-2 top-right-2020 py-1 px-3 rounded-5 bg-dark-subtle  ">
         
          <span>
            <Link className="text-decoration-none text-secondary" to="/home">
              <i className="fa-solid fa-home "></i>
            </Link>
          </span>
          <span>
            <i className="fa-solid fa-chevron-left"></i>
          </span>
          <span>
            <Link className="text-decoration-none text-secondary" to="/blog">
              المدونة
            </Link>
          </span>
          <span>
            <i className="fa-solid fa-chevron-left "></i>
          </span>
          <span className="text-main fw-bold">{article.category}</span>
        </div>

        <div className="position-absolute mt-5 z-2  p-3  p-md-5  w-75 text-white top-right-4020 ">
          <div className="d-flex gap-3 d flex-wrap align-items-center mb-4 ">
            <div className="btn bg-main rounded-5 px-2 py-2 text-white">
              <span className="ms-2 fw-bold">{article.category}</span>
            </div>
            <div>
              <span>
                <i className="fa-regular fa-calendar"></i>
              </span>
              <span>{article.date}</span>
            </div>
            <div>
              <span>
                <i className="fa-regular fa-clock"></i>
              </span>
              <span>{article.readTime}</span>
            </div>
          </div>

          <h3 className="display-3 font24 text-end fw-bold mb-5 ">
            {article.title}
          </h3>
          <div className="d-flex ">
            <div className="d-flex   gap-3 p-3 rounded-3 border bg-second ">
              <div className="profile-img overflow-hidden rounded-circle border-main">
                <img
                  className="object-fit-cover h-100 w-100"
                  src={article.author.avatar}
                  alt={article.author.name}
                />
              </div>
              <div>
                <p className="fw-bold">{article.author.name} </p>
                <p className="text-secondary fs-6">{article.author.role} </p>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute overlay w-100 h-100 z-1"></div>
      </section>
      <section className="bg-black p-5 position-relative">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-9">
              <div className="text-white text-end ">
                <div className="p-3 mb-4  rounded-3 bg-main-subtle  border-main">
                  "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                  احترافية حول الإضاءة والتكوين."
                </div>
                {/* <p className="mb-4">
                  الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك
                  الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً
                  ودافئاً وساحراً.
                </p> */}
                <div>
                 <ReactMarkdown
                 components={{
                  h2:({node, children, ...props}) =>(
                    <div className="d-flex gap-2 mt-5 mb-2">
                    <span className="bg-main-subtle border-main rounded-3 d-flex align-items-center logo">
                      <i className="fa-solid fa-camera text-main fa-2xl"></i>
                    </span>
                    <h2 {...props}>{children}</h2>
                  </div>
                  ),
                  p:({node, children, ...props}) =>(
                    <p className="fs-5 text-secondary" {...props}>
                        {children}
                  </p>

                  )
                  
                  
                  
                
                 }}
                 >
                 {article.content}
                 
                 </ReactMarkdown> 
                 </div>
                <div className="p-3 bg-second rounded-3 border mt-5">
                  <div className="d-flex gap-2 mb-3">
                    <span className="bg-main-subtle border-main rounded-3 d-flex align-items-center justify-content-center logo">
                      <i className="fa-solid fa-tags text-main fa"></i>
                    </span>
                    <h3 className="fs-4">الوسوم</h3>
                  </div>
                  <div className="d-flex gap-4">
                    {article.tags.map(tag=>
                      <span className="py-1 px-3 text-secondary rounded-5 d-flex align-items-center justify-content-center border bg-second">
                      #{tag}
                    </span>
                    )}
                  </div>
                </div>
                <div className="p-4 d-block d-md-flex  justify-content-between bg-second rounded-3 border mt-5">
                  <div className="d-flex gap-2 mb-3">
                    <span className="bg-main-subtle border-main rounded-3 d-flex align-items-center justify-content-center logo">
                      <i className="fa-solid fa-share-nodes text-main fa"></i>
                    </span>
                    <h3 className="fs-4">شارك المقال</h3>
                  </div>
                  <div className="d-flex gap-2">
                    <span className={`${BlogDetailsStyle.icon} logo rounded-3 bg-second border d-flex align-items-center justify-content-center`}>
                      <i className="fa-brands fa-x-twitter"></i>
                    </span>
                    <span className={`${BlogDetailsStyle.icon} logo rounded-3 bg-second border d-flex align-items-center justify-content-center`}>
                      <i className="fa-brands fa-linkedin"></i>
                    </span>
                    <span className={`${BlogDetailsStyle.icon} logo rounded-3 bg-second border d-flex align-items-center justify-content-center`}>
                      <i className="fa-brands fa-whatsapp"></i>
                    </span>
                    <span className={`${BlogDetailsStyle.icon} logo rounded-3 bg-second border d-flex align-items-center justify-content-center`}>
                      <i className="fa-solid fa-link"></i>
                    </span>
                  </div>
                </div>
                <div className="p-4 d-flex  gap-2 bg-second rounded-3 border mt-5">
                  <div className="dimensions overflow-hidden rounded-3 border border-3 border-secondary-subtle">
                    <img className="w-100 h-100" src={article.author.avatar} alt={article.author.name} />
                  </div>
                  <div>
                    <span className="text-main fw-bold d-inline-block mb-1">
                      كاتب المقال
                    </span>
                    <p className="fw-bolder">{article.author.name}</p>
                    <p className="fs-6 fw-lighter text-secondary mb-1">
                      {article.author.role}                   
                    </p>
                    <span className="fs-5 fw-light text-secondary">
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                      الفوتوغرافي.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div style={{position:'sticky' , top: '100px'}}>
                <div className="mb-4 bg-second rounded-3 border p-4">
                  <div className="d-flex gap-2 mb-3">
                    <span className="bg-main-subtle border-main rounded-3 d-flex align-items-center justify-content-center logo">
                      <i className="fa-solid fa-list text-main fa"></i>
                    </span>
                    <h3 className="fs-4 text-white">الوسوم</h3>
                  </div>
                  <ul className="p-1">
                    
                      {
                        headings.map((head ,idx) =>
                         <li className="d-flex gap-3 align-items-center">
                          <span className="p-2 rounded-4 bg-second text-secondary">
                            {idx+1}
                           </span>
                          <Link className="text-decoration-none text-secondary " >
                            {head}
                         </Link>
                         </li>
                        )
                      }
                      
                      
                         
                        
                    
                  </ul>
                </div>
                <div className=" mb-4 bg-second rounded-3 border p-4 d-flex gap-3">
                    <div className="bg-black rounded-3 w-50 p-3">
                      <div className="mb-3">
                        <i className="fa-regular fa-clock text-main fa-xl"></i>
                      </div>
                      <p className="text-white fw-bold">{article.readTime}</p>
                      <span className="text-secondary">وقت القراءة</span>
                    </div>
                    <div className="bg-black rounded-3 w-50 p-3">
                      <div className="mb-3">
                        <i className="fa-regular fa-calendar text-main fa-xl"></i>
                      </div>
                      <p className="text-white fw-bold">{date}</p>
                      <span className="text-secondary">تاريخ النشر</span>
                    </div>
                </div>
                 <div className=" text-white bg-main-subtle rounded-3 border-main align-items-center p-4 d-flex gap-3 flex-column">
                    <div className="profile-img rounded-4 d-flex bg-dark-subtle align-items-center justify-content-center">
                      <i className="fa-solid fa-envelope text-main "></i>
                    </div>
                    <p className="fw-bold">لا تفوت جديدنا</p>
                    <span className="fs-6">اشترك للحصول على أحدث المقالات</span>

                    <button className=" rounded-4 fw-bold d-flex align-items-center justify-content-center bg-main  px-5 py-2">تصفح المزيد</button>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5  bg-black">
        <div className="container">
        <div className="d-flex justify-content-between mb-5">
          <div className="d-flex gap-2 mb-3">
                    <span className="bg-main-subtle border-main rounded-3 d-flex align-items-center justify-content-center logo">
                      <i className="fa-solid fa-tags text-main fa"></i>
                    </span>
                    <div className="text-end">
                        <h3 className="fs-4 text-white">مقالات قد تعجبك</h3>
                        <p className="text-secondary">استكشف المزيد من المحتوى المميزعرض الكل</p>
                    </div>
                    
          </div>
          <div className="btn rounded-3 text-main">
                      <span className="read ms-2 fw-bold">أقراء المقال </span>
                      <span>
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
          </div>
        </div>
        <div className="row g-4">
         {reltedArticles().slice(0,3).map(r=>
               <Link className="col-12 col-md-6 col-lg-4 text-decoration-none"
               state={{ myId: r.id }}
               to={`/blog/${r.slug}`}
               >
            <div className="overflow-hidden rounded-4 bg-second">
              <div className="overflow-hidden h-75 position-relative">
                <img  className="w-100 h-100 object-fit-cover" src={r.image} alt={r.title} />
                <span className=" top-right-2020 fw-bold text-white position-absolute rounded-5 px-2 py-1 d-flex align-items-center justify-content-center bg-main">{r.category}</span>
              </div>
              <div className="p-3 text-end">
                <h3 className="mb-2 text-white">{r.title}</h3>
                <div className=" text-secondary d-flex justify-content-between align-items-center">
                  <p>{r.author.name}</p>
                  <p>
                    <span>{r.readTime}</span>
                    
                  </p>
                </div>
              </div>
            </div>
          </Link>
         )}
        </div>
        </div>
      </section>
    </>
  );
}

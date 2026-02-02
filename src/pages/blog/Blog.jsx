import React, { useState } from "react";
// import kofta from "../../assets/image/kofta.png";
import { Link } from "react-router-dom";
import data from "../../assets/data/posts.json";

export default function Blog() {
  function formatDate(tarikh){
  const date = new Date(tarikh) ; 
  const  options = {
    day : 'numeric',
    month :'long'
  };
  return date.toLocaleDateString('ar-EG' ,options)
}
const [boxOfItems ,setBoxOfItems] = useState(data.posts)  ;
const [catWord ,setCatWord] = useState('all')  ;
const [searchWord ,setSearchWord] = useState('')  ;
const [layout ,setLayout] = useState('grid')  ;
const [currentBtnPage ,setCurrentBtnPage] = useState(1)  ;
const totalPages = Math.ceil(boxOfItems.length / 6) ; 
let startIdx = (currentBtnPage - 1) * 6 ; 
let endIdx = startIdx + 6 ; 


function filterByCat(cat ,  e ){
  setCurrentBtnPage(1) ;
    if(e.currentTarget.localName !== 'button'){
      // console.log(e.currentTarget.value)
      setSearchWord(e.currentTarget.value) ; 

      if(catWord === 'all'){
        if(e.currentTarget.value === ''){
          return setBoxOfItems(data.posts)
        }
        let res = data.posts.filter(b => b.title.includes(e.currentTarget.value))
        // console.log(e.currentTarget.value ? e.currentTarget.value : 'ana fudy'   , res ,catWord)
        return setBoxOfItems(res) ;  

      }else{
          if(e.currentTarget.value === ''){
            return setBoxOfItems(data.posts.filter(b => b.category === catWord))
          }
        let res = data.posts.filter(b => b.title.includes(e.currentTarget.value) && b.category === catWord)
        // console.log(e.currentTarget.value ? e.currentTarget.value : 'ana fudy'  , res,catWord)

        return setBoxOfItems(res) ;   
        
      }

    }

  if(cat === 'all'){
    setCatWord('all') ;
    if(searchWord === '') return setBoxOfItems(data.posts) ; 
    else{
      return setBoxOfItems(data.posts.filter(b => b.title.includes(searchWord)))
    }
    
  }

  const res = data.posts.filter(b =>b.category === cat && b.title.includes(searchWord)  ) ;
  setCatWord(cat) ; 
  return  setBoxOfItems(res) ; 
  
}
  function handleLayout(layout){
    setLayout(layout) ;
}

function handlePage(pageIdx){
  setCurrentBtnPage(pageIdx) ; 
  window.scrollTo(0,0) ; 
  

}
 function incPages(){
  setCurrentBtnPage(currentBtnPage+1) ;
 }
 function decPages(){
  setCurrentBtnPage(currentBtnPage-1) ;
 }

// function handleSerach(e){
//   let word =  e.target.value
//   if(!word){
//     return
//   }
//   const ans = box.filter(b =>b.title.includes(word))
//   setBoxOfItems(ans)
//   return
// }



  return (
    <div className="bg-black position-relative " style={{ top: "80px" }}>
      <section className="position-relative" style={{ padding: "100px" }}>
        <div className="container ">
          <div className=" z-0 radialGradient position-absolute top-0 start-50 translate-middle-x h-100 w-50 "></div>
          <div className=" position-relative  mb-5 text-white">
            <h1 className="fw-bold display-3">
              استكشف <span className="text-main">مقالاتنا</span>
            </h1>
            <p className=" text-secondary">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>
      </section>
      <section className=" ">
        <div className="container">
          <div className=" d-block d-md-flex align-items-start justify-content-between p-3">
            <input
            id="search-field"
              style={{ color: "white" }}
              className="form-control place-holder  min-width400 mb-3 mb-md-0 bg-second  "
              type="search"
              placeholder="أبحث في المقلات..."
              aria-label="Search"
              onInput={ (e)=> filterByCat( 'all',e)}
            />
            <div className="d-flex flex-wrap gap-3  text-white">
              <button
                onClick={ (e)=> filterByCat('all' ,e )}
                type="button"
                className={`btn text-white ${catWord === 'all'? 'bg-main' : ''} btn-outline-secondary`}
              >
                جميع المقلات
              </button>
              <button
                type="button"
                className={`btn text-white ${catWord === 'إضاءة'? 'bg-main' : ''} btn-outline-secondary`}
                onClick={ (e)=> filterByCat( 'إضاءة',e)}

              >
                إضاءة
              </button>
              <button
                type="button"
                className={`btn text-white ${catWord === 'بورتريه'? 'bg-main' : ''} btn-outline-secondary`}
                onClick={ (e)=> filterByCat( 'بورتريه',e)}

              >
                 بورتريه
              </button>
              <button
                type="button"
                className={`btn text-white ${catWord === 'مناظر طبيعية'? 'bg-main' : ''} btn-outline-secondary`}
                onClick={ (e)=> filterByCat( 'مناظر طبيعية',e)}

              >
                مناظر طبيعية
              </button>
              <button
                type="button"
                className={`btn text-white ${catWord === 'تقنيات'? 'bg-main' : ''} btn-outline-secondary`}
                onClick={ (e)=> filterByCat( 'تقنيات',e)}

              >
                تقنيات
              </button>
              <button
                type="button"
                className={`btn text-white ${catWord === 'معدات'? 'bg-main' : ''} btn-outline-secondary`}
                onClick={ (e)=> filterByCat( 'معدات',e)}

              >
                معدات
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5 text-secondary">
            <p>
               عرض <span className="text-white">{boxOfItems.length}</span> مقلات <span className="text-main fw-bold">{catWord === 'all' ? '': catWord}</span> 
            </p>
            <div className="d-flex rounded-3 p-1 text-white border">
              <div onClick={()=> handleLayout('grid')} className={ `logo d-flex align-items-center justify-content-center  ${layout === 'grid'?'bg-main':''} rounded-2`}>
                <i className="fa-solid fa-table-cells fa-xl "></i>
              </div>
              <div onClick={()=> handleLayout('list')} className={ `logo d-flex align-items-center justify-content-center  ${layout === 'list'?'bg-main':''} rounded-2`}>
                <i className="fa-solid fa-bars fa-xl"></i>
              </div>
            </div>
          </div>
          <div className="row g-4 text-white mb-5">

            
            {
            
            
            
            boxOfItems.slice(startIdx,endIdx).map((post) => (
              <Link
              key={post.id}
                className={`  ${layout === 'list'?'col-12':'col-12 col-md-6 col-lg-4'} text-decoration-none text-white`}
                state={{ myId: post.id }}
                to={`/blog/${post.slug}`}
              >
                <div className={`overflow-hidden rounded-3 ${layout === 'list'?'d-block d-md-flex ':''}`}  >
                  <div className={`position-relative overflow-hidden ${layout === 'list'?'w-25':''}`}>
                    <img
                      className="w-100 h-100 object-fit-cover"
                      src={post.image}
                      alt={post.title}
                    />
                    <span className="type px-2 py-1 rounded-4 bg-black text-white border-main position-absolute">
                      {post.category}
                    </span>
                  </div>
                  <div className={`bg-second text-end p-4 ${layout === 'list'?'w-75':''}`}>
                    <div className="text-secondary fs-6 ">
                      <span>
                        <i className="fa-solid fa-clock"></i>
                      </span>
                      <span>{post.readTime}</span>
                      <span className="dot mx-1 bg-secondary rounded-circle d-inline-block"></span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h3 className="fs-5 mt-3">
                      {post.title}
                    </h3>
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
            ))}
          </div>
          <div className={`${totalPages === 1 || totalPages === 0  ? 'd-none':''} d-flex justify-content-center gap-2 align-items-center mb-5 text-white`}>
            <div onClick={decPages} className={`${currentBtnPage === 1 ? 'pe-none text-secondary border-secondary' :'text-white border-white'} logo d-flex align-items-center justify-content-center bg-second border rounded-2`}>
              <i className="fa-solid fa-angle-right"></i>
            </div>
              {
              Array.from({length:totalPages}).map((_,idx)=>
                  <div key={idx} onClick={()=>handlePage(idx+1) }  className={`${currentBtnPage === idx+1?'bg-main':''} logo  d-flex align-items-center text-white justify-content-center bg-second border rounded-2`}>
              {idx+1}
            </div>
              )}
            <div onClick={incPages} className={`${currentBtnPage === totalPages ? 'pe-none text-secondary border-secondary' :'text-white border-white'} logo d-flex align-items-center  justify-content-center bg-second border rounded-2`}>
              <i className="fa-solid fa-angle-left"></i>
            </div>
          </div>
          <p className={` ${totalPages === 1 || totalPages === 0  ? 'd-none':''} text-secondary text-center`}>
            صفحة <span className="text-main fw-bold">{currentBtnPage}</span> من <span className="text-main fw-bold">{totalPages}</span>
          </p>
        </div>
      </section>
    </div>
  );
}

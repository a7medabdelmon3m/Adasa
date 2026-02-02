import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='min-vh-100 bg-black d-flex flex-column align-items-center justify-content-center text-white'>
       <div className="container">
        <h1 className=' display-1 fw-bolder text-main mb-3'>404</h1>
        <div className=' mb-4  dimensions132  d-flex justify-content-center align-items-center   m-auto position-relative'>
          <div className=' d-flex bg-main-subtle justify-content-center align-items-center border-main rounded-circle p-5 m-auto dimensions112'>
            <i class="fa-regular fa-face-frown fa-2xl text-main"></i>
          </div>
          <i className=" position-absolute fa-solid fa-circle bottom-0 start-0  text-main " ></i>
          <div className=' position-absolute dimensions24 bg-main rounded-3 top-0 end-0'></div>
        </div>
        <h1 className='mb-4'>
          عفواً! الصفحة غير موجودة
        </h1>
        <p className=' text-secondary'>
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
        </p>
        <div className='mt-4 mb-4 d-flex gap-4 justify-content-center align-items-center'>
            <button
                
                type="button"
                className={`btn bg-main rounded-5 text-white btn-outline-secondary`}
              >
                <i className='fa-solid fa-home fa-x'></i>
                <span>الذهاب للرئيسية </span>
              </button>
            <button
                
                type="button"
                className={`btn rounded-5 text-white btn-outline-secondary`}
              >
                <i className="fa-solid fa-newspaper"></i>
                <span>الذهاب للرئيسية </span>
              </button>
        </div>
        <hr />
        <p className=' my-4 text-secondary'>قد تجد هذه مفيدة:</p>
        <div className=' d-flex gap-5 justify-content-center'>
          <Link className=' text-decoration-none text-main' to={`/blog`}>
          المدونة 
          </Link>
          <Link className=' text-decoration-none text-main' to={`/who-are-we`}>
          من نحن  
          </Link>
          <Link className=' text-decoration-none text-main' to={`/home`}>
          الخصوصية 
          </Link>
        </div>
       </div>
    </div>
  )
}

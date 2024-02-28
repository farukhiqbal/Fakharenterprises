import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet}  from 'react-helmet';


const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>



<Helmet>
   
   <meta charSet="UTF-8" />
   <meta name="description" content={description} />
   <meta name="keywords" content={keywords} />
   <meta name="author" content={author} />
   <title>{title}</title>
 
       </Helmet>






             <Header/>
       <main>
        {children}
       </main>

    <Footer/>

    </div>





  )
}



Layout.defaultProps = {
  title:'fakhar interprises',
  description:'fire and safety ',
  keywords:'fire,safety,fireandsafety,safetyequipments,react,node,mongodb',
  author:'medcloud.com.pk',
}


export default Layout
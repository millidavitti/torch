import React from 'react'
// Components
import TitlePreview from 'components/Reuse/TitlePreview'
import Thumbnail from 'components/Reuse/Thumbnail'
import Date from 'components/Reuse/Date'

// Others
import five from 'assets/images/five.jpg'
import category from 'components/Reuse/CSS/category.module.css'
import ReadMore from './ReadMore'
 

function CategoryPost() {
  return (
     <div className={category.category}>
        <Thumbnail src={five} css={category} href={'https://google.com'} alt={'me'}/>
        <Date date={"Mar 4, 2019"} head={false}/>
        <h2 className={category.categoryHead}>Fashion</h2>
        <TitlePreview
            cssWrap={category.wrapTp} 
            cssTitle={category.title}
            cssPreview={category.postPreview}
            title={'New Post'}
            preview={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?'}
            href='https://google.com'
        />
        <ReadMore href={'https://google.com'}/>
    </div>
  )
}

export default CategoryPost


import React from 'react'
import { useRouter } from 'next/router'

const slug = () => {
    const router = useRouter()
    const {slug} = router.query;
    const {temp} = router.query;
  return (
    <div>
          <p>{slug} {temp}</p>  
    </div>
  )
}

export default slug;
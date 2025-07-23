import { Skeleton } from 'primereact/skeleton';



const SkeletonCard = ({detailsSkeleton}) => {
  return (
  <>
    {  detailsSkeleton ? <div  className="border-round border-1 px-2 py-2 bg-gray-700 shadow-sm rounded-md">
          <div className="mb-3">
            <Skeleton width="100%" height="1rem" className="mb-2 mx-auto" />
             <Skeleton width="100%" height="1rem" className='mt-4 mx-auto'/>
            <Skeleton width="100%" height="1rem" className="mt-4 mb-2 mx-auto" />
            <Skeleton width="100%" height="1rem" className="mt-4 mb-2 mx-auto" />
            <Skeleton width="100%" height="1rem" className="mt-4 mb-2 mx-auto" />
           
          
          </div> 
      </div>
       :  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="border-round border-1 px-2 py-2 bg-gray-700 shadow-sm rounded-md">
          <div className="mb-3">
            <Skeleton width="100%" height="20px" className="mb-2" />
            <Skeleton width="50%" height="1rem" />
            <Skeleton width="30%" height="1rem" className="mt-2 mb-2" />
          
          </div>
        </div>
      ))}
    </div>
    }
  </>
  )
}

export default SkeletonCard;
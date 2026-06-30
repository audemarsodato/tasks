import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function TaskSkeleton() {

        return (
                <div className="task-skeleton">
                        <SkeletonTheme 
                                baseColor="#e5e7eb" highlightColor="#f7f7f7" 
                                borderRadius={16}
                                duration={1}
                        >
                                <Skeleton height={48}/>
                        </SkeletonTheme>
                </div>
        )
}
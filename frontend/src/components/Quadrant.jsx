import { useDroppable } from '@dnd-kit/react'

export default function Quadrant({id, className, children, isHovered}) {
        const { ref } = useDroppable({id})

        return (
                <section ref={ref} className={`${className} ${isHovered ? 'hovered' : ''}`}>
                        {children}
                </section>
        )
}
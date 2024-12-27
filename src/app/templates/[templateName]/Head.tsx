import img from '@/public/templates/1.jpeg'
import Image from 'next/image'

export default function Head() {
    return (
        <div className='overflow-hidden rounded-lg aspect-[5/3]'>
            <Image
                src={img}
                alt="intro image"
                width={2000}
                height={2000}
                placeholder='blur'
            />
        </div>
    )
}

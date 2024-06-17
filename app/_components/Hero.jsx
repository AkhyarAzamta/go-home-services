import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='flex items-center gap-3 flex-col justify-center pt-14 pb-7 bg-gradient-to-r from-purple-500 to-indigo-600'>
      <div className='flex w-full shadow-lg'>
        <img src="/assets/images/gohom.jpeg" alt="main pic" className="w-1/2 rounded-l-lg shadow-lg" />
        <div className='w-1/2 inset-0 flex flex-col items-center justify-center text-center text-white bg-[#c9a2f0] bg-opacity-50 p-8 rounded-r-lg'>
          <h2 className='font-bold text-[46px] mb-4'>
            Find Home 
            <span className='text-yellow-500'> Service/Repair</span>
            <br /> Near You
          </h2>
          <h2 className='text-xl text-gray-200 mb-8'>Explore Best Home Service & Repair near you</h2>
          <Link href="/services">
            <Button className='bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition mb-6'>
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="mt-8 p-8 bg-white rounded-lg shadow-md text-center text-gray-700 w-3/4 flex">
        <div className="w-1/2 pr-8">
          <h3 className="text-2xl font-semibold mb-4">Kenapa Go Home Service?</h3>
          <ul className="text-lg text-left list-disc list-inside">
            <li>Layanan sepenuhnya dijamin dengan asuransi kerusakan yang sah.</li>
            <li>Kebijakan kehilangan & kerusakan barang</li>
            <li>Jaminan kualitas penuh</li>
            <li>Petugas profesional & alat kebersihan lengkap</li>
          </ul>
        </div>
        <div className="w-1/2 pl-8">
          <img src="/assets/images/why.jpg" alt="service1" className="rounded-lg shadow-lg" />
        </div>
      </div>


      <div className="mt-8 p-8 bg-white rounded-lg shadow-md text-center text-gray-700 w-3/4 flex">
        <div className="w-1/2 pr-8">
          <h3 className="text-2xl font-semibold mb-4">Membangun Platform Layanan Pekerjaan Rumah Tangga Online</h3>
          <p className="text-lg mb-4">Membangun platform ini adalah tantangan menarik yang memungkinkan kami untuk memberdayakan penyedia jasa, membantu komunitas, dan meningkatkan pengalaman pelanggan.</p>
        </div>
        <div className="w-1/2 pl-8">
          <img src="/assets/images/platform.jpg" alt="platform" className="rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="mt-8 p-8 bg-white rounded-lg shadow-md text-center text-gray-700 w-3/4 flex">
        <div className="w-1/2 pr- order-2">
          <h3 className="text-2xl font-semibold mb-4">Layanan Home Service Kami</h3>
          <p className="text-lg mb-4">Kami menawarkan berbagai layanan home service, termasuk perbaikan dan pemeliharaan berbagai perangkat rumah tangga, instalasi peralatan baru, serta layanan kebersihan dan perawatan rumah secara menyeluruh.</p>
        </div>
        <div className="w-1/2 pl-1 order-1">
          <img src="/assets/images/service.jpg" alt="service2" className="rounded-lg shadow-lg" />
        </div>
      </div>


      <div className="mt-8 p-8 bg-white rounded-lg shadow-md text-center text-gray-700 w-3/4 flex">
        <div className="w-1/2 pr-1 order-2">
          <h3 className="text-2xl font-semibold mb-4">Karir di Go Home Service</h3>
          <p className="text-lg mb-4">Bergabunglah bersama kami untuk membentuk kembali gaya hidup Indonesia di rumah! Bekerja dengan rekan-rekan terbaik dari mana saja.</p>
          <Button className='bg-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-purple-700 transition'>
            Lihat Lowongan
          </Button>
        </div>
        <div className="w-1/2 pl-1 order-1">
          <img src="/assets/images/career.jpg" alt="career" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  )
}

export default Hero

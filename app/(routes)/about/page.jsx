import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <div className="flex flex-col md:flex-row items-center mb-16">
        
        <div className="text-center md:text-center">
          <h2 className="text-2xl font-semibold mb-4">Story</h2>
          <p className="text-lg text-gray-600">
          Dengan pertumbuhan pasar online, banyak penyedia jasa pekerjaan rumah tangga muncul di platform digital. Persaingan ketat mendorong penurunan kualitas layanan dan praktik bisnis yang meragukan. Perubahan kebutuhan konsumen, kurangnya regulasi, dan masalah teknis seperti keamanan platform online menjadi tantangan serius. Kurangnya pemahaman tentang biaya layanan dan kesulitan dalam merekrut tenaga kerja berkualitas juga memengaruhi kualitas layanan.
          Membangun platform layanan pekerjaan rumah tangga online adalah tantangan menarik. Ini memberdayakan penyedia jasa, membantu komunitas, dan  meningkatkan pengalaman pelanggan. 
          </p>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Visi</h2>
        <p className="text-lg text-gray-600 text-center">
        Menjadi penyedia layanan pembersihan rumah tangga terkemuka di Kota maupun Kab Bandung yang dikenal karena keunggulan dalam kualitas layanan dan kontribusi positif terhadap masyarakat.
        </p>
      </div>
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">Misi</h2>
        <p className="text-lg text-gray-600 text-center">
        1. Memberikan layanan pembersihan berkualitas tinggi kepada pelanggan <br/>
        2. Pembersihan yang inovatif dan efisien <br />
        3. Memberdayakan mitrakerja lokal danmenciptakan lapangan kerja yang berkelanjutan.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-full h-72 overflow-hidden rounded-lg mb-4">
              <Image 
                src="/assets/images/azam.jpg" 
                alt="Team Member 1" 
                width={300} 
                height={300} 
                className="object-cover w-full h-full" 
              />
            </div>
            <h3 className="text-xl font-semibold">Azam</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="text-center">
            <div className="w-full h-72 overflow-hidden rounded-lg mb-4">
              <Image 
                src="/assets/images/dapa.jpg" 
                alt="Team Member 2" 
                width={300} 
                height={300} 
                className="object-cover w-full h-full" 
              />
            </div>
            <h3 className="text-xl font-semibold">Daffa</h3>
            <p className="text-gray-600">General Manager</p>
          </div>
          <div className="text-center">
            <div className="w-full h-72 overflow-hidden rounded-lg mb-4">
              <Image 
                src="/assets/images/fikri.jpg" 
                alt="Team Member 3" 
                width={300} 
                height={300} 
                className="object-cover w-full h-full" 
              />
            </div>
            <h3 className="text-xl font-semibold">Fikri</h3>
            <p className="text-gray-600">Lead Technician</p>
          </div>
          <div className="text-center">
            <div className="w-full h-72 overflow-hidden rounded-lg mb-4">
              <Image 
                src="/assets/images/mupit.jpg" 
                alt="Team Member 3" 
                width={300} 
                height={300} 
                className="object-cover w-full h-full" 
              />
            </div>
            <h3 className="text-xl font-semibold">Mupit</h3>
            <p className="text-gray-600">Chief Operations Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

"use client"
import { Button } from '@/components/ui/button'
import BusinessList from '@/app/_components/BusinessList'
import CategoryList from '@/app/_components/CategoryList'
import GlobalApi from "../../_services/GlobalApi";
import { useEffect, useState } from "react";

function Service() {
  const [categoryList,setCategoryList]=useState([]);
  const [businessList,setBusinessList]=useState([]);
  useEffect(()=>{
    getCategoryList();
    getAllBusinessList();
  },[])

  /**
   * Used to get All Category List
   */
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories);
    })
  }

  /**
   * Used to get All Business List
   */
  const getAllBusinessList=()=>{
    GlobalApi.getAllBusinessList().then(resp=>{
      setBusinessList(resp.businessLists)
    })
  }
  return (
  <>
      <div className='flex items-center gap-3 flex-col justify-center pt-14 pb-7 bg-gradient-to-r from-purple-500 to-indigo-600'>
      <div className='flex w-full shadow-lg'>
  <div className='w-full inset-0 flex flex-col items-center justify-center text-center text-white bg-[#c9a2f0] bg-opacity-50 p-8 rounded-r-lg'>
  <div className="mt-8 p-8 bg-purple-100 rounded-lg shadow-md text-center text-purple-800 w-3/4">
        <h3 className="text-2xl font-semibold mb-4">Nikmati Keuntungan Pembelian Pertama Anda!</h3>
        <p className="text-lg">Diskon 35% untuk pemesanan pertama</p>
        <p className="text-lg">Berlaku untuk Cleaning Pro</p>
        <p className="text-lg">Hanya berlaku untuk transaksi di website kami</p>
      </div>
  </div>
</div>

      <CategoryList categoryList={categoryList} />
    </div>
    
      <BusinessList businessList={businessList} title={'Service & Prices'} />

  </>
  )
}

export default Service
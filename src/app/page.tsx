'use client'
import { WorkerType } from '@/types/workers'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'

export default function WorkersPage() {
  const [workersData, setWorkersData] = useState<WorkerType[]>([])

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await import('../../workers.json')
        setWorkersData(response.default)
      } catch (error) {
        console.error('Failed to load workers:', error)
      }
    }
    loadData()
  }, [])

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10 bg-[#000000] min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          Our Workers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {workersData
            .filter((worker) => worker.pricePerDay > 0)
            .filter((worker) => worker.id !== null)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((worker: WorkerType) => (
              <div
                key={worker.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={worker.image}
                    alt={worker.name}
                    fill
                    className="object-cover"
                    priority={worker.id <= 10}
                  />
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {worker.name}
                  </h2>
                  <p className="text-gray-500">{worker.service}</p>
                  <p className="mt-3 text-lg font-bold text-indigo-600">
                    ₹{Math.round(worker.pricePerDay * 1.18)} / day
                  </p>
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  )
}

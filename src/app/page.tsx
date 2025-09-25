'use client'
import { WorkerType } from '@/types/workers'
import Image from 'next/image'
import React, { useState, useEffect, useMemo } from 'react'
import Navbar from './components/Navbar'
import WorkerCardSkeleton from './components/WorkerCardSkeleton'
import WorkerCard from './components/WorkerCard'

export default function WorkersPage() {
  const [workersData, setWorkersData] = useState<WorkerType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await import('../../workers.json')
        setWorkersData(response.default)
      } catch (error) {
        console.error('Failed to load workers:', error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const filteredWorkers = useMemo(
    () =>
      workersData
        .filter((worker) => worker.pricePerDay > 0 && worker.id !== null)
        .sort((a, b) => a.name.localeCompare(b.name)),
    [workersData]
  )

  return (
    <>
    <Navbar />
    <main className="container mx-auto px-4 py-10 bg-[#000000] min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
        Our Workers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <WorkerCardSkeleton key={i} />)
          : filteredWorkers.map((worker) => <WorkerCard key={worker.id} worker={worker} />)}
      </div>
    </main>
          </>
  )
}

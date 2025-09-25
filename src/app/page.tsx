'use client'
import { WorkerType } from '@/types/workers'
import React, { useState, useEffect, useMemo } from 'react'
import Navbar from './components/Navbar'
import WorkerCardSkeleton from './components/WorkerCardSkeleton'
import WorkerCard from './components/WorkerCard'

export default function WorkersPage() {
  const [workersData, setWorkersData] = useState<WorkerType[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const ITEMS_PER_PAGE = 12

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

  const totalPages = Math.ceil(filteredWorkers.length / ITEMS_PER_PAGE)

  const currentWorkers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredWorkers.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [currentPage, filteredWorkers])

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10 bg-[#000000] min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          Our Workers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                <WorkerCardSkeleton key={i} />
              ))
            : currentWorkers.map((worker) => <WorkerCard key={worker.id} worker={worker} />)}
        </div>

        {/* Simple Pagination Controls */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center mt-10 gap-4 text-white">
            <button
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span className="px-4 py-2">
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </main>
    </>
  )
}

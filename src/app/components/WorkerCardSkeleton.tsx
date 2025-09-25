function WorkerCardSkeleton() {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">
        <div className="w-full h-56 bg-gray-300" />
        <div className="p-5 space-y-3">
          <div className="h-5 bg-gray-300 rounded w-3/4" />
          <div className="h-4 bg-gray-300 rounded w-1/2" />
          <div className="h-6 bg-gray-300 rounded w-1/3" />
        </div>
      </div>
    )
  }

  export default WorkerCardSkeleton
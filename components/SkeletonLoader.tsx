const SkeletonLoader = () => (
  <div className="border border-light-blue-300 shadow rounded-md p-4 max-w-sm min-w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-opacity-50 bg-gray-400 h-12 w-12"></div>
      <div className="flex-1 space-y-4 py-2">
        <div className="h-4 bg-gray-400 bg-opacity-50 rounded w-3/4"></div>
      </div>
    </div>
  </div>
)

export default SkeletonLoader;
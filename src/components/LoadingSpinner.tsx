export const LoadingSpinner = () => {
  return (
    <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div
        className="animate-spin inline-block size-16 border-[3px] border-current border-t-transparent text-gray-900 rounded-full dark:text-gray-700"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

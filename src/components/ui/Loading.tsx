const LoadingRing = ({ size = 40 }) => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <div
        className="rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin"
        style={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
};

export default LoadingRing;

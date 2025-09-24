const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-lg border-2 border-gray-200 bg-white px-4 py-4 text-sm dark:border-gray-500 dark:bg-gray-900 dark:text-gray-400">
      {children}
    </div>
  );
};

export default Card;

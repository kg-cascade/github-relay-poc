const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-lg text-sm bg-white dark:bg-gray-900 dark:text-gray-400 px-4 py-4 border-2 border-gray-200 dark:border-gray-500">
      {children}
    </div>
  );
};

export default Card;

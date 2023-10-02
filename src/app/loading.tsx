const Loading = () => {
  return (
    <div className="grid min-h-[calc(100vh-16rem)] place-items-center">
      <div className="h-32 w-32 animate-spin rounded-full border-y-2 border-foreground dark:border-green-300"></div>
    </div>
  );
};

export default Loading;

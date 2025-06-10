const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      type='button'
      className='group !rounded-button border-accent-500 relative cursor-pointer overflow-hidden rounded-lg border px-6 py-2 whitespace-nowrap'
      aria-label={typeof children === "string" ? children : "Button"}
    >
      {/* Hover background fill effect */}
      <span className='transition-smooth bg-accent-500 absolute inset-0.5 origin-left scale-x-0 transform rounded-md group-hover:scale-x-100' />
      {/* Content container */}
      <span className='text-accent-500 transition-smooth relative flex items-center gap-2 group-hover:text-white'>
        {/* Text animation container */}
        <span className='relative inline-flex flex-col overflow-hidden'>
          <span className='transition-smooth transform group-hover:-translate-y-full'>
            {children}
          </span>
          <span className='transition-smooth absolute top-full transform group-hover:-translate-y-full'>
            {children}
          </span>
        </span>
      </span>
    </button>
  );
};

export { Button };

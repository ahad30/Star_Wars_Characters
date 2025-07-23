
const Button = ({ 
  children, 
  icon: Icon,
  defaultStyle,
  defaultKey
}) => {
  const baseStyles = `inline-flex items-center gap-2 lg:px-4 lg:py-2 rounded-full lg:border font-medium lg:border-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${defaultStyle} text-black text-[12px] lg:text-[14px]`;

  const defaultStyles = `inline-flex items-center gap-2 px-4 py-2 rounded-full border font-medium border-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${defaultStyle} text-black text-[12px] lg:text-[14px]`
  

  return (
    <button
      className={`${defaultKey ? defaultStyles : baseStyles}`}
    >
     <span className={`border border-black rounded-full p-2 -ml-4  ${!defaultKey ? 'hidden' : ''} lg:block`}> {Icon && <Icon size={20} />}</span>
    <p className="mt-1">  {children}</p>
    </button>
  );
};

export default Button;
import { socialData } from '../data';

const Socials = () => {
  return (
    <div className="flex gap-x-[10px]">
      {socialData.map((item, idx) => (
        <a
          className="border border-white/20 rounded-full w-[35px] h-[35px] 
          flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all duration-200"
          href={item.href}
          key={idx}
        >
          {<item.icon />}
        </a>
      ))}
    </div>
  );
};

export default Socials;

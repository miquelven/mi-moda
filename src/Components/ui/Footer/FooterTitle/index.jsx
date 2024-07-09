export default function FooterTitle({ children }) {
  return (
    <h6 className="relative text-2xl mb-10 font-semibold after:content-[''] after:absolute after:-bottom-3  after:left-0 after:w-10 after:h-1 after:bg-zinc-700 rounded-md max-sm:text-xl">
      {children}
    </h6>
  );
}

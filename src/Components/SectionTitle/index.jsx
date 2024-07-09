export default function SectionTitle({ children }) {
  return (
    <h2 className="relative  inline  text-4xl w-fit font-bold after:content-[''] after:w-20 after:h-1 after:absolute after:-bottom-1 after:right-1/2 after:translate-x-1/2 after:bg-black">
      {children}
    </h2>
  );
}

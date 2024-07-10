export default function SectionTitle({ children }) {
  return (
    <h2
      data-aos="fade-up"
      data-aos-delay="700"
      className="relative text-center  text-4xl  font-bold after:content-[''] after:w-20 after:h-1 after:absolute after:-bottom-2 after:right-1/2 after:translate-x-1/2 after:bg-black"
    >
      {children}
    </h2>
  );
}

export default function Container({ children }) {
  return (
    <div className="max-w-[1440px] mx-auto max-2xl:px-10 max-sm:px-5">
      {children}
    </div>
  );
}

type HeaderProps = {
  subHeader: string;
  mainHeader: string;
};
export default function SectionHeaders({ subHeader, mainHeader }: HeaderProps) {
  return (
    <>
      <h3 className="uppercase text-gray-500 font-semibold">{subHeader}</h3>
      <h2 className="text-bg-light-green font-bold text-5xl italic">
        {mainHeader}
      </h2>
    </>
  );
}

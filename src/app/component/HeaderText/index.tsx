export default function HeaderText({ text = "Section", textClass = "" }) {
  return (
    <div>
      <h2
        className={`font-playfair text-5xl lg:text-7xl font-bold text-[#FFFAEB] ${textClass}`}
      >
        {text}
      </h2>
    </div>
  );
}

export default function HeaderText({ text = "Section" }) {
  return (
    <div>
      <h2 className="font-playfair text-3xl text-gray-950">{text}</h2>
    </div>
  );
}

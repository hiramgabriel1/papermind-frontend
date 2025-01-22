import perfil from "../../assets/perfil.png";

export default function ChatUserComponent() {
  return (
    <div className="flex justify-end items-start gap-4">
      <div className="bg-[#eff0fd] text-black p-4 rounded-lg max-w-xs text-sm">
        <p>Why does the weather not just stay the same?</p>
      </div>
      <div className="w-8 h-8 rounded-full overflow-hidden hidden sm:block">
        {" "}
        <img
          src={perfil.src}
          alt="Usuario"
          className="w-10 h-10 object-cover"
        />
      </div>
    </div>
  );
}

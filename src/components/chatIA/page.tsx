import IA from "../../assets/IA.png";

export default function ChatIAComponent() {
  return (
    <div className="flex justify-start items-start gap-4">
      <div className="w-8 h-8 rounded-full overflow-hidden hidden sm:block">
        <img src={IA.src} alt="IA" className="w-full h-full" />
      </div>
      <div className="border border-gray-300 bg-background_secundary text-black p-4 rounded-lg max-w-xl text-xs sm:text-sm">
        {" "}
        <p className="font-bold">
          The two main reasons why the weather does not stay the same are:
        </p>
        <br />
        <p>
          <strong>Atmospheric Dynamics:</strong> The Earths atmosphere is
          constantly in motion due to various factors like air circulation,
          pressure systems, and the interaction of different air masses. These
          dynamic processes lead to continuous changes in weather patterns as
          air masses move, mix, and create variations in temperature, pressure,
          and humidity.
        </p>
        <br />
        <p>
          <strong>Solar Influence:</strong> The Sun is the primary driver of
          weather patterns on Earth. Solar radiation heats the Earth unevenly
          due to its curvature and axial tilt, leading to temperature gradients
          across different regions. This differential heating causes air to
          rise, creating low-pressure areas, and air to sink, forming
          high-pressure areas, which influence the movement of air masses and
          weather patterns.
        </p>
      </div>
    </div>
  );
}

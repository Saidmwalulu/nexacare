import banner from "@/public/banner.jpg";
export default function Features() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="absolute inset-0 bg-[#a2bfeb]/75"></div>
      <div className="relative container mx-auto px-4 py-[90px]">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="text-center">
            <div>Tele Icon</div>
            <span className="text-xl font-semibold">Telemedicine</span>
            <p className="text-center">
              Remote doctor consultations via secure video and audio connections
            </p>
          </div>

          <div className="text-center">
            <div>Hlth Icon</div>
            <span className="text-xl font-semibold">Health Education</span>
            <p className="text-center">
              Localize verified health contents via mobile platforms
            </p>
          </div>

          <div className="text-center">
            <div>Dash Icon</div>
            <span className="text-xl font-semibold">Dashboard</span>
            <p className="text-center">
              Electronic health record system for clinics to manage patient data
              and appointments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

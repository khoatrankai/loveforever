export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center space-y-8 max-w-3xl">
        {/* Decorative hearts */}
        <div className="flex justify-center gap-6 mb-8">
          <span className="text-6xl animate-pulse-heart">❤️</span>
          <span
            className="text-6xl animate-pulse-heart"
            style={{ animationDelay: "0.3s" }}
          >
            💕
          </span>
          <span
            className="text-6xl animate-pulse-heart"
            style={{ animationDelay: "0.6s" }}
          >
            ❤️
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight text-foreground">
          Thu Hà
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground font-light">
          Mọi tín hiệu của anh đều chỉ hướng về một tọa độ: Là Em.
        </p>

        {/* Date */}
        <div className="pt-8">
          <p className="text-lg text-muted-foreground mb-2">
            Chúc mừng ngày Valentine
          </p>
          <p className="text-3xl font-semibold text-primary">
            14 tháng 2, 2026
          </p>
        </div>

        {/* Decorative line */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="text-primary text-2xl">⬇️</div>
      </div>
    </section>
  );
}

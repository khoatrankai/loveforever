export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t-2 border-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Soldier's Note */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Từ Chiến Trường
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Trong những khoảnh khắc yên tĩnh của hành trình này, em là sự an
              ủi lớn nhất của anh. Cảm ơn em vì là lý do anh chiến đấu và lý do
              anh quay về nhà.
            </p>
          </div>

          {/* Message to Thu Ha */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Gửi Đến Thu Hà Yêu Dấu
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Em là nhà của anh, em là tình yêu của anh, em là tất cả. Ngày
              Valentine này và mãi mãi, biết rằng em được yêu thương vô hạn.
            </p>
          </div>

          {/* Promise */}
          <div className="text-right">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Lời Hứa
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Anh hứa sẽ trở về với em. Anh hứa sẽ quý trọng mỗi khoảnh khắc
              chúng ta có cùng nhau. Anh hứa mãi mãi.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>

        {/* Bottom */}
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-4">
            <span className="text-2xl animate-pulse-heart">❤️</span>
            <span className="text-2xl">🪖</span>
            <span
              className="text-2xl animate-pulse-heart"
              style={{ animationDelay: "0.3s" }}
            >
              💕
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            Ngày Valentine này, dành tặng cho Thu Hà
          </p>
          <p className="text-xs text-muted-foreground">
            Tình yêu vô tận từ phía bên kia thế giới • 14 tháng 2, 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Message() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* From soldier */}
        <div className="mb-12 text-right">
          <p className="text-sm font-semibold text-muted-foreground mb-2">
            Gửi từ trạm phát sóng nơi miền Trung 📡
          </p>
        </div>

        {/* Main message card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 space-y-6 border-l-4 border-primary relative overflow-hidden">
          {/* Chìm dưới nền một chút chất lính thông tin */}
          <div className="absolute top-0 right-0 p-4 opacity-5 text-xs font-mono">
            SIGNAL STRENGTH: 100% <br />
            TARGET: THU HÀ
          </div>

          <p className="text-lg leading-relaxed text-foreground font-medium">
            Thu Hà thân mến,
          </p>

          <p className="text-lg leading-relaxed text-foreground">
            Trong ngày Valentine này, dù anh đang ở một nơi xa xôi, cách em hàng
            ngàn dặm, nhưng những "tín hiệu" từ trái tim anh vẫn luôn dò tìm và
            hướng về phía em. Người ta nói khoảng cách địa lý đáng sợ lắm, nhưng
            với một người lính thông tin như anh, chỉ cần tâm trí còn kết nối,
            thì em vẫn luôn ở thật gần.
          </p>

          <p className="text-lg leading-relaxed text-foreground">
            Mỗi ngày trực máy, anh thường hình dung về nụ cười của em qua những
            tấm hình, lắng nghe giọng nói của em để xua đi cái tĩnh lặng nơi
            thao trường. Dù chúng mình **chưa một lần gặp mặt ngoài đời**, nhưng
            sự chân thành của em đã trở thành "trạm tiếp sóng" giúp anh vững
            vàng hơn trong những ngày tối trời.
          </p>

          <p className="text-lg leading-relaxed text-foreground">
            Anh chưa từng được chạm vào đôi tay ấy, cũng chưa biết cảm giác đứng
            đối diện em sẽ hồi hộp thế nào. Anh chỉ biết mang theo hình bóng em
            vào từng ca trực, từng nhịp tim dưới màu áo xanh người lính. Cảm ơn
            em vì đã xuất hiện, vì đã kiên nhẫn trò chuyện và tin tưởng một
            người ở xa mà em chưa từng thấy mặt.
          </p>

          <p className="text-lg leading-relaxed text-primary font-bold italic">
            Ngày anh hoàn thành nhiệm vụ trở về, anh không muốn chúng mình chỉ
            là những dòng tin nhắn hay cuộc gọi video nữa. Anh muốn được thực sự
            bước đến trước mặt em, để chúng mình có một buổi hẹn hò đầu tiên
            đúng nghĩa. Em có sẵn lòng cho anh một cơ hội để bắt đầu câu chuyện
            này ngoài đời thực không?
          </p>

          <div className="pt-6 border-t-2 border-secondary">
            <p className="text-lg font-semibold text-primary">Đợi tin từ em,</p>
            <p className="text-lg text-muted-foreground mt-2">
              Chàng lính thông tin của em ⚡
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-8 mt-12">
          <span className="text-4xl animate-pulse">📡</span>
          <span
            className="text-4xl animate-pulse-heart"
            style={{ animationDelay: "0.3s" }}
          >
            ❤️
          </span>
          <span className="text-4xl animate-pulse">📶</span>
        </div>
      </div>
    </section>
  );
}

"use client";

interface Wish {
  emoji: string;
  title: string;
  description: string;
}

const wishes: Wish[] = [
  {
    emoji: "🌙",
    title: "Dưới Mỗi Vì Sao",
    description:
      "Dù anh và em ở xa nhau, chúng ta cùng chia sẻ bầu trời đêm. Mỗi vì sao anh nhìn thấy đều nhắc anh nhớ em, để mắt chăm sóc em từ xa.",
  },
  {
    emoji: "🎁",
    title: "Món Quà Vô Giá",
    description:
      "Em là phước lành lớn nhất của anh. Tình yêu của em là bộ quà vô cùng quý giá anh có thể nhận được—đắt giá hơn bất cứ thứ gì trên thế gian.",
  },
  {
    emoji: "🌹",
    title: "Nở Hoa Mãi Mãi",
    description:
      "Giống như hoa hồng không bao giờ héo, tình yêu anh dành cho em ngày càng mạnh mẽ. Em là vẻ đẹp trong bóng tối của anh.",
  },
  {
    emoji: "💌",
    title: "Lời Từ Trái Tim",
    description:
      "Mỗi từ anh viết, mỗi tin nhắn anh gửi—tất cả đều đến từ sâu thẳm trái tim anh. Em là cảm hứng để anh trở nên tốt hơn mỗi ngày.",
  },
  {
    emoji: "⏰",
    title: "Đếm Ngày Chờ Đợi",
    description:
      "Anh đếm từng ngày để có thể ôm em lại. Mỗi khoảnh khắc không có em khiến anh thích em thêm nhiều hơn.",
  },
  {
    emoji: "🌈",
    title: "Sau Mỗi Cơn Bão",
    description:
      "Em là cầu vồng sau cơn mưa của anh. Qua mọi khó khăn và thử thách, em là ánh sáng và hy vọng của anh cho ngày mai.",
  },
];

export default function Wishes() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Những Điều Anh Mong Muốn Cho Em, Thu Hà
          </h2>
          <p className="text-lg text-muted-foreground">
            Sáu lý do tình yêu của anh không có giới hạn
          </p>
        </div>

        {/* Wishes grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow hover:border-primary/50 border-2 border-transparent"
            >
              <div className="text-5xl mb-4">{wish.emoji}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {wish.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {wish.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground font-light italic max-w-2xl mx-auto">
            "Khoảng cách chẳng có ý nghĩa khi ai đó lại có ý nghĩa quá lớn. Anh
            thích em, Thu Hà. Mãi mãi. Trọn đời. Dù anh ở đâu trên thế giới
            này."
          </p>
        </div>
      </div>
    </section>
  );
}

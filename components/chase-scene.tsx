"use client";

import { useState, useEffect } from "react";

export default function ChaseScene() {
  const [isChasing, setIsChasing] = useState(true);
  const [showFlower, setShowFlower] = useState(false);
  const [soldierPos, setSoldierPos] = useState(-200);
  const [thuHaPos, setThuHaPos] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  // Bộ câu thoại mới đậm chất lính thông tin
  const messages = [
    "Alo alo, Thu Hà nghe rõ trả lời!",
    "Bắt đúng tần số của em rồi!",
    "Đừng ngắt kết nối với anh mà!",
    "Tín hiệu báo: Anh thích em!",
    "Ra-đa tim anh dò trúng em rồi!",
    "Cho anh xin 'pass' vào tim em đi!",
    "Đừng gây nhiễu sóng lòng anh nữa!",
    "Trạm phát sóng đang quá tải vì nhớ em!",
    "Đồng chí ơi, dừng bước nhận tin!",
    "Chuyển từ online sang offline đi em!",
    "Trái tim anh đang trực thông tin!",
    "Chốt hạ: Bắt sóng thành công!",
  ];

  useEffect(() => {
    if (!isChasing) return;

    const interval = setInterval(() => {
      setSoldierPos((prev) => {
        const newPos = prev + 15;
        if (newPos > 500) {
          setThuHaPos(0);
          setMessageIndex(0);
          return -200;
        }
        return newPos;
      });

      setThuHaPos((prev) => {
        if (soldierPos > prev - 100) {
          const newIndex = Math.floor(Math.random() * messages.length);
          setMessageIndex(newIndex);
          return prev + 20;
        }
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isChasing, soldierPos]);

  const handleClick = () => {
    if (isChasing) {
      setIsChasing(false);
      setShowFlower(true);
    } else {
      setIsChasing(true);
      setShowFlower(false);
    }
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Quá trình dò tìm tần số mang tên Thu Hà 📡
          </h2>
          <p className="text-lg text-muted-foreground animate-pulse">
            Chạm vào hình để "chốt hạ" đường truyền...
          </p>
        </div>

        {/* Chase Scene Container */}
        <div
          onClick={handleClick}
          className="relative h-48 bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer border-2 border-secondary hover:border-primary transition-colors"
        >
          {/* Ground line */}
          <div className="absolute bottom-12 w-full h-1 bg-gradient-to-r from-transparent via-muted to-transparent"></div>

          {/* Message bubble */}
          {(isChasing || showFlower) && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-center text-sm md:text-base font-semibold whitespace-nowrap shadow-lg animate-bounce z-20">
              {showFlower
                ? "Gặp ngoài đời nét hơn qua mạng! Đồng ý buổi hẹn đầu tiên với anh nhé! 💐"
                : messages[messageIndex]}
            </div>
          )}

          {/* Thu Ha */}
          <div
            className={`absolute bottom-12 transition-all duration-700 ease-in-out ${!showFlower ? "animate-bob" : ""}`}
            style={{
              left: showFlower ? "55%" : `calc(60% + ${thuHaPos}px)`,
              maxWidth: "80px",
              transform: showFlower ? "translateX(-50%)" : "none",
            }}
          >
            <img
              src="/cogiao.png"
              alt="Thu Hà"
              className={`text-5xl ${!showFlower ? "animate-pulse" : ""}`}
            />
            <p className="text-center text-xs font-semibold text-foreground mt-1">
              Thu Hà
            </p>
          </div>

          {/* Soldier */}
          <div
            className="absolute bottom-12 transition-all duration-700 ease-in-out"
            style={{
              left: showFlower ? "40%" : `${soldierPos}px`,
              maxWidth: "80px",
              transform: showFlower ? "translateX(-50%)" : "none",
            }}
          >
            <img
              src="/linh.png"
              alt="Chàng lính"
              className="text-5xl"
              style={{
                transform: `scaleX(${showFlower || soldierPos < thuHaPos ? 1 : -1})`,
              }}
            />
            <p className="text-center text-xs font-semibold text-primary mt-1">
              Lính thông tin
            </p>
          </div>

          {/* The Flower (Chỉ hiện khi click) */}
          {showFlower && (
            <div className="absolute bottom-16 left-[48%] -translate-x-1/2 text-5xl z-10 animate-bounce transition-all duration-500">
              💐
            </div>
          )}

          {/* Heart trails & Explosions */}
          <div className="absolute inset-0 pointer-events-none">
            {showFlower
              ? [...Array(6)].map((_, i) => (
                  <div
                    key={`burst-${i}`}
                    className="absolute text-3xl opacity-80 animate-ping"
                    style={{
                      left: `${45 + Math.random() * 10}%`,
                      bottom: `${30 + Math.random() * 30}%`,
                      animationDuration: `${1 + Math.random()}s`,
                    }}
                  >
                    💖
                  </div>
                ))
              : isChasing
                ? [...Array(3)].map((_, i) => (
                    <div
                      key={`trail-${i}`}
                      className="absolute text-2xl opacity-60 animate-fall"
                      style={{
                        left: `${(soldierPos + 40 + i * 20) % 100}%`,
                        top: "20%",
                        animationDuration: `${2 + i * 0.3}s`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    >
                      ⚡
                    </div>
                  ))
                : null}
          </div>
        </div>

        {/* Info text */}
        <div className="mt-8 text-center text-muted-foreground">
          <p className="text-sm md:text-base mb-2 font-medium">
            Ngày hoàn thành nhiệm vụ trở về, anh sẽ mang "tần số" này đi tìm em
            ngoài đời thực!
          </p>
          <p className="text-xs md:text-sm">
            Đường truyền này sẽ không bao giờ ngắt cho đến khi em gật đầu đồng
            ý...
          </p>
        </div>
      </div>
    </section>
  );
}

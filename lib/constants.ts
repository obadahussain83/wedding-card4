// ─────────────────────────────────────────────
//  بيانات الدعوة — عدّل كل شي من هون
// ─────────────────────────────────────────────

export const WEDDING = {
  // الأسماء
  groomName: "عمر",
  brideName: "لين",
  groomInitial: "O",
  brideInitial: "L",

  // التاريخ والوقت — عدّل التاريخ هون (سنة، شهر-1، يوم، ساعة، دقيقة)
  // ملاحظة: الشهر يبدأ من 0 (يعني 7 = آب/أغسطس)
  weddingDate: new Date(2026, 7, 14, 19, 0, 0),
  dateLabel: "١٤ آب ٢٠٢٦",
  timeLabel: "٧:٠٠ مساءً",

  // المكان
  city: "نابلس",
  venue: "صالة حياة نابلس",
  // حط رابط Google Maps الحقيقي للصالة هون
  venueMapUrl: "https://maps.google.com/?q=صالة+حياة+نابلس",
  // رابط التضمين (embed) — اختياري، بيظهر خريطة جوا الصفحة
  venueMapEmbedUrl:
    "https://www.google.com/maps?q=%D8%B5%D8%A7%D9%84%D8%A9+%D8%AD%D9%8A%D8%A7%D8%A9+%D9%86%D8%A7%D8%A8%D9%84%D8%B3&output=embed",

  // صور المعرض — حط صورك بمجلد public/gallery وعدّل الأسماء هون
  galleryImages: [
    "/gallery/photo-1.jpg",
    "/gallery/photo-2.jpg",
  ],

  // برنامج الحفل — عدّل الأوقات والفقرات من هون
  program: [
    { time: "٧:٠٠", title: "استقبال الضيوف", icon: "welcome" },
    { time: "٨:٣٠", title: "دخول العروسين", icon: "rings" },
    { time: "٩:٣٠", title: "العشاء", icon: "dinner" },
    { time: "١٠:٣٠", title: "قصّ الكيك", icon: "cake" },
    { time: "١١:٠٠", title: "السهرة والرقص", icon: "party" },
  ],

  // نصوص
  invitationLine:
    "بقلوبٍ مليئةٍ بالفرح، ندعوكم لتشاركونا ليلة العمر... ليلة اكتمال فرحتنا",
  heroLine: "قصّة حبٍّ كتبها القدر... ونفرح ببدايتها معكم",
  thankYouMessage: "شكراً لمشاركتكم فرحتنا، حضوركم أجمل هدية",
  tapToOpenText: "اضغط لفتح الدعوة",
} as const;

const products = [
    {
      id: 1,
      img: "./assets/images/product_1.webp",
      name: "Quấn Cổ Tay Harbinger Red Line Wristwraps Unisex 18 Inch Flag",
      price_old: "600.000đ",
      price_current: "420.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Quấn cổ tay Harbinger Red Line Wrist Wraps Unisex 18-Inch Flag là sản phẩm đến từ thương hiệu Harbinger danh tiếng của Hoa Kỳ, chuyên sản xuất phụ kiện tập luyện đẳng cấp.",
      specification: "•	Tối ưu hóa bảo vệ cổ tay: dây quấn có thiết kế đặc biệt giúp tăng ổn định và bảo vệ cho cổ tay khi tập luyện. <br>"
                    + "•	Chất liệu đạt chuẩn thi đấu: sản phẩm được sản xuất bằng chất liệu đàn hồi cao cấp, đảm bảo sự ổn định và độ bền bỉ qua các buổi tập khắc nghiệt.  <br>"
                    + "•	Chiều dài 18 inch lý tưởng: giúp hỗ trợ sự vững chắc cho cổ tay và tăng cường tự tin khi nâng tạ. <br>"
                    + "•	Sử dụng linh hoạt: sản phẩm có khóa dán chắc chắn và vòng ngón cái thuận tiện lợi, cho phép bạn điều chỉnh mức độ căng phù hợp với nhu cầu."
    },
    {
      id: 2,
      img: "./assets/images/product_2.webp",
      name: "Harbinger Red Line Wrist Wrap",
      price_old: "800.000đ",
      price_current: "740.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Dây Quấn Cổ Tay Redline hỗ trợ cho cổ tay được cố định thẳng để tránh bị lệch trọng tâm ở các khớp cổ tay khi tập các bài như đẩy ngực (bench) và hỗ trợ bạn khi Squat và Fornt Squat để tránh được tối đa chấn thương thường gặp.",
      specification: "•	Được thiết kế để giúp người tập tạ được nhiều hơn với thời gian tập luyện lâu hơn, dây quấn cổ tay tập gym Harbinger tối đa hóa sự ổn định của cổ tay. <br>"
                    + "•	Dây quấn cổ tay Red Line cũng giúp giảm thiểu mỏi cổ tay trong các lần tập. <br>"
                    + "•	Chiều dài 18 inch và có thêm móc ở ngón tay cái giúp cố định dây quấn cổ tay trên bàn tay và có thể điều chỉnh sao cho phù hợp với kích thước tay của bạn."
    },
    {
      id: 3,
      img: "./assets/images/product_3.webp",
      name: "Dây Kéo Lưng Harbinger Padded Cotton Lift Straps Flag",
      price_old: "300.000đ",
      price_current: "220.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Dây Quấn Cổ Tay Redline hỗ trợ cho cổ tay được cố định thẳng để tránh bị lệch trọng tâm ở các khớp cổ tay khi tập các bài như kéo lưng cả theo đa hướng.",
      specification: "•	Đeo dây kéo lưng vào cổ tay và điều chỉnh cho phù hợp. Đảm bảo rằng dây đeo không quá chật hoặc quá lỏng để tránh gây khó chịu hay tuột khi tập luyện. <br>"
                    + "•	Đặt vòng dây thành một khúc lặp, sau đó xỏ qua dưới thanh tạ và quấn chắc xung quanh. Đảm bảo dây được quấn đủ chặt để giữ tạ thật vững chắc.  "
    },
    {
      id: 4,
      img: "./assets/images/product_4.webp",
      name: "Harbinger Wrist Supports PRO",
      price_old: "960.000đ",
      price_current: "670.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Dây quấn cổ tay tập gym Harbinger Writs Supports là phụ kiện tập gym cần thiết để bảo vệ cổ tay, giúp cố định cổ tay trong các bài tập cần đến sức mạnh của tay. Sản phẩm được nghiên cứu và sản xuất bởi Harbinger - thương hiệu phụ kiện thể hình số 1 tại Mỹ.",
      specification: "•	Giúp cố định cổ tay mà không hạn chế chuyển động của cổ tay <br>"
                    + "•	Đệm tích hợp giúp bảo vệ tối đa và giảm áp lực, giúp bạn vượt qua những bài tập khó khăn một cách tự tin <br>"
                    + "•	Khóa con lăn thép chịu lực cung cấp độ căng nhất định "
    },
    {
      id: 5,
      img: "./assets/images/product_5.webp",
      name: "Harbinger Red Line Knee Wraps, 78'' (200 cm)",
      price_old: "490.000đ",
      price_current: "310.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Dây quấn đầu gối Harbinger Red Line Knee Wraps là phụ kiện tập gym cao cấp của thương hiệu Harbinger - hãng phụ kiện thể hình số 1 tại Mỹ. Dây quấn đầu gối Harbinger có tính năng đàn hồi cao giúp tối đa hóa độ ổn định và cố định đầu gối trong khi tập luyện, giúp bảo vệ đầu gối tối đa.",
      specification: "•	Chiều dài mở rộng 78 inch (198cm), có thể quấn nhiều vòng quanh đầu gối giúp cố định đầu gối <br>"
                    + "•	Rộng 3 inch (7,6cm)"
    },
    {
      id: 6,
      img: "./assets/images/product_6.webp",
      name: "Harbinger Lifting Grips",
      price_old: "800.000đ",
      price_current: "400.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Dây đeo tập gym Harbinger Lifting Grips là phụ kiện tập gym cao cấp của Harbinger - hãng phụ kiện thể hình số 1 tại Mỹ. Sản phẩm là phụ kiện đa năng với công dụng bảo vệ lòng bàn tay, hỗ trợ cổ tay và tăng hiệu suất tập luyện.",
      specification: "•	Sản phẩm được làm từ da Durahide chính hãng với lớp đệm căng cao su tổng hợp màu đen. <br>"
                    + "•	Tay cầm của Harbinger Lifting Strapss có thể được đeo dựa vào lòng bàn tay hoặc quấn quanh thanh bar và bao phủ tay như một dây móc. Có lớp đệm phù hợp để tạo độ bám đồng thời giúp ngăn ngừa mụn nước và vết chai. <br>"
                    + "•	Dây đeo nylon chịu lực có thể điều chỉnh theo ý thích. <br>"
                    + "•	Đệm NeoTek bảo vệ cổ tay và hỗ trợ tối đa khi tập luyện. <br>"
                    + "•	Có khóa on / off  giúp bạn tháo ra dễ dàng hơn sau khi tập luyện."
    },
    {
      id: 7,
      img: "./assets/images/product_7.webp",
      name: "Găng Tay Tập Gym Nam Harbinger Flexfit 2.0 - Đỏ",
      price_old: "999.000đ",
      price_current: "499.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Găng Tay Tập Gym Nam Harbinger Flexfit 2.0 được chế tạo từ vật liệu chất lượng cao, đảm bảo độ bền và sự thoải mái. Thiết kế độc đáo giúp tối đa hóa sự linh hoạt và di chuyển không bị hạn chế, mang lại cho bạn cảm giác tự do khi tập luyện. Chất liệu thoáng khí giúp giữ tay bạn luôn mát và khô trong những buổi tập căng trải nghiệm.",
      specification: "•	Sản xuất từ vật liệu chất lượng cao đảm bảo độ bền và thoải mái <br>"
                    + "•	Thiết kế độc đáo giúp tối đa hóa sự linh hoạt và di chuyển không bị hạn chế <br>"
                    + "•	Chất liệu thoáng khí giữ tay luôn mát và khô trong suốt buổi tập <br>"
                    + "•	Có sẵn trong nhiều kích thước để phù hợp với từng người <br>"
                    + "•	Phù hợp cho nhiều loại bài tập, bao gồm cả tập luyện chéo, bài tập cơ bản, và nhiều hơn nữa"
    },
    {
      id: 8,
      img: "./assets/images/product_8.webp",
      name: "Găng Tay Tập Gym Nam Harbinger Pro Gl 2.0 - Nâu",
      price_old: "1.000.000đ",
      price_current: "699.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Găng Tay Tập Gym Nam Harbinger Pro Gl 2.0 - sự kết hợp hoàn hảo giữa phong cách, thoải mái, và chất lượng cao. Nâng tầm hành trình tập luyện của bạn theo cách mới vì đôi bàn tay của bạn xứng đáng được nâng niu và nhận được những điều tốt nhất. Hãy đầu tư vào chất lượng và phong cách với găng tay này ngay hôm nay!",
      specification: "•	Kiểm soát nâng cao: Thiết kế tối ưu hóa sự ổn định và hiệu suất trong những buổi tập căng thẳng, giúp bạn kiểm soát tốt từng động tác<br>"
                    + "•	Hỗ trợ điều chỉnh cổ tay: Dây đeo cổ tay có thể điều chỉnh để đảm bảo sự vững chắc và hỗ trợ tối đa cho những bài tập nặng <br>"
                    + "•	Kết cấu lưới thoáng khí: Chất liệu lưới thoáng khí giữ cho đôi tay của bạn luôn mát mẻ và khô ráo, cho dù buổi tập nặng đến đâu <br>"
                    + "•	Đệm cao cấp tích hợp: Lớp đệm tinh tế tạo sự thoải mái và bảo vệ xuất sắc, giảm nguy cơ tạo nốt và đau nhức<br>"
                    + "•	Thiết kế thanh lịch: Với kiểu dáng hiện đại, găng tay mang đến sự thanh lịch và năng động, tạo điểm nhấn thời trang cho bộ trang phục tập luyện của bạn"
    },
    {
      id: 9,
      img: "./assets/images/product_9.webp",
      name: "Găng Tay Tập Gym Nữ Harbinger Wristwrap - Đen",
      price_old: "1.200.000đ",
      price_current: "959.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Tận hưởng sự thoải mái trong từng bài tập với chất liệu Cotton thoải mái"
                    + "Cảm nhận sự bảo vệ vượt trội và giảm mệt mỏi của đôi tay với lớp đệm tích hợp, giúp bạn tự tin vượt qua những giới hạn của mình Với thiết kế bắt mắt, "
                    + "Găng Tay Tập Gym Nữ Harbinger Pro Fitness không chỉ là vật dụng bổ trợ tập luyện, mà còn tạo nguồn động lực mạnh mẽ giúp bạn chinh phục những mục tiêu tập luyện của mình.",
      specification: "•	Thiết kế dành riêng cho phụ nữ để vừa vặn với bàn tay, đảm bảo thoải mái và linh hoạt <br>"
                    + "•	Đệm tích hợp giúp bảo vệ tối đa và giảm áp lực, giúp bạn vượt qua những bài tập khó khăn một cách tự tin <br>"
                    + "•	Cổ tay có thể điều chỉnh để đảm bảo sự ổn định và hỗ trợ tối đa trong những bài tập cường độ cao <br>"
                    + "•	Vệ sinh găng tay thường xuyên với nước lạnh và nước giặt tẩy dịu nhẹ để không làm mất màu và giảm độ bám. Sử dụng bàn chải mềm để làm sạch các khu vực bám bụi và mồ hôi. <br>"
                    + "•	Không nên giặt găng tay trong máy giặt, vì có thể làm hư hỏng phom dáng và giảm khả năng bám."
    },
    {
      id: 10,
      img: "./assets/images/product_10.webp",
      name: "Găng Tay Tập Gym Nữ Harbinger Pro Fitness - Đen",
      price_old: "900.000đ",
      price_current: "420.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Tận hưởng sự thoải mái trong từng bài tập với thiết kế dành riêng cho phụ nữ của Găng Tay Tập Gym Nữ Harbinger Pro Fitness. Cảm nhận sự bảo vệ vượt trội và giảm mệt mỏi của đôi tay với lớp đệm tích hợp, giúp bạn tự tin vượt qua những giới hạn của mình Với thiết kế bắt mắt, Găng Tay Tập Gym Nữ Harbinger Pro Fitness không chỉ là vật dụng bổ trợ tập luyện, mà còntạo nguồn động lực mạnh mẽ giúp bạn chinh phục những mục tiêu tập luyện của mình.",
      specification: "•	Thiết kế dành riêng cho phụ nữ để vừa vặn với bàn tay, đảm bảo thoải mái và linh hoạt <br>"
                    + "•	Đệm tích hợp giúp bảo vệ tối đa và giảm áp lực, giúp bạn vượt qua những bài tập khó khăn một cách tự tin <br>"
                    + "•	Cổ tay có thể điều chỉnh để đảm bảo sự ổn định và hỗ trợ tối đa trong những bài tập cường độ cao <br>"
                    + "•	Chất liệu thoáng khí giúp kiểm soát độ ẩm, giữ cho tay luôn khô ráo và mát mẻ <br>"
                    + "•	Thiết kế thanh lịch và tinh tế, tạo điểm nhấn cho bộ trang phục tập luyện của bạn và đồng thời truyền cảm hứng để chinh phục mục tiêu tập luyện của bạn"
    },
    {
      id: 11,
      img: "./assets/images/product_11.webp",
      name: "Harbinger Training Grip Wristwrap Weightlifting Gloves, Black/Grey",
      price_old: "600.000đ",
      price_current: "420.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Găng tay Harbinger Grip Wristwrap Weightlifting Gloves là phụ kiện tập gym cần thiết bảo vệ tay, tăng sức nắm trong tập luyện. Găng tay Harbinger Men's Pro Gloves được sản xuất bởi Harbinger - thương hiệu phụ kiện thể hình chất lượng cao tại Mỹ. Sản phẩm được gia công kỹ lưỡng và có độ bền cao cùng màu sắc nam tính, thời trang sẽ giúp bạn tự tin hơn khi đến phòng tập.",
      specification: "•	Găng tay có tích hợp vòng quấn cổ tay để ổn định khớp cổ tay hỗ trợ khi nâng tạ <br>"
                    + "•	Lớp đệm TechGel có khớp nối rất linh hoạt để tăng cảm giác cầm nắm đồng thời mang lại sự thoải mái vượt trội <br>"
                    + "•	Chiều dài 1/2 ngón tay tăng khả năng tiếp xúc để cầm nắm tốt hơn <br>"
                    + "•	Thiết kế thông hơi làm sạch hơi ẩm, giữ cho tay luôn thoáng khí  <br>"
                    + "•	Vòng bảo vệ ngón tay cái bao phủ mặt trong của ngón tay cái bằng da để bảo vệ chống mài mòn."
    },
    {
      id: 12,
      img: "./assets/images/product_12.webp",
      name: "Harbinger Gloves Pro WristWrap Style 140",
      price_old: "320.000đ",
      price_current: "120.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Găng tay tập gym Harbinger Pro Wristwrap Gloves là phụ kiện hỗ trợ bảo vệ bàn tay và cổ tay khi tập luyện. Găng tay tập gym Harbinger có tích hợp vòng quấn cổ tay để ổn định khớp cổ tay, hỗ trợ khi tập tạ. Đây là sản phẩm của Harbinger - thương hiệu phụ kiện thể hình cao cấp của Mỹ.",
      specification: "•	Hoàn toàn có thể điều chỉnh độ chặt của dây vải WristWrap một cách linh hoạt để bảo vệ cổ tay của bạn tối đa <br>"
                    + "•	Được may 2 lớp da giúp bảo vệ tay và duy trì cảm giác trên thanh bar tốt hơn <br>"
                    + "•	Bổ sung những hạt bọt đệm nhỏ dưới lớp da bao bọc khu vực lòng bàn tay và các ngón tay <br>"
                    + "•	Có độ dài ½ chiều dài ngón tay làm tăng tiếp xúc với tạ và cảm giác tạ <br>"
                    + "•	Đường khâu đôi giúp nâng cao độ bền"
    },
    {
      id: 13,
      img: "./assets/images/product_13.webp",
      name: "Găng Tay Gym Nam Harbinger - Đen",
      price_old: "880.000đ",
      price_current: "400.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Găng Tay Nâng Tạ Harbinger là sự lựa chọn hoàn hảo cho các gymer đang tìm kiếm một đôi găng tay đa năng, hỗ trợ tối đa cho mọi bài tập. Với sự kết hợp hoàn hảo giữa tính linh hoạt, thoáng khí và ổn định cổ tay, bạn có thể tự tin chinh phục mọi mục tiêu tập luyện.",
      specification: "•	Linh hoạt và thoáng khí: Kết hợp chất liệu da thật cao cấp và vải lưới thoáng khí 2 lớp <br>"
                    + "•	Ổn định cổ tay tối đa: Tích hợp dây quấn cổ tay giúp cố định chắc chắn <br>"
                    + "•	Bảo vệ bàn tay: Lớp đệm da thật giúp chống trầy xước và đảm bảo độ bám chặt <br>"
                    + "•	Thoải mái tối ưu: Lỗ thoáng khí dạng lưới giúp thoát mồ hôi hiệu quả"
    },
    {
      id: 14,
      img: "./assets/images/product_14.webp",
      name: "Găng Tay Tập Gym Harbinger Bioform",
      price_old: "1.200.000đ",
      price_current: "999.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Sử dụng công nghệ BioForm và BioFlex đang chờ cấp bằng sáng chế, găng tay cử tạ với các miếng đệm kích hoạt nhiệt ở cổ tay với lòng bàn tay. Các miếng đệm BioForm được đặt để làm mềm bằng nhiệt độ cơ thể. Những găng tay này có tính năng bảo vệ được thiết kế để ngăn ngừa vết chai và phồng rộp cho các buổi luyện tập nâng tạ. Phần băng dán ở cổ tay giúp bạn dễ dàng điều chỉnh kích thước phù hợp. Găng tay được làm cong với chiều dài mở rộng để định vị và bảo vệ các ngón tay. Thiết kế lòng bàn tay nhiều lớp BioFlex hoạt động giống như lớp da thứ hai, di chuyển cùng với tay cầm để có hiệu suất nâng mạnh hơn. Công nghệ Spidergrip được xử lý độc quyền giúp kiểm soát độ bám và sức mạnh tối đa. Sản phẩm này này được làm bằng da thật",
      specification: "•	Các đường viền đất sét BioForm® được kích hoạt bằng nhiệt hỗ trợ bám và hấp thụ tác động <br>"
                    + "•	Da SpiderGrip ™ ở lòng bàn tay cung cấp độ bám và kiểm soát tối đa <br>"
                    + "•	Thiết kế cọ nhiều lớp BioFlex ™ để bảo vệ lòng bàn tay <br>"
                    + "•	Hệ thống đóng kép ™ cung cấp sự vừa vặn cho lòng bàn tay và dễ dàng tùy chỉnh để loại bỏ phần dư."
    },
    {
      id: 15,
      img: "./assets/images/product_15.webp",
      name: "Găng Tay Tập Gym Nữ Harbinger Training Grip® - Xanh Dương",
      price_old: "790.000đ",
      price_current: "520.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Tận hưởng sự thoải mái trong từng bài tập với thiết kế dành riêng cho phụ nữ của Găng Tay Tập Gym Nữ Harbinger Training Grip®."
                    + "Cảm nhận sự bảo vệ vượt trội và giảm mệt mỏi của đôi tay với lớp đệm tích hợp, giúp bạn tự tin vượt qua những giới hạn của mình Với thiết kế bắt mắt, "
                    + "Găng Tay Tập Gym Nữ Harbinger Pro Fitness không chỉ là vật dụng bổ trợ tập luyện, mà còn tạo nguồn động lực mạnh mẽ giúp bạn chinh phục những mục tiêu tập luyện của mình.",
      specification: "•	Lưới StretchBack ™ mang lại cảm giác vừa vặn linh hoạt <br>"
                    + "•	Lòng bàn tay được đệm lót mang lại sự thoải mái nâng cao và độ bám chắc chắn <br>"
                    + "•	Ngón cái hai lớp tang cường bảo vệ <br>"
                    + "•	Cổ tay có thể điều chỉnh hoàn toàn để vừa vặn an toàn ½ độ dài ngón tay"
    },
    {
      id: 16,
      img: "./assets/images/product_16.webp",
      name: "Găng Tay Tập Gym Nam Harbinger Power 2.0 - Xanh Quân Đội",
      price_old: "990.000đ",
      price_current: "890.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Nâng cao trải nghiệm tập luyện của bạn với Găng Tay Tập Gym Nam Harbinger Power 2.0. Sự kết hợp hoàn hảo giữa chất liệu xuất sắc và thiết kế thông minh, mang đến sự thoải mái và bảo vệ không giới hạn cho đôi tay của bạn. Đừng để bất kỳ điều gì cản trở bạn, hãy nâng tầm tập luyện của bạn ngay hôm nay và trải nghiệm sự khác biệt từ sản phẩm này!",
      specification: "•	Chất liệu bền bỉ và thoáng khí: Được làm từ loại da bền chất lượng cao và lớp vải lưới co giãn với khả năng thoáng khí tốt, giúp đôi tay luôn khô ráo và thoải mái trong suốt buổi tập <br>"
                    + "•	Đệm và bảo vệ độc đáo: Công nghệ đệm và lớp bảo vệ tiên tiến, đảm bảo sự thoải mái tối đa và bảo vệ an toàn cho bàn tay, giúp giảm áp lực và chấn thương <br>"
                    + "•	Dây đeo cổ tay điều chỉnh: Với dây đeo cổ tay có thể điều chỉnh, bạn có thể tùy chỉnh để đảm bảo sự ổn định và hỗ trợ tối đa cho cổ tay của mình <br>"
                    + "•	Nhiều kích thước: Đảm bảo rằng mỗi người dùng có thể tận hưởng sự vừa vặn tối ưu và thoải mái <br>"
                    + "•	Thích hợp cho nhiều loại tập luyện: Phù hợp cho nhiều loại tập luyện như tập luyện sức mạnh, tập cơ, và tập luyện sức bền, giúp bạn đạt được kết quả tốt nhất trong mọi buổi tập"
    },
    {
      id: 17,
      img: "./assets/images/product_17.webp",
      name: "Thảm yoga cao su NBR 10MM ADIDAS ADYG-10200BL",
      price_old: "200.000đ",
      price_current: "120.000đ",
      brand: "ADIDAS",
      origin: "Đức",
      description: "Khám phá sự êm ái và ổn định với thảm yoga TPE 2 lớp chống trượt tối ưu. Thiết kế nhẹ, dễ cuộn gọn và mang theo mọi nơi, tiện dụng cho việc luyện tập tại nhà hay phòng tập. Bề mặt kháng khuẩn, dễ lau chùi sau mỗi buổi tập. Thảm có màu sắc nhẹ nhàng, mang lại cảm giác thư giãn trong mỗi chuyển động.",
      specification: "•	Kích thước chuẩn 183cm x 61cm phù hợp mọi dáng người<br>"
                    + "•	Bề mặt chống trượt 2 mặt, an toàn khi thực hiện các động tác giữ thăng bằng <br>"
                    + "•	Cuộn gọn dễ mang theo, phù hợp cho phòng tập và du lịch"
    },
    {
      id: 18,
      img: "./assets/images/product_18.webp",
      name: "Thảm Yoga Adidas 5mm ADYG-10500PK",
      price_old: "300.000đ",
      price_current: "220.000đ",
      brand: "ADIDAS",
      origin: "Đức",
      description: "Thảm yoga chuyên dụng với bề mặt vân nổi giúp hạn chế trơn trượt hiệu quả. Độ dày 6mm lý tưởng cho các bài tập kéo giãn và thiền định lâu. Sản phẩm không bị biến dạng khi cuộn, giữ dáng tốt sau nhiều lần sử dụng. Thích hợp cho yoga, pilates, thể dục nhẹ nhàng hoặc tập core tại nhà.",
      specification: "•	Chất liệu TPE thân thiện với môi trường, không chứa PVC hay kim loại nặng<br>"
                    + "•	Thiết kế 2 lớp với họa tiết vân nổi giúp chống trơn trượt tối ưu <br>"
                    + "•	Trọng lượng nhẹ chỉ 900g, dễ dàng di chuyển<br>"
                    + "•	Bề mặt dễ lau chùi, không thấm nước và kháng mồ hôi<br>"
                    + "•	Bề mặt mịn, không gây kích ứng kể cả với da nhạy cảm"
    },
    {
      id: 19,
      img: "./assets/images/product_19.webp",
      name: "Thảm tập Yoga LiveUp Sports TPE Yoga Mat",
      price_old: "600.000đ",
      price_current: "420.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Thảm yoga cao cấp được thiết kế với độ dày lý tưởng giúp bảo vệ cột sống và khớp khi tập luyện. Bề mặt chống trượt, bám sàn tốt, hỗ trợ giữ thăng bằng trong các tư thế khó. Chất liệu thân thiện với môi trường, không chứa chất độc hại. Phù hợp cho mọi cấp độ từ người mới bắt đầu đến yogi chuyên nghiệp.",
      specification: "•	Kích thước chuẩn 183cm x 61cm phù hợp mọi dáng người<br>"
                    + "•	Độ dày 6mm giúp bảo vệ khớp gối và cột sống khi tập <br>"
                    + "•	Bề mặt chống trượt 2 mặt, an toàn khi thực hiện các động tác giữ thăng bằng<br>"
                    + "•	Cuộn gọn dễ mang theo, phù hợp cho phòng tập và du lịch "
    },
    {
      id: 20,
      img: "./assets/images/product_20.webp",
      name: "Thảm Yoga Định Tuyến FED Chất Liệu PU, Cao Su Chống Trượt",
      price_old: "500.000đ",
      price_current: "320.000đ",
      brand: "LIVEUP",
      origin: "Mỹ",
      description: "Khám phá sự êm ái và ổn định với thảm yoga TPE 2 lớp chống trượt tối ưu. Thiết kế nhẹ, dễ cuộn gọn và mang theo mọi nơi, tiện dụng cho việc luyện tập tại nhà hay phòng tập. Bề mặt kháng khuẩn, dễ lau chùi sau mỗi buổi tập. Thảm có màu sắc nhẹ nhàng, mang lại cảm giác thư giãn trong mỗi chuyển động.",
      specification: "•	Chất liệu TPE thân thiện với môi trường, không chứa PVC hay kim loại nặng<br>"
                    + "•	Thiết kế 2 lớp với họa tiết vân nổi giúp chống trơn trượt tối ưu <br>"
                    + "•	Trọng lượng nhẹ chỉ 900g, dễ dàng di chuyển<br>"
                    + "•	Bề mặt dễ lau chùi, không thấm nước và kháng mồ hôi <br>"
    },
    {
      id: 21,
      img: "./assets/images/product_21.webp",
      name: "Thảm tập gym thể thao LIVEUP",
      price_old: "300.000đ",
      price_current: "120.000đ",
      brand: "LIVEUP",
      origin: "Mỹ",
      description: "Thảm yoga chuyên dụng với bề mặt vân nổi giúp hạn chế trơn trượt hiệu quả. Độ dày 6mm lý tưởng cho các bài tập kéo giãn và thiền định lâu. Sản phẩm không bị biến dạng khi cuộn, giữ dáng tốt sau nhiều lần sử dụng. Thích hợp cho yoga, pilates, thể dục nhẹ nhàng hoặc tập core tại nhà.",
      specification: "•	Độ đàn hồi cao, không bị lún hay cong méo sau thời gian sử dụng<br>"
                    + "•	Bề mặt in hướng dẫn căn chỉnh tư thế - hỗ trợ người mới tập luyện hiệu quả <br>"
                    + "•	Khả năng cách nhiệt tốt, không lạnh khi đặt thảm trên sàn gạch<br>"
                    + "•	Nhiều màu sắc nhẹ nhàng, tươi sáng phù hợp với không gian tập luyện"
    },
    {
      id: 22,
      img: "./assets/images/product_22.webp",
      name: "Thảm yoga định tuyến Pu-Rubber Yoga MAT",
      price_old: "280.000đ",
      price_current: "210.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Được làm từ vật liệu NBR cao cấp, thảm yoga mang lại độ đàn hồi và êm ái vượt trội. Kích thước rộng rãi giúp người tập thoải mái thực hiện các tư thế khó. Dễ dàng làm sạch với khăn ẩm, không bám mồ hôi hay bụi bẩn. Là lựa chọn lý tưởng cho những ai tìm kiếm sự cân bằng giữa độ êm và độ chắc.",
      specification: "•	Chất liệu NBR êm ái, độ dày 10mm lý tưởng cho các bài tập cần lót nhiều<br>"
                    + "•	Bề mặt mịn, không gây kích ứng kể cả với da nhạy cảm <br>"
                    + "•	Phù hợp cho yoga trị liệu, pilates, stretching và tập thể lực nhẹ<br>"
                    + "•	Dây đai kèm theo giúp cố định thảm sau khi cuộn, tiện mang đi "
    },
    {
      id: 23,
      img: "./assets/images/product_23.webp",
      name: "Thảm Tập Yoga Định Tuyến Da PU Chính Hãng",
      price_old: "400.000đ",
      price_current: "220.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Thảm yoga siêu nhẹ nhưng vẫn đảm bảo độ bền cao cho tập luyện hằng ngày. Họa tiết dẫn hướng in chìm giúp căn chỉnh tư thế chuẩn xác hơn. Chất liệu TPE không mùi, không gây kích ứng da, thân thiện với môi trường. Lý tưởng cho người mới bắt đầu cần sự ổn định và an toàn khi tập.",
      specification: "•	Được thiết kế với công nghệ ép nhiệt hiện đại, bền và khó rách<br>"
                    + "•	Hai mặt sử dụng linh hoạt, giúp tăng tuổi thọ sản phẩm <br>"
                    + "•	Kháng khuẩn tốt, an toàn khi tập luyện lâu dài mà không lo mùi hôi<br>"
                    + "•	Thảm không bị dính khi tiếp xúc với da, mang lại cảm giác dễ chịu"
    },
    {
      id: 24,
      img: "./assets/images/product_24.webp",
      name: "Thảm Tập Yoga TPE 2 Lớp PEAFLO Cao Cấp",
      price_old: "100.000đ",
      price_current: "60.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Thảm yoga cao cấp được thiết kế với độ dày lý tưởng giúp bảo vệ cột sống và khớp khi tập luyện. Bề mặt chống trượt, bám sàn tốt, hỗ trợ giữ thăng bằng trong các tư thế khó. Chất liệu thân thiện với môi trường, không chứa chất độc hại. Phù hợp cho mọi cấp độ từ người mới bắt đầu đến yogi chuyên nghiệp.",
      specification: "•	Thảm tập yoga TPE có độ CHỐNG TRƠN TRƯỢT tốt, đàn hồi cao<br>"
                    + "•	Thảm yoga TPE có ĐỘ BỀN lên đến 4 đến 5 năm .  <br>"
                    + "•	Thảm tập yoga TPE có độ CHỐNG TRƠN TRƯỢT tốt, đàn hồi cao<br>"
                    + "•	Thảm yoga TPE có khả năng co giãn kéo giãn và chịu lực tốt độ bám cao<br>"
                    + "•	Thảm yoga với thiết kế mặt trên vân chìm đẹp & sang mặt dưới vân dọc sâu tạo ĐỘ BÁM CAO với màu rất bắt mắt, tinh tế."
    },
    {
      id: 25,
      img: "./assets/images/product_25.webp",
      name: "Thảm Yoga Định Tuyến Cao Su Thiên Nhiên PU Cao Cấp - YOGA QG",
      price_old: "10.000đ",
      price_current: "69.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Với chất lượng vượt trội cùng với nhiều chức năng cho người tập , thảm yoga là sản phẩm không thể thiếu của mọi người. Ngày nay chỉ với một tấm thảm bạn bạn có thể tập tại nhà không phải qua những phòng tập vừa xa nhà lại vừa đắt đỏ. Với những chức năng ngồi thiền, tập chân, tập cơ bụng.",
      specification: "•	Kích thước chuẩn 183cm x 61cm phù hợp mọi dáng người<br>"
                    + "•	Độ dày 6mm giúp bảo vệ khớp gối và cột sống khi tập <br>"
                    + "•	Bề mặt chống trượt 2 mặt, an toàn khi thực hiện các động tác giữ thăng bằng<br>"
                    + "•	Cuộn gọn dễ mang theo, phù hợp cho phòng tập và du lịch "
    },
    {
      id: 26,
      img: "./assets/images/product_26.webp",
      name: "Dây Tập Kháng Lực Ptp Ultimate Door Anchor - Đen",
      price_old: "300.000đ",
      price_current: "220.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Dây Tập Kháng Lực PTP Ultimate Door Anchor là một phụ kiện thiết yếu giúp biến PowerTube(s) của bạn thành một máy tập thể dục hoặc máy Pilates chuyên nghiệp, dù bạn đang ở đâu. Tương thích với PTP PowerTube và PowerTube+, nó cho phép bạn tập luyện từ các độ cao khác nhau ngay tại nhà hoặc trong phòng khách sạn khi bạn đang di chuyển. Chỉ cần luồn Dây Đeo Cửa PTP Ultimate Door Anchor qua bản lề cửa ra vào nhà bạn (để đảm bảo an toàn) và xỏ ống tập qua đầu móc ở đầu dây để thực hiện hàng loạt các bài tập gym và Pilates.",
      specification: "•	Lớp lót neoprene êm ái ở đầu móc giúp bảo vệ ống tập khỏi trầy xước<br>"
                    + "•	Vải dù nylon siêu bền và đường chỉ may chắc chắn, gia tăng độ bền của sản phẩm <br>"
                    + "•	Lớp đệm mút dày ở đầu dây giúp phân tán lực tác động, tránh gây hư hại cho cửa ra vào"
    },
    {
      id: 27,
      img: "./assets/images/product_27.webp",
      name: "Dây Tập Kháng Lực Ptp Dual Colour Combo - Nhiều Màu",
      price_old: "590.000đ",
      price_current: "360.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Dây Tập Kháng Lực PTP Dual Colour Combo là công cụ tập luyện hoàn hảo để bạn đạt được mục tiêu về thể hình. Sản phẩm hỗ trợ các bài tập khó như kéo xà, hít đất, giúp bạn tăng cường sức mạnh thân trên một cách hiệu quả. Dù bạn là người mới bắt đầu hay vận động viên dày dặn kinh nghiệm, Dây Tập Kháng Lực PTP Dual Colour Combo đều sẽ là người bạn đồng hành lý tưởng trên hành trình chinh phục giới hạn bản thân.",
      specification: "•	Mức hỗ trợ nhẹ (Siêu nhẹ & Nhẹ): Dành cho người đã thực hiện được các bài kéo xà, hít đất và nhúng chân nhưng muốn tăng thêm số lần lặp lại. Đây là mức hỗ trợ ít kháng lực nhất, phù hợp cho luyện tập sức mạnh, thể lực toàn diện và tăng khả năng linh hoạt.<br>"
                    + "•	Siêu nhẹ: Trọng lượng hỗ trợ 2.3-6.8kg | chiều dài 100cm <br>"
                    + "•	Nhẹ: Trọng lượng hỗ trợ 11.4-22.7kg | chiều dài 100cm<br>"
                    + "•	Mức hỗ trợ vừa (Vừa & Nặng): Cung cấp nhiều hỗ trợ hơn cho người chưa thực hiện được nhiều lần kéo xà, hít đất và nhúng chân. Mức kháng lực tăng dần giúp thử thách sức mạnh, cải thiện thể lực toàn diện và tăng khả năng linh hoạt.<br>"
                    + "•	Vừa: Trọng lượng hỗ trợ 22.7-34.1kg | chiều dài 100cm <br>"
                    + "•  Chất liệu: Latex cao cấp"
    },
    {
      id: 28,
      img: "./assets/images/product_28.webp",
      name: "RESISTANCE BAR/ Bộ dụng cụ thanh kháng lực đa năng - LIVEPRO",
      price_old: "400.000đ",
      price_current: "320.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Livepro Resistance Bar là dụng cụ tập kháng lực được sử dụng với dây kháng lực, có thể dùng cho các bài tập bắp tay và cơ tay sau, đứng đẩy tạ, chống đẩy. Cả hai bên đều được bố trí lỗ treo bằng thép, một đầu được hàn chắc chắn, đầu còn lại có thể xoay 360° trơn tru nên tránh được hiện tượng cuộn dây. Lõi bên trong làm bằng thép cao cấp, bề mặt được sơn đen bóng bền bỉ, chắc chắn và chống gỉ sét. Hai phần của tay cầm bằng bọt mật độ cao được bố trí bên ngoài bằng ống thép, giúp cầm nắm thoải mái và tập luyện an toàn hơn.",
      specification: "•	Kích thước chuẩn 183cm x 61cm phù hợp mọi dáng người<br>"
                    + "•	Phù hợp cho bài tập phục hồi, kéo giãn cơ, tăng sức mạnh và flexibility <br>"
                    + "•	Độ co giãn linh hoạt, không bị biến dạng sau thời gian dài sử dụng"
    },
    {
      id: 29,
      img: "./assets/images/product_29.webp",
      name: "RESIST TUBE/ Dây kháng lực đàn hồi có móc khóa 2 đầu - LIVEPRO",
      price_old: "100.000đ",
      price_current: "70.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Dây kháng lực bọc vải latex Livepro thích hợp để sử dụng cố định tại nhà, văn phòng và phòng tập thể dục để tập toàn thân, là một công cụ tập luyện rất hiệu quả để tăng cường sức mạnh cốt lõi, sức bền tim mạch và khả năng phối hợp. Ống latex chất lượng cao bên trong, có độ đàn hồi cao, độ bền kéo cao, khả năng phục hồi tốt và không dễ bị biến dạng; Lớp vải polyester được bọc bên ngoài, có độ bền cao, chống mài mòn và chống kéo. Khóa leo núi bằng nhôm chắc chắn và bền bỉ dùng để kết nối và cố định, rất bền. Bộ sản phẩm bao gồm bốn giá trị kháng lực (10/20/30/40LBS), với nhiều sự kết hợp khác nhau để đáp ứng các nhu cầu tập luyện khác nhau.",
      specification: "•	Chất liệu cao su latex tự nhiên, co giãn tốt, không mùi, thân thiện với môi trường<br>"
                    + "•	Móc khóa thép không gỉ, an toàn và bền bỉ qua nhiều lần sử dụng <br>"
                    + "•	Độ co giãn linh hoạt, không bị biến dạng sau thời gian dài sử dụng<br>"
                    + "•	Thích hợp sử dụng cho cả nam, nữ trong các bài tập gym tại nhà "
    },
    {
      id: 30,
      img: "./assets/images/product_30.webp",
      name: "SUPER BAND/ Dây kháng lực đàn hồi loại dài - LIVEPRO",
      price_old: "190.000đ",
      price_current: "120.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Dây tập luyện Livepro Super Training Bands dày và được thiết kế chuyên dụng cho việc tập tạ và rất hiệu quả cho cả việc tập luyện thân trên và thân dưới cho nhiều bài tập sức mạnh, tốc độ, độ dẻo dai và phục hồi chức năng. Dây tập luyện Super Training Bands rất tốt để hỗ trợ các bài tập hít xà, gập bụng và cải thiện tốc độ sang ngang và về phía trước với các bài tập như chạy bộ, kéo sau lưng và nhảy tấn. Trong quá trình cử tạ, Dây tập luyện Super Training Bands cho phép tăng trọng lượng tạ và tăng sức đề kháng cho các bài tập như đẩy tạ nằm, gập người và kéo mạnh.",
      specification: "•	Chất liệu cao su latex tự nhiên, co giãn tốt, không mùi, thân thiện với môi trường<br>"
                    + "•	Móc khóa thép không gỉ, an toàn và bền bỉ qua nhiều lần sử dụng <br>"
                    + "•	Độ co giãn linh hoạt, không bị biến dạng sau thời gian dài sử dụng<br>"
                    + "•	Thích hợp sử dụng cho cả nam, nữ trong các bài tập gym tại nhà "
    },
    {
      id: 31,
      img: "./assets/images/product_31.webp",
      name: "DOUBLE COMBAT TRAINER/ Bộ dây kháng lực tập thể lực - LIVEPRO",
      price_old: "200.000đ",
      price_current: "140.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Kết nối bốn dây kháng lực của dây đeo cổ tay và ống chân vào một điểm cố định, sau đó bạn bắt đầu luyện tập. Sản phẩm này được làm bằng cao su thiên nhiên, có độ đàn hồi tốt, giá trị sức đề kháng là 20LB, có thể kéo dài hơn 10.000 lần và sử dụng lâu dài không dễ bị biến dạng. Nó được bọc bằng vật liệu nylon bên ngoài, giúp tăng cảm giác của bàn tay và cũng có tác dụng bảo vệ vận động viên và ống cao su.",
      specification: "•	Chất liệu cao su latex tự nhiên, co giãn tốt, không mùi, thân thiện với môi trường<br>"
                    + "•	Móc khóa thép không gỉ, an toàn và bền bỉ qua nhiều lần sử dụng <br>"
                    + "•	Độ co giãn linh hoạt, không bị biến dạng sau thời gian dài sử dụng<br>"
                    + "•	Thích hợp sử dụng cho cả nam, nữ trong các bài tập gym tại nhà "
    },
    {
      id: 32,
      img: "./assets/images/product_32.webp",
      name: "RESISTANCE TUBE/ Dây kéo kháng lực có tay cầm - LIVEPRO",
      price_old: "420.000đ",
      price_current: "310.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Dây kéo được làm bằng vật liệu đàn hồi latex có tay cầm chống trượt, có tay cầm ở đầu. Dây dài 120cm và gồm 4 mức Kháng lực, tương ứng mỗi mức là một màu khác nhau. Dây kéo thoải mái và dễ mang theo, vì vậy bạn có thể tập luyện với nó mọi nơi",
      specification: "•	Chất liệu cao su latex tự nhiên, co giãn tốt, không mùi, thân thiện với môi trường<br>"
                    + "•	Móc khóa thép không gỉ, an toàn và bền bỉ qua nhiều lần sử dụng <br>"
                    + "•	Độ co giãn linh hoạt, không bị biến dạng sau thời gian dài sử dụng<br>"
                    + "•	Thích hợp sử dụng cho cả nam, nữ trong các bài tập gym tại nhà "
    },
    {
      id: 33,
      img: "./assets/images/product_33.webp",
      name: "RESISTANCE BAND/ Dây đàn hồi tập Pilates - LIVEPRO",
      price_old: "180.000đ",
      price_current: "160.000đ",
      brand: "LIVEPRO",
      origin: "Mỹ",
      description: "Dây đàn hồi Livepro Fitness là một thiết bị đa năng lý tưởng cho phục hồi chức năng, tập Pilates và thể dục dụng cụ hàng ngày, có thể được sử dụng để rèn luyện hầu như mọi cơ và khớp, tăng cường sức bền và sức mạnh. Dây đàn hồi nhẹ và dễ mang theo, vì vậy bạn có thể tập luyện ở bất cứ đâu, dù là ở văn phòng hay trên đường đi. Có 5 size kháng lực, với các màu khác nhau đánh dấu mức kháng lực khác nhau để dễ dàng tiếp cận.",
      specification: "•	Chất liệu cao su latex tự nhiên, co giãn tốt, không mùi, thân thiện với môi trường<br>"
                    + "•	Móc khóa thép không gỉ, an toàn và bền bỉ qua nhiều lần sử dụng <br>"
                    + "•	Độ co giãn linh hoạt, không bị biến dạng sau thời gian dài sử dụng<br>"
                    + "•	Thích hợp sử dụng cho cả nam, nữ trong các bài tập gym tại nhà "
    },
    {
      id: 34,
      img: "./assets/images/product_34.webp",
      name: "Đai Lưng Cứng Da Bò Tập GYM Valeo Lifting Belt (Có Lớp Đệm Êm)",
      price_old: "800.000đ",
      price_current: "710.000đ",
      brand: "Valeo",
      origin: "Mỹ",
      description: "Đai lưng chuyên dụng cho tập gym giúp cố định vùng cột sống và bảo vệ thắt lưng tối đa. Thiết kế bản rộng, ôm sát cơ thể, hỗ trợ nâng tạ an toàn và hiệu quả. Chất liệu da PU bền bỉ, lót trong êm ái, thoải mái khi đeo trong thời gian dài. Lý tưởng cho các bài tập deadlift, squat, shoulder press và các bài nâng nặng khác.",
      specification: "•	Bản lưng rộng 15cm giúp bảo vệ vùng thắt lưng khi nâng tạ nặng<br>"
                    + "•	Chất liệu da PU kết hợp foam mềm bên trong tạo sự chắc chắn và thoải mái <br>"
                    + "•	Khóa gài kim loại chắc chắn, dễ điều chỉnh lực siết<br>"
                    + "•	Thích hợp cho các bài tập squat, deadlift, bench press, overhead press "
    },
    {
      id: 35,
      img: "./assets/images/product_35.webp",
      name: "Đai Lưng Mềm Tập GYM Valeo Bản Bé Lifting Belt EVA-1",
      price_old: "1.800.000đ",
      price_current: "1.000.000đ",
      brand: "Valeo",
      origin: "Mỹ",
      description: "Hệ thống khóa gài chắc chắn giúp cố định vị trí, tránh trượt khi vận động mạnh. Lớp đệm mút bên trong tạo cảm giác êm ái, không gây đau hay cấn. Sản phẩm hỗ trợ giảm áp lực vùng lưng dưới và phòng ngừa chấn thương khi tập luyện nặng.",
      specification: "•	Đệm mút dày êm ái, giảm cảm giác cấn lưng khi siết chặt đai<br>"
                    + "•	Vải lót bên trong thấm hút mồ hôi, khử mùi hiệu quả <br>"
                    + "•	Thiết kế uốn cong ôm theo đường cong tự nhiên của lưng<br>"
                    + "•	Trọng lượng nhẹ, không gây vướng víu khi di chuyển hoặc đổi bài tập "
    },
    {
      id: 36,
      img: "./assets/images/product_36.webp",
      name: "Đai Lưng Mềm Tập GYM Valeo Bản To 15cm EVA-2",
      price_old: "1.980.000đ",
      price_current: "1.699.000đ",
      brand: "Valeo",
      origin: "Mỹ",
      description: "Chiếc đai lưng không thể thiếu cho gymer yêu thích tập luyện sức mạnh. Phần lưng đai được làm dày, chịu lực tốt, giúp ổn định cột sống trong khi nâng tạ. Thiết kế thời trang, chắc chắn nhưng vẫn đảm bảo linh hoạt khi vận động. Thích hợp sử dụng trong các bài compound và powerlifting chuyên sâu.",
      specification: "•	Khóa dán Velcro bản lớn, bám chắc, không tuột khi tập cường độ cao<br>"
                    + "•	Chất liệu vải tổng hợp co giãn nhẹ, không bị bai nhão sau thời gian sử dụng <br>"
                    + "•	Logo in nổi hoặc thêu tạo điểm nhấn thể thao mạnh mẽ<br>"
                    + "•	Dễ dàng gấp gọn và mang theo trong túi tập hoặc balo "
    },
    {
      id: 37,
      img: "./assets/images/product_37.webp",
      name: "Đai Lưng Tập Gym Harbinger Powerlifting Belt 10mm Black",
      price_old: "1.520.000đ",
      price_current: "1.200.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Đai Lưng Tập Gym Harbinger Powerlifting Belt Black 10mm được thiết kế để hỗ trợ tối ưu cho các bài tập powerlifting, đặc biệt là squat và deadlift. ",
      specification: "•	Sản phẩm đạt tiêu chuẩn hỗ trợ tập luyện thể hình chuyên nghiệp<br>"
                    + "•	Thiết kế uốn cong ôm theo đường cong tự nhiên của lưng <br>"
                    + "•	Độ co giãn linh hoạt, không bị biến dạng sau thời gian dài sử dụng<br>"
                    + "•	Giúp bảo vệ lưng dưới, hỗ trợ tăng cường hiệu suất tập luyện "
    },
    {
      id: 38,
      img: "./assets/images/product_38.webp",
      name: "Đai Lưng Tập Gym Harbinger 10mm Lever Belt - Black",
      price_old: "1.080.000đ",
      price_current: "980.000đ",
      brand: "Harbinger",
      origin: "Mỹ",
      description: "Đai lưng Harbinger 10mm Lever Belt Black là sự lựa chọn hàng đầu cho các vận động viên nâng tạ. Được thiết kế tỉ mỉ với chất liệu da lộn 10MM cao cấp, sản phẩm cung cấp sự hỗ trợ tối đa cho cột sống, giúp bạn tự tin chinh phục các mức tạ từ cơ bản đến nâng cao. ",
      specification: "•	Sản phẩm đạt tiêu chuẩn hỗ trợ tập luyện thể hình chuyên nghiệp<br>"
                    + "•	Đai không biến dạng, không xô lệch kể cả khi vận động liên tục<br>"
                    + "•	Màu sắc nam tính, mạnh mẽ, phù hợp với phong cách thể thao<br>"
                    + "•	Hỗ trợ nâng cao hiệu suất tập luyện và hạn chế chấn thương vùng thắt lưng "
    },
    {
      id: 39,
      img: "./assets/images/product_39.webp",
      name: "Đai Lưng Cứng Tập Gym Zasami",
      price_old: "1.320.000đ",
      price_current: "1.020.000đ",
      brand: "Zasami",
      origin: "Mỹ",
      description: "Được thiết kế giúp bạn bảo vệ, phần dưới của cột sống. Khi tập các động tác khó, và nặng như nâng tạ, sẽ giúp cơ hoành, cơ cột sống co và cứng để bảo vệ sức ép bên trong bụng",
      specification: "•	Chất liệu cao su latex tự nhiên, co giãn tốt, không mùi, thân thiện với môi trường<br>"
                    + "•	Chất liệu da PU kết hợp foam mềm bên trong tạo sự chắc chắn và thoải mái <br>"
                    + "•	Độ co giãn linh hoạt, không bị biến dạng sau thời gian dài sử dụng<br>"
                    + "•	Thích hợp sử dụng cho cả nam, nữ trong các bài tập gym tại nhà "
    },
    {
      id: 40,
      img: "./assets/images/product_40.webp",
      name: "Đai Lưng Gánh Tạ Tập Gym AOLIKES TC-7983",
      price_old: "999.000đ",
      price_current: "799.000đ",
      brand: "AOLIKES",
      origin: "Mỹ",
      description: "Đai lưng gánh tạ tập gym AOLIKES TC-7983 thường được sử dụng khi bạn tập nặng với các bài phức hợp như Deadlift, Squat, đứng hoặc ngồi đẩy tạ qua đầu và thậm chí là các bài đứng nhún vai, xách tạ 2 bên.",
      specification: "•	Chất liệu cao su latex tự nhiên, co giãn tốt, không mùi, thân thiện với môi trường<br>"
                    + "•	Móc khóa thép không gỉ, an toàn và bền bỉ qua nhiều lần sử dụng <br>"
                    + "•	Độ co giãn linh hoạt, không bị biến dạng sau thời gian dài sử dụng<br>"
                    + "•	Thích hợp sử dụng cho cả nam, nữ trong các bài tập gym tại nhà "
    },
  ];
  
  export { products };
  

  
  